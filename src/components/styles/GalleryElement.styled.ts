import styled from 'styled-components';

export const StyledImage = styled.img`
  max-width: 300px;
`;

export const ImageContainer = styled.div`
  position: relative;
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
  display: inline;
  z-index: 1;
  bottom: -30px;
  left: 24px;
`;
