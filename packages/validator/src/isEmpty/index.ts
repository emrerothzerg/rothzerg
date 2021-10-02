export const isEmpty = (value: string) => {
  if (!value) return true

  return !(value.toString().length > 0)
}

export const isNotEmpty = (value: string) => {
  return !isEmpty(value)
}
