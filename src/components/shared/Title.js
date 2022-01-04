import React from "react";
import styled from "styled-components";

const TitleStyles = styled.h1`
  font-size: 3rem;
  line-height: 1.25em;
  font-weight: 600;
  ${(props) =>
    props.secondary &&
    `
     font-size: 2rem;
  `}
  ${(props) =>
    props.small &&
    `
     font-size: 1.5rem ;
  `}
  ${(props) =>
    props.white &&
    `
     color: var(--white_1);
  `}
  ${(props) =>
    props.smLight &&
    `
    font-weight: 500;
    font-size:1.6rem;
    
`}
`;

function Title({ children, ...rest }) {
  return <TitleStyles {...rest}>{children}</TitleStyles>;
}

export default Title;
