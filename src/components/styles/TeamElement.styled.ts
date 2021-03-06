import styled from 'styled-components';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

export const StyledTeamElement = styled.div`
  display: grid;
  width: 100%;
  place-items: center;
`;

export const Image = styled.img`
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  width: 100%;
  max-width: 400px;
  filter: invert(1);

  &:hover {
    filter: invert(0);
    transition: all 100ms ease-in;
  }

  @media (max-width: 500px) {
    max-width: 150px;
  }
`;

export const Member = styled.h3`
  text-align: center;
  font-size: 2rem;
  color: #d17a38;

  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

export const Subtext = styled.p`
  font-size: 1.25rem;
  padding-top: 0;
  text-align: center;
  font-style: italic;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const SocialMedia = styled.div`
  padding-top: 0.5rem;
  gap: 1rem;
  display: flex;
`;

export const Twitter = styled(FaTwitter)`
  color: white;
  font-size: 1.5rem;

  &:hover {
    transition: all 200ms ease-in-out;
    color: #1da1f2;
    transform: scale(1.1);
  }
`;

export const Instagram = styled(FaInstagram)`
  color: white;
  font-size: 1.5rem;

  &:hover {
    transition: all 150ms ease-in-out;
    color: #cc2366;
    transform: scale(1.1);
  }
`;
