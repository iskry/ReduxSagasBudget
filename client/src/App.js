import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useSelector, useDispatch } from "react-redux";
import { addEntryRedux, removeEntryRedux } from "./actions/entries.actions";

function App() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries);

  const addEntry = async () => {
    try {
      const res = await axios.post("http://localhost:3001/entries", {
        description,
        value,
        isExpense,
      });
      dispatch(addEntryRedux(res.data));
      resetEntry();
    } catch (err) {
      console.error("Error adding entry", err);
    }
  };

  const editEntry = async (id) => {
    if (id) {
      const entry = entries.find((entry) => entry.id === id);
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  const updateEntry = async () => {
    try {
      const res = await axios.put(`http://localhost:3001/entries/${entryId}`, {
        description,
        value,
        isExpense,
      });
      const updatedEntries = entries.map((entry) =>
        entry.id === entryId ? res.data : entry
      );
      dispatch({ type: "UPDATE_ENTRIES", payload: updatedEntries });
      resetEntry();
      setIsOpen(false);
    } catch (err) {
      console.error("Error updating entry", err);
    }
  };

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await axios.get("http://localhost:3001/entries");
        dispatch({ type: "SET_ENTRIES", payload: res.data });
      } catch (err) {
        console.error("Error fetching entries", err);
      }
    };
    fetchEntries();
  }, [dispatch]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.forEach((entry) => {
      if (entry.isExpense) {
        totalExpenses += Number(entry.value);
      } else {
        totalIncomes += Number(entry.value);
      }
    });
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
  }, [entries]);

  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
    setIsOpen(false);
  };

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} size="small" />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      <MainHeader title="History" type="h3" />
      <EntryLines
        entries={entries}
        editEntry={editEntry}
        setIsOpen={setIsOpen}
      />
      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        updateEntry={updateEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;
