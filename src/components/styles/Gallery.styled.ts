import styled from 'styled-components';

export const StyledGallery = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('images/hamburg.svg');
  /* background-repeat: no-repeat; */
  /* background-position: top; */
  /* background-size: 200%; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GalleryWrapper = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    display: grid;
    grid-auto-flow: column;
    gap: 4rem;
    padding: 0 2rem;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    display: grid;
    grid-auto-flow: column;
    gap: 4rem;
    padding: 0 2rem;
    overflow-x: scroll;
  }
`;
