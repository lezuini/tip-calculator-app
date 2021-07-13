import React, { useState, useEffect } from "react";
import Tips from "./Tips";
import { ReactComponent as SVGpp } from "../images/icon-person.svg";
import { ReactComponent as SVGdl } from "../images/icon-dollar.svg";

const initialData = {
  bill: "",
  tipP: 15,
  people: 1,
};

const initialNewData = {
  tipPerson: 0,
  total: 0,
};

const InputsPanel = ({ setDb, reset, setDisabled }) => {
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
    setDisabled(false);
  };

  const updateTip = (tipP) => {
    setData({
      ...data,
      tipP,
    });
    setDisabled(false);
  };

  const updatePeople = (e) => {
    let people = Number(e.target.value);
    setData({
      ...data,
      people,
    });
    setDisabled(false);
  };

  return (
    <div className="panel">
      {/* Bill */}
      <div>
        <h3>Bill</h3>
        <div className="input">
          <span>{<SVGdl />}</span>
          <input
            type="number"
            placeholder="0"
            min={0}
            onChange={updateBill}
            value={data.bill ? data.bill : ""}
          />
        </div>
      </div>
      {/* Tip percentage */}
      <Tips updateTip={updateTip} reset={reset} />
      {/* Number of People */}
      <div>
        <h3>Number of People</h3>
        {data.people === 0 && <span className="error-msg">Can't be zero</span>}
        <div className="input">
          <span>{<SVGpp />}</span>
          <input
            className={`${data.people === 0 ? "error" : ""} pp-svg`}
            type="number"
            placeholder="0"
            min={0}
            onChange={updatePeople}
            value={data.people ? data.people : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default InputsPanel;
