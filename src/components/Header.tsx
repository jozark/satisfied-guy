import { HashLink } from 'react-router-hash-link';
import useWindowDimensions from '../useWindowDimensions';
import Logo from './assets/Logo';
import {
  StyledHeader,
  Nav,
  Links,
  BarIcon,
  CloseIcon,
  MenuIcon,
  HeaderLink,
} from './styles/Header.styled';

type NavbarProps = {
  isClicked: boolean;
  handleClick: () => void;
};

export default function navbar({
  isClicked,
  handleClick,
}: NavbarProps): JSX.Element {
  const { height, width } = useWindowDimensions();

  return (
    <StyledHeader>
      <Nav>
        <HeaderLink>
          <Logo />
        </HeaderLink>
        <Links style={{ display: !isClicked && width < 1023 ? 'none' : '' }}>
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
