import { render, screen } from "@testing-library/react-native"
import { WeatherItem } from "./index"

import dropIcon from "@assets/drop.svg"

describe("Component: WheaterItem", () => {
  it("should be displaying title and value.", () => {
    render(<WeatherItem icon={dropIcon} title="Umidade do ar" value="81%" />)

    const title = screen.getByText("Umidade do ar")
    const value = screen.getByText("81%")

    expect(title).toBeTruthy()
    expect(value).toBeTruthy()
  })
})
