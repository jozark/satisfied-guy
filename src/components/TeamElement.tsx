import React from 'react';
import {
  Image,
  Member,
  StyledTeamElement,
  Subtext,
} from './styles/TeamElement.styled';

type TeamElementProps = {
  path: string;
  position: string;
  children: string;
};

export default function TeamElement({
  path,
  position,
  children,
}: TeamElementProps): JSX.Element {
  return (
    <StyledTeamElement>
      <Image src={path} alt="" />
      <Member>{children}</Member>
      <Subtext>{position}</Subtext>
    </StyledTeamElement>
  );
}
