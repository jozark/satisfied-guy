import React from 'react';
import {
  RoadmapElement,
  StyledRoadmap,
  Heading,
  RoadmapWrapper,
  Subheading,
  Text,
  Line,
} from './styles/Roadmap.styled';

export default function Roadmap(): JSX.Element {
  return (
    <StyledRoadmap>
      <Text>
        <Heading id="roadmap">Roadmap</Heading>
        <Subheading>What we have planned going forward</Subheading>
      </Text>

      <RoadmapWrapper>
        <Line />
        <RoadmapElement border="#d17a38">
          <h2>Mint</h2>
          <p>Launch 555 hand drawn unique satisfied guys to the community</p>
        </RoadmapElement>
        <Line color="#2B2B2B" />
        <RoadmapElement>
          <h2>Banner Collection</h2>
          <p>Airdrop special banner collection to holders of satisfied guys</p>
        </RoadmapElement>
        <Line color="#2B2B2B" />
        <RoadmapElement>
          <h2>More TBA</h2>
          <p>Place artworks in Berlin, scavenger hunts and more</p>
        </RoadmapElement>
        <Line color="#2B2B2B" />
      </RoadmapWrapper>
    </StyledRoadmap>
  );
}
