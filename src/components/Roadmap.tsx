import React from 'react';
import {
  RoadmapElement,
  StyledRoadmap,
  Heading,
  RoadmapWrapper,
  Subheading,
  Text,
} from './styles/Roadmap.styled';

export default function Roadmap(): JSX.Element {
  return (
    <StyledRoadmap>
      <Text>
        <Heading id="roadmap">Roadmap</Heading>
        <Subheading>What we have planned going forward</Subheading>
      </Text>

      <RoadmapWrapper>
        <RoadmapElement>
          <h2>Mint</h2>
          <p>Launch 555 hand drawn unique satisfied guys to the community</p>
        </RoadmapElement>
        <RoadmapElement>
          <h2>Banner Collection</h2>
          <p>Airdrop special banner collection to holders of satisfied guys</p>
        </RoadmapElement>
        <RoadmapElement>
          <h2>More TBA</h2>
          <p>Place artworks in Berlin, scavenger hunts and more airdrops</p>
        </RoadmapElement>
      </RoadmapWrapper>
    </StyledRoadmap>
  );
}
