import { FaDiscord, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: grid;
  place-items: center;
  padding: 2rem 0;
  max-width: 1366px;
  margin: 0 auto;
`;

export const Heading = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 0.25rem;
  padding-bottom: 1rem;
`;

export const Social = styled.div`
  display: flex;
  gap: 2rem;
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

export const Discord = styled(FaDiscord)`
  color: white;
  font-size: 1.5rem;

  &:hover {
    transition: all 200ms ease-in-out;
    color: #7289da;
    transform: scale(1.2);
  }
`;
