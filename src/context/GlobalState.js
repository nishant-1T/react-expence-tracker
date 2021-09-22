import React, { createContext, useReducer } from "react";
import AppReduser from "./AppReduser";

export const initialState = {
  transactions: [],
};

//create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReduser, initialState);

  //Action remove
  function deleteTranscation(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    });
  }

  //Add transaction
  function addTranscation(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload: transaction
    });
  }



  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTranscation,
        addTranscation
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
