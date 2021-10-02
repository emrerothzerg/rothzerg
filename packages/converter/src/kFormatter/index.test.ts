import { kFormatter } from '.'

describe('kFormatter', () => {
  test.each`
    input        | expectedResult
    ${'1234'}    | ${'12.34'}
    ${1234}      | ${'12.34'}
    ${'123456'}  | ${'1.2k'}
    ${123456}    | ${'1.2k'}
    ${123}       | ${'1.23'}
    ${0}         | ${'0'}
    ${undefined} | ${'0'}
    ${null}      | ${'0'}
  `(`for '$input' returned '$expectedResult'`, async ({ input, expectedResult }) => {
    expect(kFormatter(input)).toBe(expectedResult)
  })
})
