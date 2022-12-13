import React, { useState, useContext } from "react";
import { GlobalContext } from "./context/Globalstate";
    
const AddTransaction = ({transaction}) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    
    const {AddTransaction} = useContext(GlobalContext);
    const SubmitForm = (e) => {
        e.preventDefault ();
        setText("");
        setAmount("");
        
const newTransaction = {
    id: Math.floor(Math.random() * 100),
    text,
    amount: +amount
} 
AddTransaction(newTransaction);
    }
    return(
        <>
        <h3> Add Transactions</h3>
        <form onSubmit={SubmitForm}>
            <div className="form-control">
                <label htmlFor="text"> Text</label> <br />
                <input className="txt" type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text here..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount" > Amount <br />
                (negative - expense, positive - income) </label><br />
                <input className="amt" type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button onClick={() => AddTransaction(transaction.transaction) } className="btn">Add transaction</button>
        </form>
        </>
    );
}
export default AddTransaction;