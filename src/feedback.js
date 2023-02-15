import React from "react";
import completeIcon from "./images/icon-complete.svg";

const Feedback = (value) => {
  return (
    <div className="feedback">
      <img className="completeIcon" src={completeIcon} alt="complete icon" />
      <h1>Thank you!</h1>
      <p>We add your card details</p>
      <div className="contiue-btn-wrapper">
        <button onClick={() => value.submit(true)}>Continue</button>
      </div>
    </div>
  );
};

export default Feedback;
