import { render, screen } from "@testing-library/react-native"

import { NextDays } from "./index"
import clearDay from "@assets/clear_day.svg"

describe("Component: NextDays", () => {
  it("should render a day", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "30ºC",
            max: "34ºC",
            icon: clearDay,
            weather: "Céu Limpo"
          },
          {
            day: "19/07",
            min: "30ºC",
            max: "34ºC",
            icon: clearDay,
            weather: "Nublado"
          },
          {
            day: "21/07",
            min: "30ºC",
            max: "34ºC",
            icon: clearDay,
            weather: "Chuva Fraca"
          },
          {
            day: "22/07",
            min: "30ºC",
            max: "34ºC",
            icon: clearDay,
            weather: "Céu Limpo"
          },
          {
            day: "25/07",
            min: "30ºC",
            max: "34ºC",
            icon: clearDay,
            weather: "Céu Limpo"
          }
        ]}
      />
    )

    expect(screen.getByText("19/07")).toBeTruthy()
  })
})
