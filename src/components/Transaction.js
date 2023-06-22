import React from "react";

function Transaction({details}) {
  return (
    <tr>
      <td>{details.date}</td>
      <td>{details.description}</td>
      <td>{details.category}</td>
      <td>{details.amount}</td>
    </tr>
  );
}

export default Transaction;
