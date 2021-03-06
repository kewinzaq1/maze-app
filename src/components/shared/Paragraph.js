import React from "react";
import styled from "styled-components";

const ParagraphStyles = styled.p`
  font-size: 1.125rem;

  ${(props) =>
    props.small &&
    `
     font-size: .9rem !important;
  `}
`;

function Paragraph({ children, ...rest }) {
  return <ParagraphStyles {...rest}>{children}</ParagraphStyles>;
}

export default Paragraph;
