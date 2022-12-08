import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrContext, ContentContext, DataContext } from "../components/Context";
import { StyledButton } from "../components/StyledComponents";

export const LandingPage = () => {
  let answers = [];
  const { data } = useContext(DataContext);
  const { setContent, content } = useContext(ContentContext);

  data.results.forEach((item, index) => {
    answers.push({
      question: item.question,

      ass: [
        { text: item.correct_answer, value: true },
        { text: item.incorrect_answers[0], value: false },
        { text: item.incorrect_answers[1], value: false },
        { text: item.incorrect_answers[2], value: false },
      ],
    });
  });
  answers.forEach((item, index) => {
    const shuffled = answers[index].ass.sort(() => 0.5 - Math.random());
  });

  useEffect(() => {
    setContent(answers.sort(() => 0.5 - Math.random()));
  }, []);

  return (
    <section>
      <h1>Le Quiz</h1>
      <p>
        Play de quiz by pressing the bewton below with your left mouse bewton
      </p>
      <Link to="/quiz">
        <StyledButton notA>Start Quiz</StyledButton>
      </Link>
    </section>
  );
};
