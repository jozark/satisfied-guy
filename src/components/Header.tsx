import { Link } from 'react-router-dom';
import Logo from './assets/Logo';
import {
  StyledHeader,
  Nav,
  Links,
  StyledLine,
  BarIcon,
  CloseIcon,
  MenuIcon,
} from './styles/Header.styled';

type NavbarProps = {
  isClicked: boolean;
  handleClick: () => void;
};

export default function navbar({
  isClicked,
  handleClick,
}: NavbarProps): JSX.Element {
  return (
    <StyledHeader>
      <Nav>
        <Link to="/">
          <Logo />
        </Link>
        <StyledLine />
        <Links>
          <Link to="#">info</Link>
          <Link to="#">gallery</Link>
          <Link to="#">roadmap</Link>
          <Link to="#">team</Link>
          <Link to="#">faq</Link>
        </Links>
        <MenuIcon onClick={handleClick}>
          {!isClicked ? <BarIcon /> : <CloseIcon />}
        </MenuIcon>
      </Nav>
    </StyledHeader>
  );
}
