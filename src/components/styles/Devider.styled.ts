import styled from 'styled-components';

export const StyledDevider = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  grid-auto-flow: column;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
`;

export const DeviderLine = styled.div`
  border: 1px solid #ffffff45;
  opacity: 0.87;
  height: 0;
`;
