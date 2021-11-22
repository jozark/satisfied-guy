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
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: 400px;
  margin: ${({ margin }) => margin};
`;

export const Street = styled.p`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.5rem;
  padding: 0;
  line-height: 1;
`;

export const Number = styled.p`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 900;
  text-align: end;
  padding: 0;
  line-height: 1;
  color: #d17a38;
`;

export const Caption = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -30px;
  left: 24px;
`;
