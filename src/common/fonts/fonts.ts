import { css } from "styled-components"

export const globalFontStyle = css`
  @font-face {
    font-family: "Fyodor Bold";
    src: url("./fyodor_bold.eot");
    src: url("./fyodor_bold.eot?#iefix") format("embedded-opentype"), url("./fyodor_bold.woff2") format("woff2"), url("./fyodor_bold.woff") format("woff"), url("./fyodor_bold.ttf") format("truetype"),
      url("./fyodor_bold.svg#fyodor_bold") format("svg");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Source Sans Pro Light";
    src: url("./source_sans_pro_light.eot");
    src: url("./source_sans_pro_light.eot?#iefix") format("embedded-opentype"), url("./source_sans_pro_light.woff2") format("woff2"), url("./source_sans_pro_light.woff") format("woff"),
      url("./source_sans_pro_light.ttf") format("truetype"), url("./source_sans_pro_light.svg#source_sans_pro_light") format("svg");
    font-style: normal;
    font-weight: normal;
  }
`
