import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  black: "#1d1d1d",
  point: "salmon",
};

export const spacing = {
  mainPadding: "10%",
};

const GlobalStyled = createGlobalStyle`

${reset}

body{
    letter-spacing: -1px;
}

a{
    text-decoration:none;
    color: ${colors.black};
}

img{
    width:100%;
    display:block;
}
`;

export default GlobalStyled;
