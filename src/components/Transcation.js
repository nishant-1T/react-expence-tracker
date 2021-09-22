import React,{useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";

export const Transcation = ({transaction}) => {

  const {deleteTranscation} = useContext(GlobalContext)

  
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className="minus">
        {transaction.text} <span>{sign}Rs{Math.abs(transaction.amount)}</span>
        <button onClick={()=> deleteTranscation(transaction.id)} className="delete-btn">x</button>
      </li>
    )
}
