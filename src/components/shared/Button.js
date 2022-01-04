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
  white-space: nowrap;
  transition: 500ms cubic-bezier(0.4, 0.6, 0.32, 1.275);

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
    transition: 500ms ease-in-out;
  }

  ${(props) =>
    props.secondary &&
    `
      background: var(--blue_1);
      color: var(--white_1);   
      &:hover{
        opacity: .8;
      }
  `}
  ${(props) =>
    props.pad1 &&
    `
      padding: .75rem 1.5rem;
  `}
  ${(props) =>
    props.outline &&
    `
     border: 2px solid var(--black_1);
     &:hover{
       background: var(--black_1);
       color: #fff;
     }
  `}
  ${(props) =>
    props.outlineWhite &&
    `
     border: 2px solid rgba(255,255,255,0.4);
     &:hover{
       background: var(--white_1);
       color: var(--black_1);

       svg{
        color: var(--black_1) !important;
       }
     }
  `}
`;

function Button({ text, ...rest }) {
  return <ButtonStyles {...rest}>{text}</ButtonStyles>;
}

export default Button;
