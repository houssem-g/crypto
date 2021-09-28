// https://codingthesmartway.com/modern-react-from-the-beginning-ep2-starting-with-react-components-jsx/
import React from 'react';
import Navbar from './components/navbar';
import EnhancedTable from './components/table'


const App = () => {
  const listCrypto = [
    {
      id: 1,
      name: "Bitcoin BTC",
      price: "45 322.20",
      change_day: "1.93%",
      volume_day: "29.3 Md USD",
      market: "918 465 817 544"
    },
    {
      id: 2,
      name: "Ethereum ETH",
      price: "3307.50",
      change_day: "5.2%",
      volume_day: "18.3 Md USD",
      market: "18 465 817 544"
    },
    {
      id: 3,
      name: "Cardano ADA",
      price: "2.20",
      change_day: "3.45%",
      volume_day: "9.4 Md USD",
      market: "8 465 817 544"
    },
    {
      id: 4,
      name: "XRP XRP",
      price: "1.20",
      change_day: "0.93%",
      volume_day: "2.93 Md USD",
      market: "465 817 544"
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

