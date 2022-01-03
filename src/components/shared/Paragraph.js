import React from "react";
import styled from "styled-components";

const ParagraphStyles = styled.p`
  font-size: 1.125rem;

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

function Paragraph({ children, ...rest }) {
  return <ParagraphStyles {...rest}>{children}</ParagraphStyles>;
}

export default Paragraph;
