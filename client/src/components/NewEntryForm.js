import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../actions/entries.actions";

function NewEntryForm() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch();

  function addEntry() {
    console.log("addEntry");
    dispatch(
      addEntryRedux({
        id: Math.random(),
        description,
        value,
        isExpense,
      })
    );
    setDescription("");
    setValue("");
    setIsExpense(true);
  }
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  );
}

export default NewEntryForm;
