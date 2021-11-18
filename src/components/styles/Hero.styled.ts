import styled from 'styled-components';

export const StyledHero = styled.div`
  height: 100vh;
`;

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

export const ImageLeft = styled.img`
  margin-left: -8%;
  width: 100%;
  min-width: 580px;
  padding-bottom: 10%;

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    min-width: 300px;
    width: 500px;
    padding-bottom: 0;
  }
`;

export const ImageRight = styled.img`
  justify-self: flex-end;
  width: 30%;
  min-width: 140px;
  margin-right: 20%;
  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    width: 140px;
    padding-bottom: 2rem;
    margin-right: 0;
    margin-left: 4rem;
    justify-self: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  padding-bottom: 2.5%;
  gap: 1rem;
  grid-auto-flow: column;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    grid-template-columns: auto;
    grid-auto-flow: row;
    grid-template-rows: 1fr 1fr;
  }
`;
