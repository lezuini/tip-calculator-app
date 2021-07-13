const Radio = (percent, handleRadio) => {
  return (
    <>
      <input
        type="radio"
        name="tip"
        id={"tip" + percent}
        value={percent}
        checked={0}
        onChange={handleRadio}
      />
      <label htmlFor={"tip" + percent}>{percent}%</label>
    </>
  );
};

export default Radio;
