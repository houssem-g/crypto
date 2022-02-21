import React from "react";
import Navbar from '../../components/navbar';
import InfoGeneral from '../../components/infoGeneral';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import GetData from '../../api/axiosCRUD';
import useAxiosToGetHolders from '../../api/getHolders';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import Footer from "../../components/footer";

// import InputSearch from '../../components/inputSearch'

export const AnalysisView = () => {

  const styles= {
    containersFlex: {
      display: "flex",
      boxShadow: "none",
      marginLeft: "2vh",
      marginTop: "2vh",
    },
    containerGeneral: {
      width: "17vw",
      height: "auto",
      backgroundColor: "ghostwhite",
      border: "2px solid",
      marginTop: "1vh",
      marginLeft: "4.5vh",
    },
    infoGTitle: {
      textAlign: "center",
      backgroundColor: "mediumaquamarine",
      height: "9vh",
      display: "flow-root",
      width: "22vw",
      
    },
    containerChart: {
      width: "75vw",
      height: "50vh",
      backgroundColor: "#dcdcdc",
      border: "2px solid",
      marginLeft: "1vh",
      
    },
    containerSearchText: {
      marginTop: "2vh",
      width: "12vh",
      marginLeft: "147.8vh"
    },
    containerSearchButton: {
      marginTop: "1.2vh",
      marginLeft: "1vh"
    },
    containerFooter: {
      marginTop: "30vh"
    }

  };
  let parameters = useParams()
  const {listCoins} = GetData({
    method: 'get',
    url: parameters.currency ? `analysis/?currency=${parameters.currency}` : '/analysis/'
  })
 
  
  const [allCoins, setAllCoins] = useState([]);
  
  // ici on écoute listCoins c'est pourquoi on l'ajoute entre [] à la fin du use effect
  useEffect(() => {
    if(listCoins){
      setAllCoins(listCoins)
    }
    return () => {}
  }, [listCoins]);
  
  
  let oneCrypto = undefined
  let sigle = "ETH"
  let pairMoney = ""
  if (parameters.currency) {
    sigle = parameters.currency.split("=").pop().toUpperCase()
    pairMoney = sigle +"USD"
    
  }
  const [state, setState] = useState({
    value: pairMoney || "ETHUSD",
    show:'ETHUSD'
  });
  oneCrypto =  allCoins.filter((el)=> el["symbol"] === state.value.slice(0,-3))[0]
  
  

  // const { response } = useAxiosToGetHolders({
  //   method: 'get',
  //   url: `infoTrx/?address=${oneCrypto.walletAddress }`
  // });

  return (
    <div>
      <Navbar titles = {["Cryptomonnaies", "Analysis", "Scoring"]}/>
      <div style={styles.containersFlex}>
        <div style={styles.containerSearchText}>Search</div>
        <Autocomplete
          onChange={
          (event, newValue) => {
              event.preventDefault();
              if (newValue && newValue.name !== null && newValue.name !== ""){
                  let arrValue = newValue.name.split(" ")
                  newValue = arrValue[arrValue.length - 1]
                  setState({value: newValue.toUpperCase() + "USD"});
              }
          }}
          id="search_field"
          options={allCoins}
          getOptionLabel={(option) => option.name}
          sx={{ width: 300 }}
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img
                loading="lazy"
                width="20"
                src={`${option.icon}`}
                alt=""
              />
              {option.name}
            </Box>
          )}
          renderInput={(params) => <TextField type="text" {...params} label="Crypto" />}
      />
      </div>
      <div style={styles.containersFlex}>
        <div>
          <div style= {styles.infoGTitle}>
            <h2>Token Overview</h2>
          </div>
          <div style={styles.containerGeneral}>
            <InfoGeneral {...oneCrypto}/>
          </div>
        </div>
        <div style={styles.containerChart}>
        <TradingViewWidget symbol={state.value} theme={Themes.DARK} locale="fr" autosize/>
        </div>
      </div>
      <div style={styles.containerFooter}>
        <Footer/>
      </div>
    </div>
  );
};
