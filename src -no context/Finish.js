function Finish({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <div className="result">
        <p>{`You scored ${points} of ${maxPoints} (${Math.round(
          percentage,
          2
        )}%)`}</p>
      </div>
      <p className="highscore">{` Your highscore : ${highscore}`}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default Finish;
