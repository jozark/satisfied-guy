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
      <Heading id="social">Join the Community.</Heading>
      <Social>
        <Twitter />
        <a href="https://discord.gg/p5gZ7Kq6" rel="noreferrer" target="_blank">
          <Discord />
        </a>
      </Social>
    </StyledFooter>
  );
}
