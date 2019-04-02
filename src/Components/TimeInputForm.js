import React from 'react';

const TimeInputForm = () => {
  return (
    <form>
      <div>
        <label name="Start Time">Start Time</label>
        <input name="begin"></input>
      </div>

      <div>
        <label name="End Time">End Time</label>
        <input name="end"></input>
      </div>
    </form>
  )
}

export {TimeInputForm};