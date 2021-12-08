import React from 'react';
import { Container } from './styles/Container.styled';
import { Image, StyledInfo, Heading, Subheading } from './styles/Info.styled';

export default function Info(): JSX.Element {
  return (
    <Container id="info">
      <StyledInfo>
        <Image src="images/double_face.png" alt="" />
        <div>
          <Heading>Satisfied Guy</Heading>
          <Subheading>Street Art Goes Digital</Subheading>
          <p>
            A local street artist from Hamburg has created 500 uniquely drawn
            pieces of his signature artwork. He is represented by an emerging
            art gallery from Hamburg. His well recognized art decorates the
            corners of Hamburg's cultural hotspots like the Schanzenviertel,
            Karoviertel and St. Pauli.
          </p>
          <p>
            Street art embellishes our cities. It turns them into what they are.
            For the artists, this passion comes at a price in the form of
            possible fines or arrest. However, their art should receive the
            recognition it truly deserves.
          </p>
          <p>
            When street artist sell their work publicly, they often face a
            dilemma. Monetization usually involves linking their identity to
            their art. With NFTs, street artists finally have the opportunity to
            build and interact with a community in a way that was not possible
            before.
          </p>
        </div>
      </StyledInfo>
    </Container>
  );
}
