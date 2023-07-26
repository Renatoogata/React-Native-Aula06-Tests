import { render, screen, fireEvent } from "@testing-library/react-native"
import { SelectList } from "./index"

describe("Component: SelectList", () => {
  it("should be return city details selected.", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "Sao Paulo", latitude: 789, longitude: 987 }
    ]

    // criando uma função do jest mockada (mock)
    const onPress = jest.fn()

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />)

    // /.../ -> tudo que tiver sao no caso, i -> ignorar letra maiscula e minuscula
    const selectedCity = screen.getByText(/sao/i)
    // simula o onPress()
    fireEvent.press(selectedCity)

    // esperado que a função onPress seja chamada 1 vez
    expect(onPress).toBeCalledTimes(1)

    expect(onPress).toBeCalledWith(data[1])
  })

  it("not should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />)

    const options = screen.getByTestId("options")

    // é esperado que options não tenham componentes filhos
    expect(options.children).toHaveLength(0)
  })
})
