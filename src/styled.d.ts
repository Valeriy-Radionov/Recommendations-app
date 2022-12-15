import "styled-components"
import { ThemeStyle } from "./common/styles/theme/intarfeceTheme"
declare module "styled-components" {
  export interface DefaultTheme extends ThemeStyle {
    type: ThemeEnum
  }
}
