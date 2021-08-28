import React, { useState } from 'react';
import { Table, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer, FaRegEdit } from 'react-icons/fa';
import EditUser from './EditUser';
import {delletUser} from './actions/userActions'
import {connect} from 'react-redux'
const Users = ({userdata, userdelet, update }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    {
                     userdata.map((user) => {

                        return (
                            <tr key={user.id}>
                                <Modal show={show} onHide={handleClose} animation={false}>
                                    
                                    <Modal.Body>
                                        <EditUser userdata={user} updateuse={update} closemodal={handleClose} />
                                    </Modal.Body>

                                </Modal>

                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>  <FaRegEdit style={{cursor: 'pointer'}} onClick={handleShow} />  <FaBeer style={{ color: 'red', cursor: 'pointer' }} onClick={() => userdelet(user.id)} /></td>
                            </tr>
                        )
                     })
                    }

                </tbody>
            </Table>
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        userdata: state.users
        
       
         }
    
}
const mapDispatchToProps={
    
       userdelet:delletUser 
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);
