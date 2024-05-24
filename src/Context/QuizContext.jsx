import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "Ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * 30,
      };
    case "newAnswer":
      // here the action payload is index not actual answer
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,

        points:
          //checking if the index is equal to current option then points will be added else points stays the same
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "Finish":
      return {
        ...state,
        status: "Finish",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        highscore: state.highscore,
        questions: state.questions,
        status: "Ready",
      };
    case "tick":
      return { ...state, secondsRemaining: state.secondsRemaining - 1 };
    default:
      return "Action unknown";
  }
}
function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numLength = questions.length;
  const maxPoints = questions.reduce((pre, curr) => pre + curr.points, 0);
  // console.log(maxPoints);
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        dispatch,
        numLength,
        maxPoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
function useQuizContext() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("context is called outside the provider");
  return context;
}

export { QuizContext, QuizProvider, useQuizContext };
