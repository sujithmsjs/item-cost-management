import React, { useRef, useState } from "react";

const EditForm = ({ onSave, data, index }) => {
  console.info("EditForm : ", JSON.stringify(data, null, 5));
  console.info("EditForm index : ", index);

  // Hooks
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

    onSave(newForm);
  };

  return (
    <div>
      <h1>Edit</h1>
      <form ref={formRef}>
        <div className="form-group">
          index <input type="text" value={index} name="index" readOnly />
        </div>
        <div className="form-group">
          Item <input type="text"  minLength={4} defaultValue={data?.item} name="item" />
        </div>
        <div className="form-group">
          Cost <input type="number"  minLength={4} defaultValue={data?.cost} name="cost" />
        </div>
        <div className="form-group">
          <button type="button" value="Edit" onClick={handleClick}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
