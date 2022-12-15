import { ThemeProvider } from "styled-components"
import { Routs } from "../common/routes/Routs"
import { GlobalStyle } from "../common/styles/global-styles/GlobalStyle"
import { lightTheme } from "../common/styles/theme/baseTheme"
import "./App.css"

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routs />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
