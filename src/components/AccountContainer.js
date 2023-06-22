import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])
  const [filter, setFilter] = useState("");
  const bankAPI = "http://localhost:8001/transactions"

  useEffect(() => {
    fetch(bankAPI)
    .then(resp => resp.json())
    .then(newTransactions => {
      setTransactions(() => newTransactions)
    })
  }, [])

  function addNewTransaction(newTransaction){
    setTransactions(() => [...transactions, newTransaction])
  }

  function handleSearchChange(search){
    setFilter(() => search)
  }

  const transactionsToDisplay = transactions.filter((transaction) => {
    if(filter === ""){
      return true;
    } else {
      return (transaction.description.includes(filter))
    }
  })

  return (
    <div>
      <Search handleSearchChange={handleSearchChange}/>
      <AddTransactionForm bankAPI={bankAPI} addNewTransaction={addNewTransaction}/>
      <TransactionsList transactions={transactionsToDisplay} />
    </div>
  );
}

export default AccountContainer;
