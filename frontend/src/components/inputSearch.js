import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';


export default function Filter({data, tradingViewSearch}) {

const [state, setState] = React.useState({
    value:'ETH',
    show:'ETH'
  });

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    
 
  });

  const listCoins = data
  const [allCoins, setAllCoins] = useState([]);
  useEffect(() => {
    if (listCoins !== null) {
      setAllCoins(listCoins);
    }
  }, [listCoins]);
//  <div><TextField id="search_field" label="Crypto"/></div>

  return (
    <Autocomplete
        value = ""
        onChange={
        (event, newValue) => {
            if (newValue !== null && newValue !== ""){
                let arrValue = newValue.split(" ")
                newValue = arrValue[arrValue.length - 1]
            setState({value: newValue.toUpperCase()});
            }  
        
        }}
        onKeyDown={(e, x) => {
        if (e.key === 'Enter') {
            if (e.target.value !== null || e.target.value !== ""){
                let arrValue = e.target.value.split(" ")
                let newEnteredValue = arrValue[arrValue.length - 1]
            setState({value: newEnteredValue.toUpperCase()});
            }  
            e.defaultMuiPrevented = true;
            // your handler code
        }
        }}
        id="search_field"
        options={allCoins}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField type="text" {...params} label="Crypto" />}
    />

  );
};
