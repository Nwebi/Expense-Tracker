import React, { useContext } from "react";
import { GlobalContext } from "./context/Globalstate";
import Payments from "./Payments";

const Transactions= () => {
    const {transactions} = useContext(GlobalContext);
   
    return (
        <div className="lists">
            <h3>HISTORY</h3>
            <ul className="list">
                {transactions.map(transaction => (
                <Payments key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    );
}
export default Transactions;