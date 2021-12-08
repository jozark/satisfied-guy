import styled from 'styled-components';

export const StyledTeam = styled.div`
  display: grid;
  place-items: center;
  padding: 7rem 1.5rem;
  max-width: 1366px;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    padding: 2rem 0.5rem;
  }
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 0.25rem;
  padding-bottom: 4rem;
  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    padding-bottom: 2rem;
  }
`;

export const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;
