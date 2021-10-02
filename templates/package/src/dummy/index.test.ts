import {} from '.'

describe('', () => {
  it('', () => {})
  test.each`
    input     | expectedResult
    ${'1234'} | ${'12.34'}
  `(`for '$input' returned '$expectedResult'`, async ({ input, expectedResult }) => {
    expect(input).toBe(expectedResult)
  })
})
