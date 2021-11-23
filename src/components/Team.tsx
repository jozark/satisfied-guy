import React from 'react';
import { StyledTeam, Heading, TeamWrapper } from './styles/Team.styled';
import TeamElement from './TeamElement';

export default function Team(): JSX.Element {
  return (
    <StyledTeam>
      <Heading>Team</Heading>
      <TeamWrapper>
        <TeamElement
          path="images/double_face.png"
          position="Art & Soul of the Project"
        >
          Satisfied Guy
        </TeamElement>
        <TeamElement
          path="images/double_face.png"
          position="Art & Soul of the Project"
        >
          Bludin
        </TeamElement>
        <TeamElement
          path="images/double_face.png"
          position="Art & Soul of the Project"
        >
          Joshua
        </TeamElement>
        <TeamElement
          path="images/double_face.png"
          position="Art & Soul of the Project"
        >
          Jan Lucas
        </TeamElement>
      </TeamWrapper>
    </StyledTeam>
  );
}
