import styled from 'styled-components';
import Line from '../assets/Line';
import { FaBars, FaTimes, FaDiscord, FaTwitter } from 'react-icons/fa';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 1rem 3rem;

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    padding: 1rem 1.25rem;
  }
`;

export const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 2rem;

  a {
    font-family: 'Roboto Mono', monospace;
    font-size: 1.25rem;
    text-decoration: none;
    color: #fff;
    opacity: 1;
    transform: scale(0.98);

    &:hover {
      transform: scale(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    grid-template-columns: auto 1fr auto;
  }

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const HeaderLink = styled.a`
  z-index: 1;
`;

export const StyledLine = styled(Line)`
  justify-self: center;

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    display: none;
  }
`;

export const BarIcon = styled(FaBars)`
  font-size: 1.5rem;
  color: #fff;
`;

export const CloseIcon = styled(FaTimes)`
  font-size: 1.5rem;
  color: #fff;
`;

export const Links = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto;
  grid-auto-flow: column;
  justify-self: flex-end;
  justify-content: space-between;
  width: 100%;
  max-width: 650px;
  min-width: 300px;

  @media screen and (max-width: 1023px) {
    grid-auto-flow: row;
    min-width: 0;
    width: 100%;
    justify-content: center;
    align-content: center;
    gap: 3rem;
    position: absolute;
    padding-bottom: 3rem;
    padding-top: 6rem;
    right: 0;
    left: 0;
    height: 100vh;
    top: 0;
    z-index: 0;
    max-width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px);

    a {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 1023px) {
    display: block;
    justify-self: flex-end;
    z-index: 1;
  }
`;

export const Twitter = styled(FaTwitter)`
  color: white;
  font-size: 1.45rem;
  opacity: 0.8;
`;

export const Discord = styled(FaDiscord)`
  color: white;
  font-size: 1.45rem;
  opacity: 0.8;
`;
