import React from 'react';
import { StyledTeam, Heading, TeamWrapper } from './styles/Team.styled';
import TeamElement from './TeamElement';

export default function Team(): JSX.Element {
  return (
    <StyledTeam>
      <Heading>Team</Heading>
      <TeamWrapper>
        <TeamElement
          path="images/team1.png"
          position="Art & Soul of the Project"
        >
          Satisfied Guy
        </TeamElement>
        <TeamElement path="images/team2.png" position="Galerist & Management">
          Bludin
        </TeamElement>
        <TeamElement path="images/team3.png" position="Web Developer">
          Joshua
        </TeamElement>
        <TeamElement path="images/team4.png" position="UX/UI Design">
          Jan Lucas
        </TeamElement>
      </TeamWrapper>
    </StyledTeam>
  );
}
