import { createGlobalStyle } from "styled-components";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

const GlobalStyle = createGlobalStyle`
    :root{
        --blue_1: #4395FD;
        --lightBlue_1: #F1F5FA;
        --white_1: #ffffff;
        --black_1: #0a0a0a;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    html{font-size:16px;}
    body{
        font-family:'Poppins',sans-serif;
        overflow-x:hidden;
    }
    *,*::after,*::before {margin: 0; padding: 0; box-sizing: border-box;transition: background 1s, color 1s}
    a{text-decoration:none; cursor: pointer; }
    ul,li{list-style-type: none}
    img,svg{height:100%;width:100%;}
`;

export default GlobalStyle;
