import { GalleryImages } from './assets/GalleryImages';
import GalleryElement from './GalleryElement';
import {
  GalleryWrapper,
  MobileWrapper,
  StyledGallery,
} from './styles/Gallery.styled';
import ScrollContainer from 'react-indiana-drag-scroll';

const margin = {
  top: '2rem 0 0 0',
  bottom: '0 0 2rem 0',
};

export default function Gallery(): JSX.Element {
  return (
    <StyledGallery>
      <GalleryWrapper>
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
      {/* <MobileWrapper>
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
      </MobileWrapper> */}
    </StyledGallery>
  );
}
