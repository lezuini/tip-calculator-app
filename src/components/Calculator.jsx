import React, { useState } from "react";
import InputsPanel from "./InputsPanel";

const initialDb = {
  tipPerPerson: 1,
  totalPerPerson: 1,
};

const Calculator = () => {
  const [db, setDb] = useState(initialDb);
  const [reset, setReset] = useState(null);

  const handleReset = () => {
    setReset(Date.now());
  };

  return (
    <div className="calculator">
      <InputsPanel setDb={setDb} reset={reset} />
      <div className="results-cont">
        <div className="results">
          <div className="total">
            <div className="text">
              <h2>Tip Amount</h2>
              <span>/ person</span>
            </div>
            <p>${db.tipPerPerson}</p>
          </div>
          <div className="total">
            <div className="text">
              <h2>Total</h2>
              <span>/ person</span>
            </div>
            <p>${db.totalPerPerson}</p>
          </div>
        </div>

        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Calculator;
