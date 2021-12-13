import React from 'react';
import {
  StyledHero,
  ImageLeft,
  ImageRight,
  Grid,
  Video,
} from './styles/Hero.styled';

export default function Hero(): JSX.Element {
  return (
    <StyledHero>
      <Video autoPlay muted loop>
        <source src="videos/satisfied.mp4" type="video/mp4" />
      </Video>
      <Grid>
        <ImageLeft src="images/calligraphy.png" alt="" />
        <ImageRight src="images/hero_face.png" alt="" />
      </Grid>
    </StyledHero>
  );
}
