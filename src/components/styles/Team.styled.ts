import styled from 'styled-components';

export const StyledTeam = styled.div`
  display: grid;
  place-items: center;
  padding: 7rem 1.5rem;
  max-width: 1366px;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 0.25rem;
  padding-bottom: 4rem;
`;

export const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  justify-content: space-between;
`;
