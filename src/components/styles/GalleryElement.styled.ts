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
  font-size: 1.5rem;
  padding: 0;
  line-height: 1;
`;

export const Number = styled.p`
  text-transform: uppercase;
  font-family: 'Sarpanch', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  text-align: end;
  padding: 0;
  line-height: 1;
  color: #d17a38;
`;

export const Caption = styled.div`
  position: absolute;
  font-family: 'Sarpanch', sans-serif;
  font-weight: 900;
  z-index: 1;
  bottom: -30px;
  left: 24px;
`;
