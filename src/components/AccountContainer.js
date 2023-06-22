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

  function onRemoveTransaction(deletedTransaction){
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== deletedTransaction.id);
    setTransactions(updatedTransactions);
  }

  const transactionsToDisplay = transactions.filter((transaction) => {
    if(filter === ""){
      return true;
    } else {
      const searchCheck = transaction.description.toUpperCase();
      return (searchCheck.includes(filter.toUpperCase()))
    }
  })

  return (
    <div>
      <Search handleSearchChange={handleSearchChange}/>
      <AddTransactionForm bankAPI={bankAPI} addNewTransaction={addNewTransaction}/>
      <TransactionsList bankAPI={bankAPI} transactions={transactionsToDisplay} onRemoveTransaction={onRemoveTransaction}/>
    </div>
  );
}

export default AccountContainer;
