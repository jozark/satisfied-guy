import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from './assets/Logo';
import {
  StyledHeader,
  Nav,
  Links,
  StyledLine,
  BarIcon,
  CloseIcon,
  MenuIcon,
  Twitter,
  Discord,
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
        <HashLink to="/">
          <Logo />
        </HashLink>
        <Links>
          <HashLink to="#info">info</HashLink>
          <HashLink to="#gallery">gallery</HashLink>
          <HashLink to="#roadmap">roadmap</HashLink>
          <HashLink to="#team">team</HashLink>
          <HashLink to="#faq">faq</HashLink>
          <HashLink to="#social">social</HashLink>
        </Links>
        <MenuIcon onClick={handleClick}>
          {!isClicked ? <BarIcon /> : <CloseIcon />}
        </MenuIcon>
      </Nav>
    </StyledHeader>
  );
}
