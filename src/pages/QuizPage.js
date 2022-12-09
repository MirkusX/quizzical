import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContentContext, DataContext } from "../components/Context";

import {
  StyledAnswerDiv,
  StyledButton,
  StyledContainer,
  StyledSection,
} from "../components/StyledComponents";

export const QuizPage = () => {
  const { content } = useContext(ContentContext);
  const [correct, setCorrect] = useState(0);

  const answeredArr = [];
  const chooseAnswer = (e, text) => {
    e.target.style.backgroundColor = "blue";
    e.target.parentNode.style.pointerEvents = "none";

    if (e.target.value == "true") {
      answeredArr.push(text);
      console.log(answeredArr);
    }
  };

  const checkAnswers = () => {
    const answersElement = document.getElementsByClassName("a");
    const answersArr = Object.entries(answersElement);
    console.log("h");
    answersArr.map((item, index) => {
      if (item[1].value == "true") {
        item[1].style.backgroundColor = "green";
      }
    });
    answeredArr.forEach((item, index) => {
      const count = index + 1;
      setCorrect((correct) => (correct = count));
    });
  };

  return (
    <StyledSection>
      <div>
        <h1>Quiz</h1>
      </div>
      <StyledContainer>
        {content.map((item, index) => {
          return (
            <StyledAnswerDiv key={index}>
              <div>
                <h2>{item.question}</h2>
                {content[index].ass.map((item, index) => {
                  return (
                    <StyledButton
                      className="a"
                      value={item.value}
                      onClick={(e) => chooseAnswer(e, item.text)}
                    >
                      {item.text}
                    </StyledButton>
                  );
                })}
              </div>
            </StyledAnswerDiv>
          );
        })}
      </StyledContainer>
      <StyledButton onClick={() => checkAnswers()}>Check Answers</StyledButton>
      <p>You have {correct}/10 correct</p>
      <Link to="/">
        <p>DON'T RELOAD THE PAGE, PRESS PLAY AGAIN!</p>
        <StyledButton>Play again</StyledButton>
      </Link>
    </StyledSection>
  );
};
