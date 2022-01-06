import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
const EventSoonStyles = styled.div`
  padding: 2rem;
  border: 1px solid var(--black_1);
  border-radius: 1rem;
  .eventSoon__wrapper {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &--heading {
      h2 {
        font-weight: 700;
        text-transform: uppercase;
        opacity: 0.6;
        font-size: 1rem;
      }
      h1 {
        font-weight: 600;
      }

      p {
        margin-top: 1rem;
        font-size: 1.25rem;
      }
    }

    &--footer {
      margin-top: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        width: 1rem;
        transition: 500ms;
      }
    }

    &:hover {
      svg {
        transform: translateX(5px);
      }
    }
  }
`;

function EventSoon({ name, date, type, ...rest }) {
  return (
    <EventSoonStyles {...rest}>
      <div className='eventSoon__wrapper'>
        <div className='eventSoon__wrapper--heading'>
          <h2>Happening soon</h2>
          <h1>{name}</h1>
          <p>{date}</p>
        </div>
        <div className='eventSoon__wrapper--footer'>
          <p className='eventType'>{type}</p> <AiOutlineRight />
        </div>
      </div>
    </EventSoonStyles>
  );
}

export default EventSoon;
