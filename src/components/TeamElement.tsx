import React from 'react';
import {
  Image,
  Member,
  StyledTeamElement,
  Subtext,
  SocialMedia,
  Twitter,
  Instagram,
} from './styles/TeamElement.styled';

type TeamElementProps = {
  path: string;
  position: string;
  children: string;
  instagram?: string;
  twitter?: string;
};

export default function TeamElement({
  path,
  position,
  children,
  twitter,
  instagram,
}: TeamElementProps): JSX.Element {
  return (
    <StyledTeamElement>
      <Image src={path} alt="" />
      <Member>{children}</Member>
      <Subtext>{position}</Subtext>
      <SocialMedia>
        {twitter ? (
          <a href={twitter} rel="noreferrer" target="_blank">
            <Twitter />
          </a>
        ) : (
          <></>
        )}
        {instagram ? (
          <a href={instagram} rel="noreferrer" target="_blank">
            <Instagram />
          </a>
        ) : (
          <></>
        )}
      </SocialMedia>
    </StyledTeamElement>
  );
}
