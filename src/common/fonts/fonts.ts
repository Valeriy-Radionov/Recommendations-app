import { css } from "styled-components"

export const globalFontStyle = css`
  @font-face {
    font-family: "Mukta Malar";
    src: url("./MuktaMalar-Bold.eot");
    src: url("./MuktaMalar-Bold.eot?#iefix") format("embedded-opentype"), url("./MuktaMalar-Bold.woff2") format("woff2"), url("./MuktaMalar-Bold.woff") format("woff"),
      url("./MuktaMalar-Bold.ttf") format("truetype"), url("./MuktaMalar-Bold.svg#MuktaMalar-Bold") format("svg");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Source Sans Pro";
    src: url("./SourceSansPro-Regular.eot");
    src: url("./SourceSansPro-Regular.eot?#iefix") format("embedded-opentype"), url("./SourceSansPro-Regular.woff2") format("woff2"), url("./SourceSansPro-Regular.woff") format("woff"),
      url("./SourceSansPro-Regular.ttf") format("truetype"), url("./SourceSansPro-Regular.svg#SourceSansPro-Regular") format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`
