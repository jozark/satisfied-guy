import React from 'react';
import GalleryElement from './GalleryElement';
import { GalleryWrapper, StyledGallery } from './styles/Gallery.styled';

type GalleryProps = {
  img: string[];
};

export default function Gallery(): JSX.Element {
  return (
    <StyledGallery>
      <GalleryWrapper>
        <GalleryElement
          path="images/one.jpg"
          street="Schulterblatt"
          number="05"
        />
        <GalleryElement
          path="images/two.jpg"
          street="Schulterblatt"
          number="05"
        />
        <GalleryElement
          path="images/three.jpg"
          street="Schulterblatt"
          number="05"
        />
        <GalleryElement
          path="images/four.jpg"
          street="Schulterblatt"
          number="05"
        />
        <GalleryElement
          path="images/one.jpg"
          street="Schulterblatt"
          number="05"
        />
        <GalleryElement
          path="images/two.jpg"
          street="Schulterblatt"
          number="05"
        />
        <GalleryElement
          path="images/three.jpg"
          street="Schulterblatt"
          number="05"
        />
        <GalleryElement
          path="images/four.jpg"
          street="Schulterblatt"
          number="05"
        />
      </GalleryWrapper>
    </StyledGallery>
  );
}
