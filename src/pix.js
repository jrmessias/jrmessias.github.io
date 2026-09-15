// PIX "copia e cola" payload (BR Code / EMV MPM) — Banco Central spec.

/** CRC16/CCITT-FALSE, the checksum BR Code requires in field 63. */
export function crc16(str) {
  let crc = 0xffff;
  for (const byte of new TextEncoder().encode(str)) {
    crc ^= byte << 8;
    for (let i = 0; i < 8; i++) crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

// Every EMV field is id + 2-digit length + value.
const tlv = (id, value) => `${id}${String(value.length).padStart(2, '0')}${value}`;

// Accents and symbols are not allowed in the name/city fields.
const ascii = (s, max) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\x20-\x7E]/g, '').slice(0, max).trim();

/**
 * @param {{key: string, name: string, city: string, amount?: number, txid?: string}} p
 * @returns {string} the copy-and-paste payload; encode it as a QR code as-is.
 */
export function pixPayload({ key, name, city, amount, txid = '***' }) {
  const payload =
    tlv('00', '01') +
    tlv('26', tlv('00', 'BR.GOV.BCB.PIX') + tlv('01', key)) +
    tlv('52', '0000') +
    tlv('53', '986') +
    (amount ? tlv('54', amount.toFixed(2)) : '') +
    tlv('58', 'BR') +
    tlv('59', ascii(name, 25)) +
    tlv('60', ascii(city, 15)) +
    tlv('62', tlv('05', txid)) +
    '6304';
  return payload + crc16(payload);
}
