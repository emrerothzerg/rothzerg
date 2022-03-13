import isNumber from './'

describe('isNumber', () => {
  test.each`
    input        | expectedResult
    ${'1'}       | ${true}
    ${1}         | ${true}
    ${'true'}    | ${false}
    ${0}         | ${true}
    ${1234}      | ${true}
    ${undefined} | ${false}
    ${null}      | ${false}
  `(`for '$input' returned '$expectedResult'`, async ({ input, expectedResult }) => {
    expect(isNumber(input)).toBe(expectedResult)
  })
})
