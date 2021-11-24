import styled from 'styled-components';

export const StyledFaq = styled.div`
  padding: 0 1.5rem;
  max-width: 1366px;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 0.25rem;
  padding-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    padding-top: 3rem;
  }
`;

export const FaqWrapper = styled.div`
  display: grid;
  gap: 1.25rem;
`;
