import React, { useState } from "react";
import ArrowUpwardTwoTone from "@material-ui/icons/ArrowUpwardTwoTone";
import Styled from "../styles/styles";
import { titles } from "../nav";

function DecimalMode() {
  let classes = Styled();
  const [binaryText, setBinaryText] = useState("");
  const [decimalText, setDecimalText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (binaryText.match(/^0-99999999999999999]+$/g) === null) {
      setErrorMessage("Enter an decimal");
      return;
    }

    setErrorMessage("");

    const reversedBinaryText = binaryText.split("").map(Number).reverse();

    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    );
    setDecimalText(result);
  };

  return (
    <div className="body">
      <h1 className={classes.h1}>{titles[0]}</h1>

      <form className={classes.StyledForm} onSubmit={onFormSubmit}>
        {errorMessage && (
          <span className={classes.errorMessage}>{errorMessage}</span>
        )}
        <br />
        <div className={classes.Field}>
          <label className={classes.Label}>Decimal Input</label>
          <div>
            <input
              className={classes.BinaryTextInput}
              autoComplete="off"
              type="text"
              name="binary"
              placeholder="Enter an decimal number"
              value={binaryText}
              onChange={(e) => setBinaryText(e.target.value)}
            />
            <button className={classes.Button} type="submit">
              Convert
            </button>
          </div>
        </div>

        <ArrowUpwardTwoTone color="disabled"></ArrowUpwardTwoTone>

        <div className={classes.Field}>
          <label className={classes.Label}>Binary Output</label>
          <input
            className={classes.DecimalTextInput}
            type="text"
            name="decimal"
            value={decimalText}
            disabled
          />
        </div>
      </form>
    </div>
  );
}

export default DecimalMode;
