import {useEffect, useState} from "react";

export const useApi = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState()

    useEffect(() => {
        if (!url) console.error('url is missing');
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setLoading(false)
                    console.log(result)
                    setData(result)
                },
                // Nota: è importante gestire gli errori qui
                // invece di un blocco catch() in modo da non fare passare
                // eccezioni da bug reali nei componenti.
                (error) => {
                    console.log(error)
                    setLoading(false)
                    setError(error)

                }
            )
    }, [])

    return {
        data, error, loading
    }
}

