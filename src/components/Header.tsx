import { Link } from 'react-router-dom';
import Line from './assets/Line';
import Logo from './assets/Logo';
import { StyledHeader, Nav } from './styles/Header.styled';
import { Container } from './styles/Container.styled';

export default function navbar(): JSX.Element {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo />
          <Line />
          <div>
            <Link to="#">Info</Link>
            <Link to="#">Gallery</Link>
            <Link to="#">Roadmap</Link>
            <Link to="#">Team</Link>
            <Link to="#">FAQ</Link>
          </div>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
