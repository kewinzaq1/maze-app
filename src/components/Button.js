import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.a`
  text-transform: capitalize;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 500;
  position: relative;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    z-index: -1;
    background-color: transparent;
  }

  ${(props) =>
    props.secondary &&
    `
      background: var(--blue_1);
      color: var(--white_1);   
  `}
  ${(props) =>
    props.outline &&
    `
     border: 2px solid var(--black_1);
     
  `}
`;

function Button({ text, ...rest }) {
  return <ButtonStyles {...rest}>{text}</ButtonStyles>;
}

export default Button;
