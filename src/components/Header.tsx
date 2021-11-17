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
          <Link to="/">
            <Logo />
          </Link>
          <Line />
          <div>
            <Link to="#">info</Link>
            <Link to="#">gallery</Link>
            <Link to="#">roadmap</Link>
            <Link to="#">team</Link>
            <Link to="#">faq</Link>
          </div>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
