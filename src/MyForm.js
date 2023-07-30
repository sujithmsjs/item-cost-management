import React, { useRef } from "react";

const MyForm = ({ onAction, errorMessage }) => {
  const formRef = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    const buttonValue = event.target.value;

    const form = new FormData(formRef.current);
    const newForm = {
      item: form.get("item"),
      cost: form.get("cost"),
      action: buttonValue
    };

    switch (buttonValue) {
      case "Push":
        // Handle Push button click
        break;
      case "Shift":
        // Handle Shift button click
        break;
      case "Add At":
        newForm.index = form.get("index");
        // Handle Add At button click

        break;
      default:
        // Handle other button clicks if needed
        break;
    }
    
    onAction(newForm);
  };

  return (
    <div>
       <h1>My Form1</h1>
      <form ref={formRef}>
        <div className="form-group">
          Item <input minLength={4} type="text" name="item" />
        </div>
        <div className="form-group">
          Cost <input type="number" minLength={4} name="cost" />
        </div>
        <div className="form-group">
          <button type="button" value="Push" onClick={handleClick}>
            Push
          </button>
          <button type="button" value="Shift" onClick={handleClick}>
            Shift
          </button>
          <button type="button" value="Add At" onClick={handleClick}>
            Add At
          </button>
          <input type="number" name="index" max="4" min="1" step="1" />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default MyForm;
