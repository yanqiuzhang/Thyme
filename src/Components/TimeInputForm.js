import React from "react";

const TimeInputForm = (props) => {
  return (
    <form>
      <div>
        <label name="Start Time">Start Time</label>
        <input onChange={props.changeValue} name="begin" />
      </div>
      <div>
        <label name="End Time">End Time</label>
        <input onChange={props.changeValue} name="end" />
      </div>
    </form>
  );
};

export { TimeInputForm };
