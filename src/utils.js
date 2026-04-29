// Small utility helpers
export function getLabel(value, lang = 'en') {
  // If it's already a string, return it
  if (typeof value === 'string') return value

  // If it's an object with language keys, prefer requested language
  if (value && typeof value === 'object') {
    if (value[lang]) return value[lang]
    if (value.en) return value.en
    if (value.pt) return value.pt
  }

  return ''
}

export default { getLabel }
