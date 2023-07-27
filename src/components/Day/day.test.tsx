import { render, screen } from "@testing-library/react-native"
import { Day } from "./index"

import clearDay from "@assets/clear_day.svg"

describe("Component: Day", () => {
  it("should be render day", () => {
    render(
      <Day
        data={{
          day: "18/07",
          min: "30ºC",
          max: "34ºC",
          icon: clearDay,
          weather: "Céu Limpo"
        }}
      />
    )

    expect(screen.getByText("18/07")).toBeTruthy()
  })
})
