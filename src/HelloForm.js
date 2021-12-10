import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function HelloForm() {
    const [username, setUsername] = useState("");
    const [data, setData] = useState({});

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
                    setData(result);
                },
                (error) => {
                    console.log(error)
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
                <pre>{data.hello}</pre>
            </div>
        </div>
    );
}

export default HelloForm