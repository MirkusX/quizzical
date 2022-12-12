import "./App.css";
import { QuizPage } from "./pages/QuizPage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContentContext, DataContext } from "./components/Context";
import { LandingPage } from "./pages/LandingPage";
import { Route, Routes } from "react-router";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [content, setContent] = useState([]);
  //Gets data
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
  }, [content]);
  if (data) {
    return (
      <DataContext.Provider value={{ data, setData }}>
        <ContentContext.Provider value={{ content, setContent }}>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/quiz" element={<QuizPage />} />
            </Routes>
          </div>
        </ContentContext.Provider>
      </DataContext.Provider>
    );
  } else if (error) {
    return <h1>api out for the count bud :)</h1>;
  }
}

export default App;
