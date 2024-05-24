import { useQuizContext } from "./Context/QuizContext";

function NextQuestion() {
  const { dispatch, answer, index, numLength } = useQuizContext();
  const numQuestions = numLength;
  if (answer === null) return;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Finish" })}
      >
        Finish
      </button>
    );
}

export default NextQuestion;
