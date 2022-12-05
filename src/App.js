import logo from "./logo.svg";
import "./App.css";
import { QuizPage } from "./pages/QuizPage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ArrContext, CorrectContext, DataContext } from "./components/Context";
import { LandingPage } from "./pages/LandingPage";
import { Route, Routes } from "react-router";
import { Finish } from "./pages/Finish";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [correct, setCorrect] = useState(0);
  const getData = () => {
    axios
      .get("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((response) => {
        setData(response.data);
      })
      .catch((response) => {
        setError(response);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  if (data) {
    return (
      <CorrectContext.Provider value={{ correct, setCorrect }}>
        <DataContext.Provider value={{ data, setData }}>
          <div className="App">
            <Routes>
              <Route path="/finish" element={<Finish />} />
              <Route exact path="*" element={<LandingPage />} />
              <Route path="/quiz" element={<QuizPage />} />
            </Routes>
          </div>
        </DataContext.Provider>
      </CorrectContext.Provider>
    );
  } else if (error) {
    return <h1>api out for the count bud :)</h1>;
  }
}

export default App;
