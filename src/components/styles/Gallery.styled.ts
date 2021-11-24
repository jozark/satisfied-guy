import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

export const StyledGallery = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  padding: 10rem 0;
  background-image: url('images/hamburg.svg');
  background-position: 20% 30%;
  background-repeat: no-repeat;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    gap: 2rem;
    padding-top: 7rem 0;
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
