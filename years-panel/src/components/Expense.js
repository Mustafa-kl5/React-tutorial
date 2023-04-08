import React, { useState } from "react";
import ExpenselItem from "./ExpenselItem";
import "../style/Expense.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
export default function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpense = props.item.filter((filterItem) => {
    return filterItem.date.getFullYear().toString() === filteredYear;
  });
  let expensesContent = <p>no item</p>;
  if (filterExpense.length > 0) {
    expensesContent = filterExpense.map((item) => {
      return (
        <ExpenselItem
          Title={item.title}
          Amount={item.amount}
          key={item.id}
          date={item.date}
        />
      );
    });
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterExpense} />
      {expensesContent}
    </Card>
  );
}
