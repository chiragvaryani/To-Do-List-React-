import { useState } from "react";

/* eslint-disable react/prop-types */
function Addtodo({ onNewitem }) {
  const [todonaam, setTodonaam] = useState();
  const [dueDate, setdueDate] = useState();

  const handleOnchangename = (event) => {
    setTodonaam(event.target.value);
  };

  const handleOnchangedate = (event) => {
    setdueDate(event.target.value);
  };

  const handleAddbuttonClicked = () => {
    onNewitem(todonaam, dueDate);
    setTodonaam("");
    setdueDate("");
  };
  return (
    <div className="row cg-row">
      <div className="col-4">
        <input
          type="text"
          placeholder="Enter todo here"
          onChange={handleOnchangename}
          value={todonaam}
        />
      </div>
      <div className="col-4">
        <input type="date" onChange={handleOnchangedate} value={dueDate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success cg-btn"
          onClick={handleAddbuttonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Addtodo;
