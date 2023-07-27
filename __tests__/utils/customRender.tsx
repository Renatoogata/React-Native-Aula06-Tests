import { ReactElement, ReactNode } from "react"
import { CityProvider } from "@contexts/CityContext"
import { render, RenderOptions } from "@testing-library/react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

// criando um render customizado para testar a aplicação
// Mockamos todos nossos providers nesse caso 2: SafeAreaProvider e o CityProvider para usarmos em testes de componentes em que eles estão presentes
function Providers({ children }: { children: ReactNode }) {
  return (
    <SafeAreaProvider>
      <CityProvider>{children}</CityProvider>
    </SafeAreaProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options })

export * from "@testing-library/react-native"
export { customRender as render, Providers }
