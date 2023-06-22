import React, {useState} from "react";

function AddTransactionForm({bankAPI, addNewTransaction}) {
  const [formData, setFormData] = useState({date: "", description: "", category: "", amount: "0"})

  function handleSubmit(event){
    event.preventDefault();

    fetch(bankAPI, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        date: formData.date,
        description: formData.description,
        category: formData.category,
        amount: parseFloat(formData.amount)
      })
    })
      .then(resp => resp.json())
      .then(newTransaction => {
        setFormData({date: "", description: "", category: "", amount: "0"});
        addNewTransaction(newTransaction)
      })
  }

  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange}/>
          <input type="text" name="description" placeholder="Description" onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category" onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
