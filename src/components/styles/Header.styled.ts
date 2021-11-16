import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 1rem 0;
`;

export const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
