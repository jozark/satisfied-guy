import styled from 'styled-components';

type RoadmapElementProps = {
  border?: string;
};

type LineProps = {
  color?: string;
};

export const StyledRoadmap = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  background-position: 50% 80%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  gap: 2rem;
`;

export const RoadmapElement = styled.div<RoadmapElementProps>`
  max-width: 320px;
  height: fit-content;
  justify-self: center;
  background-color: #0e0f10;
  border-radius: 12px;
  border: 2px solid #0e0f10;
  border-color: ${({ border }) => border};
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
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 0.25rem;
`;

export const RoadmapWrapper = styled.div`
  min-height: 400px;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    grid-template-columns: auto;
    grid-template-rows: 1fr auto 1fr auto 1fr auto 1fr;
    justify-items: center;
    padding: 2rem 1.5rem;
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

export const Line = styled.div<LineProps>`
  border: 2px solid #d17a38;
  border-color: ${({ color }) => color};
  width: 100%;
  min-width: 1rem;
  height: 0;
  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    height: 35px;
    min-width: 0;
    width: 0;
  }
`;
