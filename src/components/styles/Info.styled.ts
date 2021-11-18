import styled from 'styled-components';

export const StyledInfo = styled.div`
  display: grid;
  min-height: 100vh;
  padding-top: 3rem;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    grid-template-columns: auto;
  }
`;

export const Image = styled.img`
  width: 500px;
  height: auto;
`;
