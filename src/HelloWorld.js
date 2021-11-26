import React, {useEffect, useState} from "react";

function HelloWorld() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(process.env.REACT_APP_HELLO_API_ENDPOINT)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    // console.log(result);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <pre>{data.hello}</pre>
            </div>
        );
    }
}

export default HelloWorld