const isNumber = (num: any) => {
  const numType = typeof num

  if (numType === 'number') {
    return num - num === 0
  }

  if (numType === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num)
  }

  return false
}

export default isNumber
