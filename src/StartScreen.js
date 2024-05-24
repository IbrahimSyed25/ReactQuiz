import { useQuizContext } from "./Context/QuizContext";

function StartScreen() {
  const { numLength, dispatch } = useQuizContext();
  //   console.log(numLength);
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3> {numLength} question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets start
      </button>
    </div>
  );
}

export default StartScreen;
