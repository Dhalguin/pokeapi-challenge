export const capitalizeWord = (text: string): string => {
  if (!text) return ''

  const firstLetter = text.charAt(0).toUpperCase()

  return firstLetter + text.slice(1, text.length)
}
