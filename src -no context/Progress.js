function Progress({ index, numLength, points, maxPoints, answer }) {
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
