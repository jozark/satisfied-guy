import React from 'react';
import { Container } from './styles/Container.styled';
import { Image, StyledInfo, Heading, Subheading } from './styles/Info.styled';

export default function Info(): JSX.Element {
  return (
    <Container>
      <StyledInfo>
        <Image src="images/double_face.png" alt="" />
        <div>
          <Heading>Satisfied Guy</Heading>
          <Subheading>Street Art Goes Digital</Subheading>
          <p>
            A local street artist from Hamburg created 500 unique handdrawn
            pieces of his signature artwork. He is represented by an emerging
            art gallery from Hamburg. His artwork can be found on almost every
            corner in Hamburg's hip neighborhoods like the Schanzenviertel,
            Karoviertel and St. Pauli.
          </p>
          <p>
            Sometimes the street artists act on the border of what's allowed.
            They take the potential risk of paying high fines. Or even worse,
            getting arrested. However, their work also contributes to the
            culture and uniqueness of cities. Usually, street artists need to
            stay anonym and make a living elsewhere. NFTs finally give street
            artists the opportunity to build a community and interact with it in
            a meaningful way.
          </p>
        </div>
      </StyledInfo>
    </Container>
  );
}
