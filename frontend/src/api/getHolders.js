// https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj

import { useState, useEffect } from 'react';
import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:8000/';

const useAxiosToGetHolders = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);

    useEffect(() => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                setResponse(res.data.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    }, [method, url, body, headers]);
    return { response, error, loading };
};
export default useAxiosToGetHolders;