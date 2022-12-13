import React, {useContext} from "react";
import { GlobalContext } from "./context/Globalstate";

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
        amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    return (
        <div className="items">
            <div  className="money-plus">
                <h4> INCOME</h4>
                <p> {income}</p>
            </div>
            <div className="money-minus">
                <h4 > EXPENSES</h4>
                <p> {expense}</p>
            </div>
        </div>

    );
}
export default IncomeExpenses;