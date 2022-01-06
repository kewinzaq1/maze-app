import React from "react";
import styled from "styled-components";
import Title from "../shared/Title";
import EventLegendEl from "./EventLegendEl";
import EventListEl from "./EventListEl";
import EventSoon from "./EventSoon";
const EventsStyles = styled.section`
  padding: 5rem 0;
  .events__wrapper {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    &Elements {
      display: flex;
      gap: 2rem;
      flex-direction: column;
    }
    &--panel {
      display: flex;
      flex-direction: column;
      gap: 1.225rem;
    }

    &--list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }

  @media (min-width: 768px) {
    .events__wrapper {
      &--panel {
        flex-direction: column-reverse;
        width: 30%;
      }

      &--list {
        width: 70%;
      }

      &Elements {
        flex-direction: row;
        gap: 3rem;
      }
    }
  }
`;
function Events() {
  return (
    <EventsStyles>
      <div className='events__wrapper'>
        <div className='events__wrapper--heading'>
          <Title>Upcoming Events</Title>
        </div>
        <div className='events__wrapperElements'>
          <div className='events__wrapper--panel'>
            <EventLegendEl
              type='maze mondays'
              text='Learn the basics of building mazes, plus tips and tricks from our team to level up your user research.'
              className='orange'
            />
            <EventLegendEl
              type='SPOTLIGHT'
              text='Go behind the scenes with your peers and learn how they build better products with Maze.'
              className='green'
            />
            <EventLegendEl
              type='LEARNING CURVE'
              text='Join experts as they share best practices, handy tips, and more that can help optimize your workflow.'
              className='violet'
            />
            <EventSoon
              name='Getting started with Maze'
              date='10 January 2022'
              type='maze mondays'
              className='orange'
            />
          </div>
          <div className='events__wrapper--list'>
            <EventListEl
              date='10 Jan 2022'
              type='maze mondays'
              name='Getting started with Maze'
            />
            <EventListEl
              date='18 Jan 2022'
              type='The optimal path'
              name='The Optimal Path Podcast Listening Party'
              eventType='eventType eventTypePath'
            />
          </div>
        </div>
      </div>
    </EventsStyles>
  );
}

export default Events;
