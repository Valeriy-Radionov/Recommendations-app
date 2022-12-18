import { DefaultTheme } from "styled-components"
import { ThemeEnum, ThemeStyle } from "./intarfeceTheme"

export const baseTheme: ThemeStyle = {
  colors: {
    bgColor: "#ffffff",
    textColor: "#000000",
    buttonColor: "#1a1a1a",
    dangerColor: "#ff3333",
    accentColor: "#ffcc00",
    successColor: "#46d246",
    accessoryColor: "#8c1aff",
    hoverBackground: "linear-gradient(45deg, #ff9ff 30%, #993ff 90%)",
  },
  fontFamily: {
    base: "Source Sans Pro Light",
    large: "Fyodor Bold",
  },
  fontWeight: {
    normal: 400,
    bold: 700,
  },
  fontSizeEm: {
    large: "2.2",
    medium: "1.8",
    regular: "1.2",
    small: "1.0",
  },
  size: {
    containerHeight: 100,
    conteinerWidth: 100,
    gridHeight: 100,
    gridWidth: 100,
    headerHeight: 100,
    headerWidth: 100,
    buttonHeight: 100,
    buttonWidth: 100,
    footerHeight: 90,
    footerWidth: 100,
  },
}
export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,
}

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,
  colors: {
    ...baseTheme.colors,
    textColor: "#ffffff",
    bgColor: "#000000",
    buttonColor: "#ccb3ff",
  },
}
