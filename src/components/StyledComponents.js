import styled from "styled-components";

//Styling

export const StyledAnswerDiv = styled.div`
  display: flex;
  border-bottom: solid gray 1px;
  width: 80%;
  justify-content: center;
`;

export const StyledButton = styled.button`
  margin: 1em;
  border: 3px solid black;
  background-color: white;
  border-radius: 10px;
  display: inline-block;
  padding: 1em;
  font-size: 1rem;
  cursor: pointer;
  font-family: "Zen Dots", cursive;
  ${(props) => {
    if (props.notA)
      return `
    background: #4D5B9E`;
  }}
`;

export const StyledSection = styled.section``;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButtonDiv = styled.div`
  display: flex;
`;
