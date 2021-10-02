export const kFormatter = (
  numberInCents: number | string,
  decimals = 2,
  dec_point = '.',
  thousands_sep = ','
): string => {
  if (!numberInCents) return '0'

  const numberInDollars = Number(numberInCents) / 100

  if (numberInDollars > 1000) return `${(Math.sign(numberInDollars) * (Math.abs(numberInDollars) / 1000)).toFixed(1)}k`

  const str = numberInDollars.toFixed(decimals).toString().split('.')
  const parts = []

  for (let i = str[0].length; i > 0; i -= 3) parts.unshift(str[0].substring(Math.max(0, i - 3), i))

  str[0] = parts.join(thousands_sep)

  return str.join(dec_point)
}
