import { useState, createRef } from 'react';
import { GalleryImages } from './assets/GalleryImages';
import GalleryElement from './GalleryElement';
import { GalleryWrapper, StyledGallery } from './styles/Gallery.styled';

const margin = {
  top: '2rem 0 0 0',
  bottom: '0 0 2rem 0',
};

export default function Gallery(): JSX.Element {
  const [isDown, setIsDown] = useState<boolean>(false);

  const galleryRef = createRef<HTMLDivElement>();

  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    console.log('mouse down');
    setIsDown(true);

    if (galleryRef.current) {
      setStartX(e.pageX - galleryRef?.current?.offsetLeft);

      console.log(e.pageX - galleryRef?.current?.offsetLeft, 'startX in DOWN');

      setScrollLeft(galleryRef.current.scrollLeft);
    }
  }

  function handleMouseUp() {
    console.log('mouse up');
    setIsDown(false);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!isDown) return;

    e.preventDefault();

    if (galleryRef.current) {
      const x = e.pageX - galleryRef.current.offsetLeft;
      const delta = x - startX;

      galleryRef.current.scrollLeft = scrollLeft - delta;

      console.log(galleryRef.current.scrollLeft, 'sc');
    }
  }

  function handleMouseLeave() {
    console.log('mouse Leave');
    setIsDown(false);
  }

  function shiftLeft() {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft += 432;
    }
  }

  function shiftRight() {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft -= 432;
    }
  }

  return (
    <StyledGallery>
      <GalleryWrapper
        ref={galleryRef}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseLeave={() => handleMouseLeave()}
        onMouseUp={() => handleMouseUp()}
        onMouseMove={(e) => handleMouseMove(e)}
        isDown={isDown}
      >
        {GalleryImages.map((image, index) => {
          return (
            <GalleryElement
              margin={index % 2 === 0 ? margin.top : margin.bottom}
              key={index}
              path={image.path}
              street={image.street}
              number={image.number}
            />
          );
        })}
      </GalleryWrapper>
      <button onClick={shiftRight}>right</button>
      <button onClick={shiftLeft}>left</button>
    </StyledGallery>
  );
}
