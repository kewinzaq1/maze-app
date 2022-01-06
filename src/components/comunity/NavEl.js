import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import Paragraph from "../shared/Paragraph";
import { useGlobalContext } from "../../context";

const NavElStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--black_1);
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.25rem;
  opacity: 0.4;
  transition: all 0.4s;
  cursor: pointer;
  svg {
    width: 1rem;
  }

  svg:last-child {
    justify-self: flex-end;
  }

  &.active {
    opacity: 1;
  }
`;

function NavEl({ icon, text, ...rest }) {
  const { involved, setInvolved } = useGlobalContext();

  return (
    <NavElStyles
      role='button'
      {...rest}
      onClick={(e) => {
        setInvolved(text);
      }}
      className={involved === text ? "active" : ""}>
      {icon}
      <Paragraph secondary>{text}</Paragraph>
      <AiOutlineArrowRight />
    </NavElStyles>
  );
}

export default NavEl;
