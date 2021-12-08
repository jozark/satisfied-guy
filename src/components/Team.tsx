import React from 'react';
import { StyledTeam, Heading, TeamWrapper } from './styles/Team.styled';
import TeamElement from './TeamElement';

export default function Team(): JSX.Element {
  return (
    <StyledTeam>
      <Heading id="team">Team</Heading>
      <TeamWrapper>
        <TeamElement
          path="images/team1.png"
          position="Art & Soul of the Project"
          instagram="https://www.instagram.com/satisfied_guy/"
          twitter="https://twitter.com/satisfied_guy"
        >
          Satisfied Guy
        </TeamElement>
        <TeamElement
          path="images/team2.png"
          position="Galerist & Management"
          instagram="https://www.instagram.com/galerieb_hamburg/"
        >
          Bludin
        </TeamElement>
        <TeamElement
          path="images/team3.png"
          position="Web Developer"
          twitter="https://twitter.com/jo_zark"
        >
          Joshua
        </TeamElement>
        <TeamElement
          path="images/team4.png"
          position="UX/UI Design"
          twitter="https://twitter.com/dOminonb"
          instagram="https://www.instagram.com/galerieb_hamburg/"
        >
          Jan
        </TeamElement>
      </TeamWrapper>
    </StyledTeam>
  );
}
