import styled from 'styled-components';

type GalleryWrapperProps = {
  isDown: boolean;
};

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

  &:hover {
    cursor: grab;
  }

  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    gap: 1rem;
    padding: 5rem 0;
    min-height: auto;
  }
`;

export const GalleryWrapper = styled.div<GalleryWrapperProps>`
  display: grid;
  grid-auto-flow: column;
  gap: 7rem;
  padding: 0 2rem;
  padding-top: 3rem;
  overflow-x: scroll;
  overflow-y: hidden;

  ${({ isDown }) =>
    isDown &&
    `
    scroll-behavior: auto;
  `}

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    gap: 2rem;
  }
`;

export const ScrollButton = styled.button``;
