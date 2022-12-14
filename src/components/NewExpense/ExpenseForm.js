import React, { useState } from "react";
import './ExpenseForm.css'


const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState('')
  const [enteredAmount, setenteredAmount] = useState('')
  const [enteredDate, setenteredDate] = useState('')
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  }
  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  }
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);
    setenteredTitle('');
    setenteredAmount('');
    setenteredDate('');
  };

  return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>제목</label>
        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>가격</label>
        <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>날짜</label>
        <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>닫기</button>
      <button type="submit">비용 추가하기</button>
    </div>
  </form>
};

export default ExpenseForm