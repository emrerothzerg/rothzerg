const truthy = ['true', '1']

export const asBoolean = (value: string): boolean => {
  if (!value) return false

  return truthy.includes(value.toString().toLowerCase())
}
