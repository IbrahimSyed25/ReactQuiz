import { useQuizContext } from "./Context/QuizContext";

function Progress() {
  const { index, numLength, points, maxPoints, answer } = useQuizContext();
  return (
    <header className="progress">
      <progress
        max={numLength}
        value={index + Number(answer != null)}
      ></progress>
      <p>
        <strong>{index + 1}</strong>/{numLength}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
