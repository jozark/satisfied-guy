import { GalleryImages } from './assets/GalleryImages';
import GalleryElement from './GalleryElement';
import { GalleryWrapper, StyledGallery } from './styles/Gallery.styled';
import ScrollContainer from 'react-indiana-drag-scroll';

type GalleryProps = {
  img: string[];
};

export default function Gallery(): JSX.Element {
  return (
    <StyledGallery>
      <ScrollContainer horizontal={true} className="scroll">
        <GalleryWrapper>
          {GalleryImages.map((image, index) => {
            return (
              <GalleryElement
                key={index}
                path={image.path}
                street={image.street}
                number={image.number}
              />
            );
          })}
        </GalleryWrapper>
      </ScrollContainer>
    </StyledGallery>
  );
}
