// https://gitlab.com/saurabhshah231/reactjs-myapp/-/blob/master/src/App.js

import React from 'react'
import PropTypes from 'prop-types'
import useAxios from '../../api/axiosCRUD';
import Navbar from '../../components/navbar';
import EnhancedTable from '../../components/table'
import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Footer from "../../components/footer";

const HomeView = props => {
    const styles= {
        containerSearchField: {
          marginLeft: "157vh",
          display: "flex",
        },
        textSearch: {
            
            marginTop: "2.4vh"
        },
        searchField: {
            marginLeft: "5vh",
            marginBottom: "1vh"
        },
        containerPage: {
            minHeight: "65vh"
        }
      };
    const { listCoins, response, loading, error } = useAxios({
        method: 'get',
        url: '/allCrypto/'
    });
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    // const [selectedValue, setSelectedValue] = useState('');
    useEffect(() => {
    if (response !== null) {
        setFilteredData(response);
        setData(response)
    }
    }, [response]);


    return (
        <div>
                        
            {/* <Button variant="contained" color="primary" onClick={()=>goTo(HOME)}>Home</Button> */}
            
            <Navbar titles = {["Cryptomonnaies", "Analysis", "Scoring"]}/>
            {loading ? (<p>loading...</p>) : (
                    <div>
                        {error && (
                            <div>
                                <p>{error.message}</p>
                            </div>
                        )}
                        <div>{data && <p>{data.id}</p>}</div>
                    </div>
                    )}
            <div style = {styles.containerSearchField}>
                 <div style = {styles.textSearch} >Search</div>
                 <div style = {styles.searchField}>
                    <Autocomplete
                        
                        onChange={
                        (event, newValue) => {
                            if (newValue && newValue.name !== null && newValue.name !== ""){
                                let symbolAndName = newValue.name.split(" ")
                                let symbol = symbolAndName.pop().toUpperCase()
                                let cryptoName = symbolAndName.join(" ")
                                let oneCrypto = data.filter((el)=> el["symbol"] === symbol && el["name"] === cryptoName)
                                setFilteredData(oneCrypto);
                            }
                            else {
                                setFilteredData(data);
                            }
                        
                        }}
                        // onKeyDown={(e, x) => {
                        // if (e.key === 'Enter') {
                        //     if (e.target.value !== null || e.target.value !== ""){
                        //         let newEnteredValue = e.target.value.split(" ")
                        //         newEnteredValue = newEnteredValue.pop().toUpperCase()
                        //         let oneCrypto = data.filter((el)=> el["symbol"] === newEnteredValue)
                                
                        //         // setSelectedValue(oneCrypto[0]["name"] + " " + oneCrypto[0]["symbol"]);
                        //         // console.log("selectedValue : ", {selectedValue})
                        //         setFilteredData(oneCrypto);
                        //     }  
                        //     e.defaultMuiPrevented = true;
                        //     // your handler code
                        // }
                        // }}
                        // value = {selectedValue}
                        options={listCoins}
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
            </div>
            <div style = {styles.containerPage}>
                <EnhancedTable data = {filteredData}/>
            </div>
            <Footer/>
        </div>
    )
}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView
