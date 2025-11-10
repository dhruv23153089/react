import {  useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const[data, setData] = useState({});
    useEffect(() => {
         fetch(`https://v6.exchangerate-api.com/v6/14ab983330b02a9d8477f391/latest/${currency}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch currency data');
                }
                return res.json();
            })
            .then((res) => {
                // The API returns conversion_rates object containing all rates
                setData(res.conversion_rates || {});
            })
            .catch((error) => {
                console.error('Error fetching currency data:', error);
                setData({});
            });
    }, [currency]);
    return data;
}    

export default useCurrencyInfo;