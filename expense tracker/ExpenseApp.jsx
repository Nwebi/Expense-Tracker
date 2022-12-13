import React from "react";
import Header from "./Header";
import Balance from './Balance';
import './App.css';
import IncomeExpenses from "./Incomeexpenses";
import Transactions from "./Transactions";
import AddTransaction from "./Addtransactions";
import { GlobalProvider } from "./context/Globalstate";


const ExpenseApp = () => {
    return(
        <GlobalProvider>
            <div className="container">
            <Header />
            <div className="transactions">
                <Balance />
                <IncomeExpenses />
                <Transactions />
                <AddTransaction />
            </div>
            </div>
            </GlobalProvider>

    );
}
export default ExpenseApp;