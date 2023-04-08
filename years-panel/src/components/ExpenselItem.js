import React from "react";
import "../style/ExpenselItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenselItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.Title}</h2>
        <div className="expense-item__price">${props.Amount}</div>
      </div>
    </Card>
  );
}

export default ExpenselItem;
