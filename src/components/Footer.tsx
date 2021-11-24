import React from 'react';
import {
  StyledFooter,
  Heading,
  Social,
  Twitter,
  Discord,
} from './styles/Footer.styled';

export default function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <Heading>Join the Community.</Heading>
      <Social>
        <Twitter />
        <Discord />
      </Social>
    </StyledFooter>
  );
}
