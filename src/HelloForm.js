import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function HelloForm() {
    const [username, setUsername] = useState("");
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // https://stackoverflow.com/questions/63906002/update-a-state-variable-only-on-loading-the-page-for-the-first-time-in-react-js
    useEffect(() => {
        setIsLoaded(true);
    }, [])

    const handleChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let api_call = process.env.REACT_APP_HELLO_API_ENDPOINT + "?username=" + username;
        fetch(api_call)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    console.log(error);
                    setError(error);
                }
            )
    }

    return (
        <div>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Control type="text" placeholder="Enter your name" value={username} onChange={(e) => handleChange(e)}/>
                &nbsp;
                <Button variant="primary" type="submit">submit</Button>
            </Form>
            <div>
                {/* https://reactjs.org/docs/conditional-rendering.html */}

                {!isLoaded
                    ? <pre>Loading...</pre>
                    : <pre>{data.hello}</pre>
                }
            </div>
        </div>
    );
}

export default HelloForm