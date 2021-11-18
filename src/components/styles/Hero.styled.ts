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
  padding-bottom: 10%;
`;

export const ImageRight = styled.img`
  justify-self: flex-end;
  width: 30%;
  margin-right: 20%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  padding-bottom: 2.5%;
  gap: 1rem;
  grid-auto-flow: column;
  align-items: flex-end;
`;
