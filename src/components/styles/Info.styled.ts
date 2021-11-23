import styled from 'styled-components';

export const StyledInfo = styled.div`
  display: grid;
  padding: 7rem 0;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    grid-template-columns: auto;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const Heading = styled.h1`
  position: relative;
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 0.25rem;

  &::after {
    content: 'Satisfied Guy';
    position: absolute;
    bottom: 15px;
    left: 4px;
    z-index: -1;
  }

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    font-size: 2.5rem;
    justify-self: center;
  }
`;

export const Subheading = styled.h2`
  font-family: 'Mako', sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  text-transform: uppercase;
  opacity: 0.87;
  margin-bottom: 1.5rem;
`;

export const Image = styled.img`
  width: 500px;
  height: auto;
`;
