import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        // The API URL has been updated. This is the new, correct URL.
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((error) => {
            // It's good practice to catch potential errors.
            console.error("Failed to fetch currency data:", error);
        });
    }, [currency])
    
    // The hook returns the fetched data object.
    return data
}

export default useCurrencyInfo;
