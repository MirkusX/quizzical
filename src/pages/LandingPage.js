import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArrContext } from "../components/Context";
import { StyledButton } from "../components/StyledComponents";

export const LandingPage = () => {
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
