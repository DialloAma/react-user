import React from 'react';
import { Table, button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer,FaRegEdit } from 'react-icons/fa';
const Users = ({ userdata }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Password</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {userdata.map((use, idex) => {
                        return (
                            <tr>

                                <td>{use.name}</td>
                                <td>{use.phone}</td>
                                <td>{use.email}</td>
                                <td>{use.password}</td>
                                <td>  <FaRegEdit/>  <FaBeer style={{color:'red'}} /></td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    );
}

export default Users;
