import { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//initial state
const InitialState = {
    transactions:[]
};
// create context
export const GlobalContext = createContext(InitialState);

// Provider component for state management
export const GlobalProvider = ({ children}) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);
//Action
const DelTransaction = (id) => {
    dispatch({
        type: 'Delete_transaction',
        payload: id
    });
}
const AddTransaction = (transaction) => {
    dispatch({
        type: 'ADD_transaction',
        payload: transaction 
    });
}
return (
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        DelTransaction,
        AddTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}