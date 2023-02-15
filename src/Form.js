import React from "react";

function Form(value) {
  return (
    <div className="card-form">
      <form onSubmit={value.handleSumbit}>
        <label htmlFor="name">Cardholder Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Yusupha Darboe"
          value={value.cardName}
          onChange={(event) => value.setCardName(event.target.value)}
        />
        <h3 className="error">
          {value.error && value.cardName.length <= 0
            ? "can't be blank"
            : !isNaN(value.cardName)
            ? "wrong format only letter"
            : ""}
        </h3>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          id="cardNumber"
          value={value.cardNumber}
          placeholder=" e.g. 1234 5678 9123 0000"
          onChange={(event) => value.setCardNumber(event.target.value)}
        />
        <h3 className="error">
          {value.error && value.cardNumber.length <= 0
            ? "can't be blank"
            : isNaN(value.cardNumber)
            ? "wrong format only Number"
            : ""}
        </h3>
        <div className="form-group">
          <div>
            <label htmlFor="date">Exp.Date(MM/YY)</label>
            <input
              type="text"
              name=""
              id="date"
              placeholder="MM"
              value={value.month}
              onChange={(event) => value.setMonth(event.target.value)}
            />
            <h3 className="error">
              <div className="error-month">
                {value.error && value.month.length <= 0
                  ? "can't be blank"
                  : isNaN(value.month)
                  ? "wrong format only Number"
                  : value.month.length !== 2
                  ? "Only 2 digit"
                  : ""}
              </div>
            </h3>
          </div>
          <div>
            <input
              type="text"
              name=""
              id="YY"
              placeholder="YY"
              value={value.Year}
              onChange={(event) => value.setYear(event.target.value)}
            />
            <h3 className="error">
              {value.error && value.Year.length <= 0
                ? value.erroMessage
                : isNaN(value.Year)
                ? "wrong format only Number"
                : value.Year.length > 2 || value.Year.length < 2
                ? "Only 2 digit"
                : ""}
            </h3>
          </div>
          <div className="cvc">
            <label htmlFor="CvC">CVC</label>
            <input
              type="text"
              name="CvC"
              id="CvC"
              placeholder="e.g.123"
              value={value.cvc}
              onChange={(event) => value.setCvc(event.target.value)}
            />
            <h3 className="error">
              {value.error && value.cvc.length <= 0
                ? "can't be blank"
                : isNaN(value.cvc)
                ? "wrong format only Number"
                : value.cvc.length > 3 || value.cvc.length < 3
                ? "Only 3 digit"
                : ""}
            </h3>
          </div>
        </div>
        <div className="submit-button-wrapper"></div>
        <button onClick={value.submit}>Confirm</button>
      </form>
    </div>
  );
}

export default Form;
