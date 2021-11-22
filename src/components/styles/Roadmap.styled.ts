import styled from 'styled-components';

export const StyledRoadmap = styled.div`
  position: relative;
  display: grid;
  background-image: url('images/roadmap.svg');
  grid-template-rows: auto 1fr;
  background-position: 50% 78%;
  background-repeat: no-repeat;
  background-size: auto;
  height: 100vh;
  width: 100%;
  padding: 0 2rem;
`;

export const RoadmapElement = styled.div`
  max-width: 320px;
  height: fit-content;
  justify-self: center;
  background-color: #000000;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 1rem 1rem;

  h2 {
    font-size: 1.5rem;
    color: #d17a38;
  }

  p {
    font-size: 1.125rem;
  }

  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    max-width: 500px;
  }
`;

export const Text = styled.div`
  padding-top: 3rem;
  justify-self: center;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    padding-top: 0;
  }
`;

export const Heading = styled.h1`
  position: relative;
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 0.25rem;
`;

export const RoadmapWrapper = styled.div`
  align-self: center;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    grid-auto-flow: row;
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
