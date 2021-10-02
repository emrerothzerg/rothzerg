import { onlyNumbers } from '.'

describe('kFormatter', () => {
  test.each`
    input        | expectedResult
    ${'emre21s'} | ${'21'}
    ${'emre'}    | ${''}
  `(`for '$input' returned '$expectedResult'`, async ({ input, expectedResult }) => {
    expect(onlyNumbers(input)).toBe(expectedResult)
  })
})
