import styled from 'styled-components';

export const StyledGallery = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  /* padding: 0 2rem; */
  background-image: url('images/hamburg.svg');
  background-repeat: no-repeat;

  &::-webkit-scrollbar {
    display: none;
  }

  .scroll {
    height: 100%;
  }
`;

export const GalleryWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
  height: fit-content;
`;
