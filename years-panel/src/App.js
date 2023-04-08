import logo from "./logo.svg";
import "./App.css";
import Expense from "./components/Expense";

import ExpenselItem from "./components/ExpenselItem";
import NewExpense from "./components/NewExpense";
import { useState } from "react";
function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2019, 7, 14),
    },
    {
      id: "e2",
      title: "New TVsd",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const getDataHandler = (data) => {
    console.log(data);
    setExpenses((expenses) => [...expenses, data]);
  };
  return (
    <div>
      <NewExpense getData={getDataHandler} />
      <Expense item={expenses} />
    </div>
  );
}

export default App;
