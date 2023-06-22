import React from "react";

function AddTransactionForm({bankAPI, addNewTransaction}) {
  function handleSubmit(event){
    event.preventDefault();

    fetch(bankAPI, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        date: event.target.date.value,
        description: event.target.description.value,
        category: event.target.category.value,
        amount: event.target.amount.value
      })
    })
      .then(resp => resp.json())
      .then(newTransaction => {
        event.target.description.value = '';
        event.target.category.value = ''
        event.target.amount.value = ''
        addNewTransaction(newTransaction)
      })
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
