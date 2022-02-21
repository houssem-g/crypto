import { useState, useEffect } from 'react';
import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:8000/';

const GetData = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [listCoins, setListCoins] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    console.log("urlll : ", url)
    const fetchData = async () => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                // console.log("res : ", res)
                setResponse(res.data.data);
                setListCoins(res.data.allCoins);
                setloading(false);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };
    useEffect(() => {
        
        fetchData();
        setloading(false);
    }, []);

    return { response, listCoins, error, loading };

    // useEffect(() => {
        
    //     console.log("url : ", url)
    //     axios[method](url, JSON.parse(headers), JSON.parse(body))
    //         .then((res) => {
    //             setResponse(res.data.data);
    //             setListCoins(res.data.allCoins);
    //         })
    //         .catch((err) => {
    //             setError(err);
    //         })
    //         .finally(() => {
    //             setloading(false);
    //         });
        
    // }, [method, url, body, headers]);
    // return { response, listCoins, error, loading };
};


export default GetData;