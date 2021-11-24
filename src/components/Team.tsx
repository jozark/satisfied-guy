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
          instagram="https://instagram.com"
          twitter="https://twitter.com"
        >
          Satisfied Guy
        </TeamElement>
        <TeamElement
          path="images/team2.png"
          position="Galerist & Management"
          instagram="https://instagram.com"
        >
          Bludin
        </TeamElement>
        <TeamElement
          path="images/team3.png"
          position="Web Developer"
          twitter="https://twitter.com"
        >
          Joshua
        </TeamElement>
        <TeamElement
          path="images/team4.png"
          position="UX/UI Design"
          twitter="https://twitter.com"
        >
          Jan Lucas
        </TeamElement>
      </TeamWrapper>
    </StyledTeam>
  );
}
