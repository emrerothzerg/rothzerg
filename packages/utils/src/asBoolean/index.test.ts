import { asBoolean } from '.'

describe('asBoolean', () => {
  test.each`
    input        | expectedResult
    ${'1'}       | ${true}
    ${'true'}    | ${true}
    ${0}         | ${false}
    ${1234}      | ${false}
    ${undefined} | ${false}
    ${null}      | ${false}
  `(`for '$input' returned '$expectedResult'`, async ({ input, expectedResult }) => {
    expect(asBoolean(input)).toBe(expectedResult)
  })
})
