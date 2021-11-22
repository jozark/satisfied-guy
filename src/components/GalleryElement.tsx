import React from 'react';
import {
  StyledImage,
  Street,
  Number,
  ImageContainer,
  Caption,
  OuterContainer,
} from './styles/GalleryElement.styled';

type GalleryElementProps = {
  path: string;
  street: string;
  number: string;
  className?: string;
  margin: string;
};

export default function GalleryElement({
  path,
  street,
  number,
  className,
  margin,
}: GalleryElementProps): JSX.Element {
  return (
    <OuterContainer>
      <ImageContainer margin={margin} className={className}>
        <StyledImage src={path} />
        <Caption>
          <Street>{street}</Street>
          <Number>{number}</Number>
        </Caption>
      </ImageContainer>
    </OuterContainer>
  );
}
