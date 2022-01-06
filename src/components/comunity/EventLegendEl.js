import React from "react";
import styled from "styled-components";

const EventLegendElStyles = styled.div`
  &.orange {
    h1 {
      color: #f59d4d;
    }
  }
  &.green {
    h1 {
      color: #33744c;
    }
  }
  &.violet {
    h1 {
      color: #78388b;
    }
  }
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  h1 {
    font-size: 1rem;
    text-transform: uppercase;
  }
  p {
    font-size: 0.9rem;
  }
`;

function EventLegendEl({ type, text, ...rest }) {
  return (
    <EventLegendElStyles {...rest}>
      <h1>{type}</h1>
      <p>{text}</p>
    </EventLegendElStyles>
  );
}

export default EventLegendEl;
