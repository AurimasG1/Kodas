import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Router } from '../Contexts/Router';

export default function useGet(startUrl) {

    const SERVER_URL = 'http://library.org';
    const [url, setUrl] = useState(startUrl);
    const { setErrorPageType } = useContext(Router);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(_ => {
        axios.get(SERVER_URL + url)
            .then(response => {
                setData(response.data);
            })
            .catch(_ => {
                setErrorPageType('ups');
            })
            .finally(_ => {
                setLoading(false);
            });
    }, [url, setData, setErrorPageType]);
    return { data, loading, setUrl };
}