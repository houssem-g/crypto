// https://codingthesmartway.com/modern-react-from-the-beginning-ep2-starting-with-react-components-jsx/
import React from 'react';
import Navbar from './components/navbar';
import EnhancedTable from './components/table'


const App = () => {
  const listCrypto = [
    {
      id: 1,
      Nom: "Bitcoin BTC",
      Prix: "45 322.20",
      Changement: "1.93%",
      Volume: "29.3 Md USD",
      Market: "918 465 817 544"
    },
    {
      id: 2,
      Nom: "Ethereum ETH",
      Prix: "3307.50",
      Changement: "5.2%",
      Volume: "18.3 Md USD",
      Market: "18 465 817 544"
    },
    {
      id: 3,
      Nom: "Cardano ADA",
      Prix: "2.20",
      Changement: "3.45%",
      Volume: "9.4 Md USD",
      Market: "8 465 817 544"
    },
    {
      id: 4,
      Nom: "XRP XRP",
      Prix: "1.20",
      Changement: "0.93%",
      Volume: "2.93 Md USD",
      Market: "465 817 544"
    }
  ]

  return (
    <div>
      <Navbar titles = {["Cryptomonnaies", "Achat / Vente", "Portefeuille"]}/>
      <EnhancedTable data = {listCrypto}/>
    </div>


  );
}





export default App;

