import styled from 'styled-components';
import Line from '../assets/Line';
import { FaBars, FaTimes } from 'react-icons/fa';

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
  grid-template-columns: auto 1fr 1fr;
  gap: 2rem;

  a {
    font-family: 'Roboto Mono', monospace;
    font-size: 1.25rem;
    text-decoration: none;
    color: #fff;
    opacity: 0.7;
  }

  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    grid-template-columns: auto 1fr auto;
  }

  @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
    grid-template-columns: auto 1fr;
  }
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
  grid-template-columns: auto;
  grid-auto-flow: column;
  justify-self: flex-end;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 1023px) {
    display: block;
    justify-self: flex-end;
  }
`;
