import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'reactstrap'
import { FaTrashAlt, FaPen, } from "react-icons/fa";

const Profile = () => {
    const navigate = useNavigate();
    const [data, setData] = useState();

    const getData = ()=>{
        fetch('https://62aab196371180affbd94005.mockapi.io/Teacher')
        .then(data => data.json())
        .then((response) => setData(response))
    }
    useEffect(() => {
       getData()
    }, []);

    const handleDelete = (id) => {
        fetch('https://62aab196371180affbd94005.mockapi.io/Teacher/' + id,
            { method: "DELETE" })
            .then(data => data.json())
            .then((response) => getData())
    }
    return (<div>
        <Button 
        size='sm'
        onClick={()=>navigate('/')}
        >Home</Button>
        <hr></hr>
        <Button color="primary" size="sm" onClick={() => navigate('/AddTeacher')}>
        Add new staff
        </Button>
        <Table
            hover
            responsive
            size="sm"
        >
            <thead>
                <tr>
                    <th>S NO</th>
                    <th>id</th>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Mobilenumber</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((value, index) => {
                    return (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.mail}</td>
                        <td>{value.mobilenumber}</td>
                        <td>{value.salary}</td>
                        <td>
                            <Button color="danger" size="sm" onClick={() => { handleDelete(value.id) }}>
                                <FaTrashAlt />
                            </Button>
                            <span> </span>
                            <Button 
                            color="warning" 
                            size="sm"
                            onClick={()=>navigate('/AddTeacher/' + value.id)}
                            >
                                <FaPen />
                            </Button>
                            <span> </span>
                        </td>
                    </tr>)
                })}
            </tbody>
        </Table>
    </div>)
};


export default Profile;
