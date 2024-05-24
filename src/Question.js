import { useQuizContext } from "./Context/QuizContext";

function Question() {
  const { questions, dispatch, answer, index } = useQuizContext();
  const question = questions[index];
  const hasAnswered = answer !== null;
  return (
    <div>
      {" "}
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, i) => (
          <button
            className={`btn btn-option ${i === answer ? "answer" : ""} ${
              hasAnswered
                ? i === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={i}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
