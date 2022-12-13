import React, {useContext} from "react";
import { GlobalContext } from "./context/Globalstate";

const Payments = ({transaction}) => {
    const {DelTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return( 
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}> {transaction.text}
    <span className="spa">{sign}${Math.abs(transaction.amount)}</span>
    <button onClick={() => DelTransaction(transaction.id)} className="delete-btn"> X </button>
    </li>
    );
    }
export default Payments;