import styled from 'styled-components';

type ImageContainerProps = {
  margin: string;
};

export const StyledImage = styled.img`
  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    max-width: 300px;
  }
`;

export const OuterContainer = styled.div`
  height: 380px;

  &:hover,
  &:focus {
    transform: scale(1.01);
    cursor: grab;
  }

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    height: 300px;
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: 400px;
  margin: ${({ margin }) => margin};
  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    /* margin: 0; */
    width: auto;
  }
`;

export const Street = styled.p`
  text-transform: uppercase;
  font-family: 'Sarpanch', sans-serif;
  font-weight: 900;
  font-size: 1.375rem;
  padding: 0;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    font-size: 1.125rem;
  }
`;

export const Number = styled.p`
  text-transform: uppercase;
  font-family: 'Sarpanch', sans-serif;
  font-weight: 900;
  font-size: 1.375rem;
  text-align: end;
  padding: 0;
  line-height: 1;
  color: #d17a38;

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    font-size: 1.125rem;
  }
`;

export const Caption = styled.div`
  position: absolute;
  font-family: 'Sarpanch', sans-serif;
  font-weight: 900;
  z-index: 1;
  bottom: -30px;
  left: 24px;

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    bottom: -25px;
    left: 8px;
  }
`;
