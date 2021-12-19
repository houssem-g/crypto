import React from "react";
import Navbar from '../../components/navbar';
// import InputSearch from '../../components/inputSearch'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import useAxios from '../../api/axiosCRUD';
import Box from '@mui/material/Box';
import { useParams, useLocation } from 'react-router-dom';


export const AnalysisView = () => {
  
  
  let loc = useLocation()
  
  // console.log("loc : ", loc)

  const styles= {
    containersFlex: {
      display: "flex",
      boxShadow: "none",
      marginLeft: "2vh",
      marginTop: "2vh",
    },
    containerGeneral: {
      width: "50vh",
      height: "50vh",
      backgroundColor: "#dcdcdc	",
      border: "2px solid",
    },
    containerChart: {
      width: "150vh",
      height: "50vh",
      backgroundColor: "#dcdcdc",
      border: "2px solid",
      marginLeft: "2px",
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
  };
  let parameters = useParams()
  parameters = parameters.currency ? parameters.currency.split("=").pop() +"USD" : "ETHUSD"
  const [state, setState] = React.useState({
    value: parameters || 'ETHUSD',
    show:'ETHUSD'
  });

  const { listCoins} = useAxios({
    method: 'get',
    url: '/'
  });

  const [allCoins, setAllCoins] = useState([]);
  useEffect(() => {
    if (listCoins !== null) {
      setAllCoins(listCoins);
    }
  }, [listCoins]);



  return (
    <div>
      <Navbar titles = {["Cryptomonnaies", "Analysis", "Scoring"]}/>
      <div style={styles.containersFlex}>
        <div style={styles.containerSearchText}>Search</div>
        {/* <InputSearch data = {listCoins} tradingViewSearch = {state.value}/> */}
        <Autocomplete
          
          onChange={
          (event, newValue) => {
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
        <div style={styles.containerGeneral}></div>
        <div style={styles.containerChart}>
        <TradingViewWidget symbol={state.value} theme={Themes.DARK} locale="fr" autosize/>
        </div>
      </div>
    </div>
  );
};
