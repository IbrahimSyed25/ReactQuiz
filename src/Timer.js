import { useEffect } from "react";
import { useQuizContext } from "./Context/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuizContext();
  const mins = Math.round(secondsRemaining / 60, 2);
  const secs = Math.round(secondsRemaining % 60, 2);
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
