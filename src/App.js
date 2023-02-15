import React, { useState } from "react";
import "./App.css";
import Form from "./Form.js";
import backGround from "./images/bg-main-desktop.png";
import logoCard from "./images/bg-card-front.png";
import backCard from "./images/bg-card-back.png";
import frontlogo from "./images/card-logo.svg";
import Feedback from "./feedback";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [Year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState(false);
  const [submit, setsubmit] = useState(false);
  const [erroMessage, seterroMessage] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();

    if (
      cardNumber.length === 0 ||
      Year.length === 0 ||
      month.length === 0 ||
      cardName.length === 0 ||
      cvc.length === 0
    ) {
      setError(true);
    } else if (cvc.length > 3 || cvc.length < 3) {
      setError(true);
    } else if (isNaN(cardNumber)) {
      setError(true);
    } else if (Year.length > 2 || Year.length < 2) {
    } else {
      setsubmit(true);
    }
  };

  return (
    <div className="App">
      <div className="leftSide">
        <div className="backgroud-image">
          <img className="image-bg" src={backGround} alt="backgroung" />
          {/* <img className="image-bg2" src={backGround} alt="backgroung" /> */}
          <div className="front-card-wrapper">
            <img className="card-logo" src={logoCard} alt="card logo" />
            <div className="front-text-content">
              <img className="card-logo1" src={frontlogo} alt="logo card" />
              <h1>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</h1>
              <p>
                {cardName ? cardName : "Isatou Jallow"}
                <span>
                  {month ? month : "00"}/{Year ? Year : "00"}
                </span>
              </p>
            </div>
          </div>
          <div className="back-card-wrapper">
            <img className="card-back" src={backCard} alt="card logo" />
            <h1 className="back-content">{cvc ? cvc : "000"}</h1>
          </div>
        </div>
      </div>

      {/* form component */}
      {submit ? (
        <Feedback submit={setsubmit} />
      ) : (
        <Form
          cardName={cardName}
          setCardName={setCardName}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          month={month}
          setMonth={setMonth}
          cvc={cvc}
          setCvc={setCvc}
          Year={Year}
          setYear={setYear}
          error={error}
          setError={setError}
          handleSumbit={handleSumbit}
          erroMessage={erroMessage}
          seterroMessage={seterroMessage}
        />
      )}
    </div>
  );
}

export default App;
