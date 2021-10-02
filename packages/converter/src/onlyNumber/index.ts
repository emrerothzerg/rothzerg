export const onlyNumbers = (value: string): string => {
  return value.replace(/[^\d+]/g, '')
}
