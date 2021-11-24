import React from 'react';
import {
  Question,
  StyledFaqElement,
  Answer,
  Cover,
  Plus,
  Minus,
} from './styles/FaqElement.styled';

type FaqElementProps = {
  handleOnClick: (index: number) => void;
  isClicked: boolean;
  question: string;
  children: string;
  index: number;
};

export default function FaqElement({
  handleOnClick,
  isClicked,
  question,
  children,
  index,
}: FaqElementProps): JSX.Element {
  return (
    <StyledFaqElement onClick={() => handleOnClick(index)} key={index}>
      <Cover>
        <Question>{question}</Question>
        {isClicked ? <Minus /> : <Plus />}
      </Cover>
      {isClicked ? <Answer>{children}</Answer> : <></>}
    </StyledFaqElement>
  );
}
