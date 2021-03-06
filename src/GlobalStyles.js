import { createGlobalStyle } from "styled-components";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

const GlobalStyle = createGlobalStyle`
    :root{
        --blue_1: #4395FD;
        --blue_2: #4394fd76;
        --lightBlue_1: #F1F5FA;
        --white_2: #fafafadf;
        --white_1: #ffffff;
        --black_1: #0a0a0a;
        --black_2: #111010;
        --grey_1: #c5c3c3;
        --yellow_1:#FFE6D0;
        --boxShadow_1: rgba(255, 255, 255, 0) 0px 1px 1px 0px inset,
    rgba(87, 87, 117, 0) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0) 0px 30px 60px -30px;
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
    *,*::after,*::before {margin: 0; padding: 0; box-sizing: border-box;}
    a{text-decoration:none; cursor: pointer;  color: var(--black_1)}
    ul,li{list-style-type: none}
    img,svg{height:100%;width:100%;}
    .eventType {
        border: 1px solid #f59d4d;
        color: #f59d4d;
        padding: 0.5rem;
        border-radius: 1rem;
        text-transform: uppercase;
        font-weight: 700;
      }

      .eventTypeSpotlight{
          border-color: #33744c;
          color: #33744c;
      }

      .eventTypeCurve{
        border-color: #78388b;
          color: #78388b;
      }
      .eventTypePath{
        border-color: #e06ccd;
          color: #e06ccd;
      }
`;

export default GlobalStyle;
