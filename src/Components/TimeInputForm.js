import React from 'react';

const TimeInputForm = () => {
  return (
    <form>
      <div>
        <label >Start Time</label>
        <input id="begin"></input>
      </div>

      <div>
        <label>End Time</label>
        <input id="end"></input>
      </div>
    </form>
  )
}

export {TimeInputForm};