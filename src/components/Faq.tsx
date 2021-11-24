import React from 'react';
import { StyledFaq, Heading, FaqWrapper } from './styles/Faq.styled';

type FaqProps = {
  children: JSX.Element[];
};

export default function Faq({ children }: FaqProps): JSX.Element {
  return (
    <StyledFaq>
      <Heading id="faq">FAQ's</Heading>
      <FaqWrapper>{children}</FaqWrapper>
    </StyledFaq>
  );
}
