import React from "react";
import styled from "styled-components";

const TitleStyles = styled.h1`
  font-size: 3rem;
  line-height: 1.25em;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

function Title({ children, ...rest }) {
  return <TitleStyles {...rest}>{children}</TitleStyles>;
}

export default Title;
