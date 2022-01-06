import React from "react";
import styled from "styled-components";

const EventListElStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  border-bottom: 1px solid var(--grey_1);
  padding-bottom: 2rem;
  h1 {
    font-weight: 600;
  }
  .eventList__inline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

function EventListEl({ date, type, name, eventType = "eventType" }) {
  return (
    <EventListElStyles>
      <div className='eventList__inline'>
        <p>{date}</p>
        <p className={eventType}>{type}</p>
      </div>
      <h1>{name}</h1>
    </EventListElStyles>
  );
}

export default EventListEl;
