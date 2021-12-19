import { useState, useEffect } from 'react';
import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:8000/allCrypto';

const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [listCoins, setListCoins] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                setResponse(res.data.data);
                setListCoins(res.data.allCoins);
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
    }, [method, url, body, headers]);
    return { response, listCoins, error, loading };
};

export default useAxios;