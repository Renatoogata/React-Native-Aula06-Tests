import { getNextDays } from "./getNextDays"

//describe faz um grupo de tests
describe("getNextDays", () => {
  //it ou test usado para criar um teste
  it("should be return the next 5 days", () => {
    const days = getNextDays()

    expect(days.length).toBe(5)
  })
})
