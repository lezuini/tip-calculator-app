import React, { useState, useEffect } from "react";
import Tips from "./Tips";

const initialData = {
  bill: 0,
  tipP: 15,
  people: 1,
};

const initialNewData = {
  tipPerson: 0,
  total: 0,
};

const InputsPanel = ({ setDb, reset }) => {
  const [data, setData] = useState(initialData);
  const [newData, setNewData] = useState(initialNewData);

  useEffect(() => {
    setDb(newData);
  }, [newData]);
  // console.log(newData);

  useEffect(() => {
    setData(initialData);
  }, [reset]);

  useEffect(() => {
    // console.log(data);

    let { bill, tipP, people } = data;

    let tip = (bill * tipP) / 100,
      totalAmount = bill + tip;
    let newData = {};

    if (people > 0) {
      newData = {
        tipPerPerson: (tip / people).toFixed(2),
        totalPerPerson: (totalAmount / people).toFixed(2),
      };
    } else {
      newData = {
        tipPerPerson: 0,
        totalPerPerson: 0,
      };
    }

    setNewData(newData);
  }, [data]);

  const updateBill = (e) => {
    let bill = Number(e.target.value);
    setData({
      ...data,
      bill,
    });
  };

  const updateTip = (tipP) => {
    setData({
      ...data,
      tipP,
    });
  };

  const updatePeople = (e) => {
    let people = Number(e.target.value);
    setData({
      ...data,
      people,
    });
  };

  return (
    <div className="panel">
      {/* Bill */}
      <div>
        <h3>Bill</h3>
        <div className="input">
          <span>$</span>
          <input
            type="number"
            placeholder="0"
            min={0}
            onChange={updateBill}
            value={data.bill}
          />
        </div>
      </div>
      {/* Tip percentage */}
      <Tips updateTip={updateTip} />
      {/* Number of People */}
      <div>
        <h3>Number of People</h3>
        {data.people === 0 && <span className="error-msg">Can't be zero</span>}
        <div className="input">
          <span>$</span>
          <input
            className={data.people === 0 ? "error" : ""}
            type="number"
            placeholder="0"
            min={0}
            onChange={updatePeople}
            value={data.people}
          />
        </div>
      </div>
    </div>
  );
};

export default InputsPanel;
