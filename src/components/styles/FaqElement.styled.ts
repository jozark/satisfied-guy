import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';

export const StyledFaqElement = styled.div`
  border-radius: 20px;
  background-color: #0e0f10;
  padding: 1.25rem 1.75rem;

  &:hover {
    background-color: #b6672b;
    transition: all 200ms ease-in-out;
  }
`;
export const Question = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;

  @media (max-width: ${({ theme }) => theme.breakingPoints.tablet.max}) {
    font-size: 1.25rem;
  }
`;

export const Answer = styled.p`
  padding-bottom: 0;
`;

export const Cover = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Plus = styled(FaPlus)`
  color: white;
`;

export const Minus = styled(FaMinus)`
  color: white;
`;
