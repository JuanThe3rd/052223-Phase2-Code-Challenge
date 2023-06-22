import React from "react";

function Transaction({transaction, bankAPI, removeTransaction}) {
  function handleClick(){
    fetch(`${bankAPI}/${transaction.id}`, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(() => {
        removeTransaction(transaction);
      })
  }

  return (
    <tr>
      <td><button className="remove-btn" onClick={handleClick}>X</button>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
}

export default Transaction;
