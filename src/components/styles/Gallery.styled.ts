import styled from 'styled-components';
import { MdOutlineChevronRight, MdOutlineChevronLeft } from 'react-icons/md';

type GalleryWrapperProps = {
  isDown: boolean;
};

type ScrollButtonProps = {
  side: 'left' | 'right';
};

export const StyledGallery = styled.div`
  position: relative;
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
    /* gap: 1rem; */
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

export const ScrollButton = styled.button<ScrollButtonProps>`
  cursor: pointer;
  position: absolute;
  top: 29%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 75%,
    rgba(0, 0, 0, 0) 100%
  );
  border: none;
  height: 300px;
  ${({ side }) =>
    side === 'left'
      ? `left: 0;`
      : `
  right: 0;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 75%,
    rgba(0, 0, 0, 0) 100%
  );
  `}
  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    display: none;
  }
`;

export const ArrowRight = styled(MdOutlineChevronRight)`
  font-size: 4rem;
  color: #c0c0c0;
`;

export const ArrowLeft = styled(MdOutlineChevronLeft)`
  font-size: 4rem;
  color: #c0c0c0;
`;
