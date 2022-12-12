import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContentContext, DataContext } from "../components/Context";

import {
  StyledAnswerDiv,
  StyledButton,
  StyledContainer,
  StyledSection,
} from "../components/StyledComponents";

export const QuizPage = () => {
  const { data } = useContext(DataContext);
  const { content } = useContext(ContentContext);
  const [correct, setCorrect] = useState(0);

  const answeredArr = [];
  //Makes it so that whatever element user clicks turns blue, pushes true answer to array for later use
  const chooseAnswer = (e, text) => {
    e.target.style.backgroundColor = "blue";
    e.target.parentNode.style.pointerEvents = "none";

    if (e.target.value == "true") {
      answeredArr.push(text);
    }
  };
  //Checks if answer is true, if so adds green background and uses array above to check how many answers are correct
  const checkAnswers = () => {
    const answersElement = document.getElementsByClassName("a");
    const answersArr = Object.entries(answersElement);
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
        {/* Displays questions */}
        {content.map((item, index) => {
          return (
            <StyledAnswerDiv key={index}>
              <div>
                <h2>{item.question}</h2>
                {/* Displays answers */}
                {content[index].ass.map((item, index) => {
                  return (
                    <StyledButton
                      key={index}
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
      {/* On click checks answers */}
      <StyledButton onClick={() => checkAnswers()}>Check Answers</StyledButton>
      {/* Displays how many questions user answered correct */}
      <p>You have {correct}/10 correct</p>
      <p>DON'T RELOAD THE PAGE, PRESS PLAY AGAIN!</p>
      {/* Links back to homepage to reload API and get new questions */}
      <Link to="/">
        <StyledButton>Play again</StyledButton>
      </Link>
    </StyledSection>
  );
};
