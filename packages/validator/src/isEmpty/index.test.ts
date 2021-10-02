import { isEmpty } from '.'

describe('isEmpty', () => {
  test.each`
    input             | expectedResult
    ${'something'}    | ${false}
    ${1234}           | ${false}
    ${[12, 34]}       | ${false}
    ${['abc', 'def']} | ${false}
    ${''}             | ${true}
    ${undefined}      | ${true}
    ${null}           | ${true}
  `(`for '$input' returned '$expectedResult'`, async ({ input, expectedResult }) => {
    expect(isEmpty(input)).toBe(expectedResult)
  })
})
