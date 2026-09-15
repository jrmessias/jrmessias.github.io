// node --test src/utils.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { vcard } from './utils.js';

const d = {
  identity: {
    name: 'Israel Messias Júnior',
    company: 'iopoint tecnologia',
    role: { pt: 'Tech Manager' },
    location: { pt: 'São Miguel do Oeste, SC — Brasil' },
    tagline: { pt: 'Desenvolvedor Full Stack' },
  },
  contact: {
    phone_url: 'tel:+5549988198409',
    email: 'mailto:jrmessias@gmail.com',
    site_url: 'https://www.jrmessias.com.br',
  },
};

test('vcard builds a parseable card with the scheme prefixes stripped', () => {
  const lines = vcard(d, 'pt').split('\r\n');
  assert.equal(lines[0], 'BEGIN:VCARD');
  assert.equal(lines.at(-1), 'END:VCARD');
  assert.ok(lines.includes('TEL;TYPE=CELL:+5549988198409'));
  assert.ok(lines.includes('EMAIL;TYPE=INTERNET:jrmessias@gmail.com'));
  assert.ok(lines.includes('N:Júnior;Israel Messias;;;'));
});

test('crc16 matches the CCITT-FALSE check value', async () => {
  const { crc16 } = await import('./pix.js');
  assert.equal(crc16('123456789'), '29B1');
});

test('pixPayload builds a BR Code with a valid trailing checksum', async () => {
  const { pixPayload, crc16 } = await import('./pix.js');
  const p = pixPayload({ key: 'jrmessias@gmail.com', name: 'Israel Messias Júnior', city: 'São Miguel do Oeste' });
  assert.ok(p.startsWith('000201'));
  assert.ok(p.includes('0014BR.GOV.BCB.PIX'));
  assert.equal(p.slice(-8, -4), '6304');
  assert.equal(crc16(p.slice(0, -4)), p.slice(-4));
  // Accents are stripped from the name and city fields.
  assert.ok(p.includes('Israel Messias Junior'));
});
