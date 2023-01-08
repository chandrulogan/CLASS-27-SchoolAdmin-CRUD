import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, FormGroup, Input, Label } from 'reactstrap'

export default function AddTeacher() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        mobilenumber: '',
        salary:''
    });
    const handleSubmit = () => {
        if(id){
            fetch('https://62aab196371180affbd94005.mockapi.io/Teacher/' + id,
            {
                method: "PUT",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
            .then(response => navigate('/'))
        } else{
            fetch('https://62aab196371180affbd94005.mockapi.io/Teacher',
            {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
            .then(response => navigate('/Teacher'))
        }
        console.log(formData);
    }
    const handleChange = (e) => {
        console.log(formData);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (id) {
            fetch('https://62aab196371180affbd94005.mockapi.io/Teacher/' + id)
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
                        <Label for="name">
                            Name
                        </Label>
                        <Input
                            onChange={handleChange}
                            value={formData.name}
                            id="name"
                            name="name"
                            placeholder="Enter Name"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="mail">
                        Mail
                        </Label>
                        <Input
                            onChange={handleChange}
                            value={formData.mail}
                            id="mail"
                            name="mail"
                            placeholder="Enter Mail"
                            type="mail"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="mobilenumber">
                        Mobile Number
                        </Label>
                        <Input
                            value={formData.mobilenumber}
                            onChange={handleChange}
                            id="mobilenumber"
                            name="mobilenumber"
                            placeholder="Enter Mobile Number"
                            type="number"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="salary">
                        Salary
                        </Label>
                        <Input
                            value={formData.salary}
                            onChange={handleChange}
                            id="salary"
                            name="salary"
                            placeholder="Enter Salary"
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
