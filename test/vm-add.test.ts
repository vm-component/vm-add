import add from "../src/vm-add"

/**
 * Dummy test
 */
describe("Dummy test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("1 + 1 = 2", () => {
    expect(add(1, 1)).toBe(2)
  })
})
