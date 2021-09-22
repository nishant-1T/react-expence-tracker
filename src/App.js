import React,{useContext} from "react";
import "./App.css";
import { Header } from "./components/Header";
import { IncomeExpence } from "./components/IncomeExpence";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { TransactionList } from "./components/TransactionList";
import { GlobalContext } from "./context/GlobalState";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  const {transactions} = useContext(GlobalContext);
 


  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpence />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};
export default App;
