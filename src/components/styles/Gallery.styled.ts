import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

export const StyledGallery = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('images/hamburg.svg');
  background-repeat: no-repeat;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GalleryWrapper = styled(ScrollContainer)`
  display: grid;
  grid-auto-flow: column;
  gap: 5rem;
  padding: 0 2rem;
  padding-top: 3rem;
  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    gap: 2rem;
    padding-top: 0rem;
  }
`;
