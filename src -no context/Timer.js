import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
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
