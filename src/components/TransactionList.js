import React, { useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transcation } from "./Transcation";

export const TransactionList = () => {

     const {transactions} = useContext(GlobalContext);
     console.log(transactions)

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
      {transactions.map(transaction => (<Transcation key={transaction.id} transaction={transaction}/>))}
        
      </ul>
    </div>
  );
};
