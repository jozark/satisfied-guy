import styled from 'styled-components';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

export const StyledTeamElement = styled.div`
  display: grid;
  width: 100%;
  place-items: center;
`;

export const Image = styled.img`
  margin-bottom: 0.5rem;
  width: 100%;
  max-width: 400px;
`;

export const Member = styled.h3`
  text-align: center;
  font-size: 2rem;
`;

export const Subtext = styled.p`
  font-size: 1.25rem;
  text-align: center;
  font-style: italic;
  color: #d17a38;
  padding: 0;
`;

export const SocialMedia = styled.div`
  padding-top: 0.5rem;
  gap: 1rem;
  display: flex;
`;

export const Twitter = styled(FaTwitter)`
  color: white;
  font-size: 1.5rem;
`;

export const Instagram = styled(FaInstagram)`
  color: white;
  font-size: 1.5rem;
`;
