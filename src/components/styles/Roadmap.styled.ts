import styled from 'styled-components';

export const StyledRoadmap = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  background-position: 50% 72%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  gap: 2rem;
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
  height: 600px;
  align-self: center;
  align-content: center;
  background-image: url('images/roadmap.svg');
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

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
