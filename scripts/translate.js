// Auto-translation script: German content → English via DeepL
const fs   = require('fs');
const path = require('path');

const DEEPL_KEY   = process.env.DEEPL_API_KEY;
const CONTENT_DIR = 'content';
const EN_DIR      = path.join(CONTENT_DIR, 'en');

// Terms that must NOT be translated
const KEEP = [
  'Brandenburgisches Staatsorchester Frankfurt (Oder)',
  'Brandenburgisches Staatsorchester',
  'Förderverein',
  'Spannungsfelder',
  'Frankfurt (Oder)',
  'Słubice',
  'Collegium Polonicum',
  'Kleist Forum',
  'Logenstraße',
  'BSOF',
];

function protect(text) {
  let out = text;
  const used = [];
  KEEP.forEach((term, i) => {
    if (out.includes(term)) {
      const ph = `XKEEPX${i}X`;
      out = out.split(term).join(ph);
      used.push({ ph, term });
    }
  });
  return { text: out, used };
}

function restore(text, used) {
  let out = text;
  used.forEach(({ ph, term }) => {
    out = out.split(ph).join(term);
  });
  return out;
}

async function translateText(text) {
  if (!text || typeof text !== 'string' || text.trim() === '') return text;

  const { text: protected_, used } = protect(text);

  const res = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${DEEPL_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: [protected_],
      source_lang: 'DE',
      target_lang: 'EN-GB',
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DeepL error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return restore(data.translations[0].text, used);
}

async function translateFile(filename) {
  const srcPath = path.join(CONTENT_DIR, filename);
  const dstPath = path.join(EN_DIR, filename);

  const de = JSON.parse(fs.readFileSync(srcPath, 'utf8'));
  const en = {};

  for (const [key, value] of Object.entries(de)) {
    en[key] = await translateText(value);
    process.stdout.write(`  ✓ ${key}\n`);
  }

  fs.writeFileSync(dstPath, JSON.stringify(en, null, 2) + '\n', 'utf8');
  console.log(`→ content/en/${filename} saved`);
}

async function main() {
  if (!DEEPL_KEY) throw new Error('DEEPL_API_KEY is not set');
  fs.mkdirSync(EN_DIR, { recursive: true });

  const files = fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.json'));

  for (const file of files) {
    console.log(`\nTranslating ${file}…`);
    await translateFile(file);
  }
  console.log('\nDone.');
}

main().catch(e => { console.error(e); process.exit(1); });
