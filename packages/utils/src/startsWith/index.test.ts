import { startsWith } from '.'

describe('startsWith', () => {
  test.each`
    string             | value         | expectedResult
    ${'emre rothzerg'} | ${'emre'}     | ${true}
    ${'emre rothzerg'} | ${'rothzerg'} | ${false}
  `(`for '$input' and search '$value' returned '$expectedResult'`, async ({ string, value, expectedResult }) => {
    expect(startsWith(string, value)).toBe(expectedResult)
  })
})
