export enum ThemeEnum {
  light = "light",
  dark = "dark",
}
export interface ThemeStyle {
  colors: {
    bgColor: string
    textColor: string
    buttonColor: string
    dangerColor: string
    accentColor: string
    successColor: string
    accessoryColor: string
    hoverBackground: string
  }
  fontFamily: {
    base: string
    large: string
  }
  fontWeight: {
    normal: number
    bold: number
  }
  fontSizeEm: {
    large: string
    medium: string
    regular: string
    small: string
  }
  size: {
    containerHeight: number
    conteinerWidth: number
    gridHeight: number
    gridWidth: number
    headerHeight: number
    headerWidth: number
    buttonHeight: number
    buttonWidth: number
    footerHeight: number
    footerWidth: number
  }
}
