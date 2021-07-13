import React, { useState } from "react";

const initialChecked = {
  5: false,
  10: false,
  15: true,
  25: false,
  50: false,
};

const radioChecked = {
  5: false,
  10: false,
  15: false,
  25: false,
  50: false,
};

const Tips = ({ updateTip }) => {
  const [tip, setTip] = useState(15);
  const [tipCustom, setTipCustom] = useState("");
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = (e) => {
    let value = Number(e.target.value);
    setTipCustom(value);
    updateTip(value);
    setChecked(radioChecked);
  };

  const handleRadio = (e) => {
    let value = Number(e.target.value);
    setTip(value);
    console.log(tip);
    setTipCustom("");
    setChecked({ ...radioChecked, [value]: true });
    updateTip(value);
  };

  return (
    <div>
      <h3 className="margin">Select Tip %</h3>
      <div className="radio-grid">
        <input
          type="radio"
          name="tip"
          id="5p"
          value={5}
          checked={checked[5]}
          onChange={handleRadio}
        />
        <label htmlFor="5p">5%</label>
        <input
          type="radio"
          name="tip"
          id="10p"
          value={10}
          checked={checked[10]}
          onChange={handleRadio}
        />
        <label htmlFor="10p">10%</label>
        <input
          type="radio"
          name="tip"
          id="15p"
          value={15}
          checked={checked[15]}
          onChange={handleRadio}
        />
        <label htmlFor="15p">15%</label>
        <input
          type="radio"
          name="tip"
          id="25p"
          value={25}
          checked={checked[25]}
          onChange={handleRadio}
        />
        <label htmlFor="25p">25%</label>
        <input
          type="radio"
          name="tip"
          id="50p"
          value={50}
          checked={checked[50]}
          onChange={handleRadio}
        />
        <label htmlFor="50p">50%</label>
        <input
          type="number"
          name="tipCustom"
          id="tipCustom"
          placeholder="Custom"
          min={0}
          onChange={handleChange}
          value={tipCustom}
        />
      </div>
    </div>
  );
};

export default Tips;
