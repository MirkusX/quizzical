import { useContext } from "react";
import { Link } from "react-router-dom";
import { CorrectContext } from "../components/Context";
import { StyledButton } from "../components/StyledComponents";

export const Finish = () => {
  const { correct } = useContext(CorrectContext);
  return (
    <>
      <p>You have {correct}/10 correct</p>
      <Link to="/quiz">
        <StyledButton>Play again</StyledButton>
      </Link>
    </>
  );
};
