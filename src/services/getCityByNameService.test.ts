import { api } from "./api"
import { getCityByNameService } from "./getCityByNameService"

import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse"

describe("Service: getCityByNameService", () => {
  it("should return city details", async () => {
    // quando for solicitada uma requisição get para API o jest vai interceptar a requisição e voltar os dados do objeto 'data'
    // para que o teste possa ser feito de forma independente sem recursos externos
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse })
    const response = await getCityByNameService("Sao Paulo")

    expect(response.length).toBeGreaterThan(0)
  })
})
