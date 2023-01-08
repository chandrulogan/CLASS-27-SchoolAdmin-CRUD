import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, FormGroup, Input, Label } from 'reactstrap'

export default function Action() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Name: '',
        ParentName: '',
        ParentNumber: '',
    });
    const handleSubmit = () => {
        if(id){
            fetch('https://62aab196371180affbd94005.mockapi.io/ST_AD/' + id,
            {
                method: "PUT",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
            .then(response => navigate('/Profile'))
        } else{
            fetch('https://62aab196371180affbd94005.mockapi.io/ST_AD',
            {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
            .then(response => navigate('/Profile'))
        }
        console.log(formData);
    }
    const handleChange = (e) => {
        console.log(formData);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (id) {
            fetch('https://62aab196371180affbd94005.mockapi.io/ST_AD/' + id)
                .then(data => data.json())
                .then((response) => setFormData(response))
        }
    },[id])
    return (
        <div>
        <Button 
        size='sm'
        onClick={()=>navigate('/')}
        >Home</Button>
        <hr></hr>
            <Container>
                <h1>{id ? 'Update' : 'Create'} Profile</h1>
                <Form>
                    <FormGroup>
                        <Label for="Name">
                            Name
                        </Label>
                        <Input
                            onChange={handleChange}
                            value={formData.Name}
                            id="Name"
                            name="Name"
                            placeholder="Enter Name"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ParentName">
                            Parent Name
                        </Label>
                        <Input
                            onChange={handleChange}
                            value={formData.ParentName}
                            id="ParentName"
                            name="ParentName"
                            placeholder="Parent Name"
                            type="text"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="ParentNumber">
                            Parent Number
                        </Label>
                        <Input
                            value={formData.ParentNumber}
                            onChange={handleChange}
                            id="ParentNumber"
                            name="ParentNumber"
                            placeholder="Enter Parent Number"
                            type="number"
                        />
                    </FormGroup>
                    <Button color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
