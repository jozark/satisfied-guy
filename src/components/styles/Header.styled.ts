import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 1rem 2.5rem;
`;

export const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: auto 1fr 1fr;
  gap: 1rem;

  .line {
    justify-self: center;

    @media (max-width: ${({ theme }) => theme.breakingPoints.mobile}) {
      display: none;
    }
  }

  .navigation {
    display: flex;
    justify-self: flex-end;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    max-width: 550px;
  }

  a {
    font-family: 'Roboto Mono', monospace;
    text-decoration: none;
    color: #fff;
    opacity: 0.7;
  }
`;
