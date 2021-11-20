import React from 'react';
import {
  StyledImage,
  Street,
  Number,
  ImageContainer,
  Caption,
} from './styles/GalleryElement.styled';

type GalleryElementProps = {
  path: string;
  street: string;
  number: string;
};

export default function GalleryElement({
  path,
  street,
  number,
}: GalleryElementProps): JSX.Element {
  return (
    <ImageContainer>
      <StyledImage src={path} />
      <Caption>
        <Street>{street}</Street>
        <Number>{number}</Number>
      </Caption>
    </ImageContainer>
  );
}
