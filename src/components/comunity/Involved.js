import React from "react";
import Title from "../shared/Title";
import Panel from "./Panel";
import contribute from "../../assets/comunity/panels/contribute.jpg";
import events from "../../assets/comunity/panels/events.jpg";
import partner from "../../assets/comunity/panels/partner.jpg";
import stayConnected from "../../assets/comunity/panels/stayConnected.jpg";
import support from "../../assets/comunity/panels/support.jpg";
import styled from "styled-components";
import {
  AiTwotoneCalendar,
  AiOutlineWechat,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

import { GrSupport, GrConnectivity } from "react-icons/gr";
import NavEl from "./NavEl";
import { useGlobalContext } from "../../context";

const InvolvedStyles = styled.section`
  padding: 5rem 0;
  .involved__wrapper {
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 2rem;
    max-width: 1200px;
    &--heading {
      align-self: flex-start;
    }

    &--panels {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .involved__nav {
      width: 20rem;
      display: none;
      gap: 1rem;
    }
  }

  @media (min-width: 768px) {
    .involved__wrapper {
      .involved__nav {
        display: flex;
        flex-direction: column;
      }
    }

    .involved__wrapper--panel {
      display: none;
      width: 70%;
      height: 100%;
    }

    .involved__wrapper--panels {
      display: flex;
      flex-direction: row;
      height: 23rem;
      width: 100%;
    }

    .involved__wrapper--panel--active {
      display: flex !important;
    }
  }
`;

function Involved() {
  const { involved } = useGlobalContext();
  return (
    <InvolvedStyles>
      <div className='involved__wrapper'>
        <div className='involved__wrapper--heading'>
          <Title>Get involved</Title>
        </div>
        <div className='involved__wrapper--panels'>
          <nav className='involved__nav'>
            <NavEl icon={<AiTwotoneCalendar />} text='Community events' />
            <NavEl icon={<AiOutlineWechat />} text='Contribute content' />
            <NavEl icon={<AiOutlineUsergroupAdd />} text='Partner with us' />
            <NavEl icon={<GrSupport />} text='Get maze support' />
            <NavEl icon={<GrConnectivity />} text='Stay connected' />
          </nav>
          <Panel
            background={contribute}
            title='Community events'
            description='Discover our upcoming events and meetups to learn, grow, and connect with other a-maze-ing product people.'
            buttonText='Join an event'
            className={
              involved === "Community events"
                ? "involved__wrapper--panel involved__wrapper--panel--active"
                : "involved__wrapper--panel"
            }
          />
          <Panel
            background={events}
            title='Contribute content'
            description="Got something to share? We always love to see what you're working on. Submit your content ideas to inspire big ideas in our a-maze-ing community."
            buttonText='Share something'
            className={
              involved === "Contribute content"
                ? "involved__wrapper--panel involved__wrapper--panel--active"
                : "involved__wrapper--panel"
            }
          />
          <Panel
            background={partner}
            title='Partner with us'
            description="Get in touch to become our next community partner—we'd love to hear from you!"
            buttonText='Partner up'
            className={
              involved === "Partner with us"
                ? "involved__wrapper--panel involved__wrapper--panel--active"
                : "involved__wrapper--panel"
            }
          />
          <Panel
            background={stayConnected}
            title='Get maze support'
            description='Ask questions and find the support you need to get your projects back on track.'
            buttonText='Get support'
            className={
              involved === "Get maze support"
                ? "involved__wrapper--panel involved__wrapper--panel--active"
                : "involved__wrapper--panel"
            }
          />
          <Panel
            background={support}
            title='Stay connected'
            description="Feeling out of the loop? Stay up to date and connected with all things Maze on our Twitter. And don't be shy, say hi! We love a good conversation."
            buttonText='Join us'
            className={
              involved === "Stay connected"
                ? "involved__wrapper--panel involved__wrapper--panel--active"
                : "involved__wrapper--panel"
            }
          />
        </div>
      </div>
    </InvolvedStyles>
  );
}

export default Involved;
