import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrContext, ContentContext, DataContext } from "../components/Context";
import { Replacements, Replacers, ToBeReplaced } from "../components/Replacers";
import { StyledButton } from "../components/StyledComponents";

export const LandingPage = () => {
  let answers = [];
  const { data } = useContext(DataContext);
  const { setContent, content } = useContext(ContentContext);

  const replaceChars = (props) => {
    return props.replace(
      /((&amp;;|&quot;|&#039;|&rsquo;|&ldquo;|&rdquo;|&eacute;|&shy;|&Uuml;|&Aacute;|&aacute;))/g,
      (m) => Replacements[m]
    );
  };

  data.results.forEach((item, index) => {
    answers.push({
      question: replaceChars(item.question),

      ass: [
        { text: replaceChars(item.correct_answer), value: true },
        { text: replaceChars(item.incorrect_answers[0]), value: false },
        { text: replaceChars(item.incorrect_answers[1]), value: false },
        { text: replaceChars(item.incorrect_answers[2]), value: false },
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
