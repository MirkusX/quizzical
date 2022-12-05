import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CorrectContext, DataContext } from "../components/Context";

import {
  StyledAnswerDiv,
  StyledButton,
  StyledContainer,
  StyledSection,
} from "../components/StyledComponents";

export const QuizPage = () => {
  const { setCorrect } = useContext(CorrectContext);
  console.log("DO");
  const { data } = useContext(DataContext);
  const answeredArr = [];
  const chooseAnswer = (text, tna, e) => {
    e.target.style.backgroundColor = "blue";
    e.target.parentNode.style.pointerEvents = "none";
    if (tna === true) {
      answeredArr.push({ text, tna });
    }
  };
  const shuffle = (props) => {
    return props.sort(() => 0.5 - Math.random());
  };
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
        {data.results.map((item, index) => {
          const answers = [
            { text: item.correct_answer, tna: true },
            { text: item.incorrect_answers[0], tna: false },
            { text: item.incorrect_answers[1], tna: false },
            { text: item.incorrect_answers[2], tna: false },
          ];

          const shuffledAnswers = shuffle(answers);

          return (
            <StyledAnswerDiv>
              <div key={index}>
                <h2>{item.question}</h2>
                {shuffledAnswers.map((item, index) => {
                  return (
                    <StyledButton
                      key={index}
                      className="a"
                      value={item.tna}
                      onClick={(e) => chooseAnswer(item.text, item.tna, e)}
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

      <Link to="/finish">
        <StyledButton onClick={() => checkAnswers()}>
          Check Answers
        </StyledButton>
      </Link>
    </StyledSection>
  );
};
