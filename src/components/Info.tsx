import React from 'react';
import { Container } from './styles/Container.styled';
import { Image, StyledInfo } from './styles/Info.styled';

export default function Info(): JSX.Element {
  return (
    <Container>
      <StyledInfo>
        <Image src="images/double_face.png" alt="" />
        <div>
          <h1>Satisfied Guy</h1>
          <h2>Street Art Goes Digital</h2>
          <p>
            A local street artist from Hamburg created 5000 unique pictures of
            his signature artwork. He is represented by an emerging art gallery
            from Hamburg. A local street artist from Hamburg created 5000 unique
            pictures of his signature artwork. He is represented by an emerging
            art gallery from Hamburg.
          </p>
          <p>
            A local street artist from Hamburg created 5000 unique pictures of
            his signature artwork. He is represented by an emerging art gallery
            from Hamburg. A local street artist from Hamburg created 5000 unique
            pictures of his signature artwork. He is represented by an emerging
            art gallery from Hamburg.
          </p>
        </div>
      </StyledInfo>
    </Container>
  );
}
