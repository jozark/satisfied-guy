import React from 'react';
import { DeviderLine, StyledDevider } from './styles/Devider.styled';

type DeviderProps = {
  children: string;
};

export default function Devider({ children }: DeviderProps): JSX.Element {
  return (
    <StyledDevider>
      <DeviderLine />
      {children}
      <DeviderLine />
    </StyledDevider>
  );
}
