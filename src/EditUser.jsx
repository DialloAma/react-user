import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props){
        super(props)
        this.state={
            id: props.userdata.id,
            name: props.userdata.name,
            phone:props.userdata.phone,
            email:props.userdata.email,
            password:props.userdata.password
        }
    }
    managechange=(e)=>{
        e.preventDefault()
        this.setState({[e.target.id] : e.target.value});
        
    }
    managesubmit=(e)=>{
        e.preventDefault()
       this.props.updateuse(this.state.id ,this.state)
       this.setState({
           
        name:"",
        phone:"",
        email:"",
        password:"" 
       })
       this.props.closemodal()
    }

    render() {
        return (
            <div>
               
                <form style={{marginTop:"2rem",marginLeft:"10rem"}} onSubmit={this.managesubmit} >
                    <h1>Edit User</h1>
                    <div>
                        <label>Name : </label>
                        <input style={{marginBottom:"5px"}} type="text" id="name" value={this.state.name} onChange={this.managechange} placeholder="your name please" required/>
                    </div>
                    <div>
                        <label>phone : </label>
                        <input style={{marginBottom:"5px"}} type="number" id="phone" value={this.state.phone} onChange={this.managechange}  placeholder="your name please" required/>
                    </div>
                    <div>
                        <label>Email : </label>
                        <input style={{marginBottom:"5px"}}type="Email" id="email" value={this.state.email} onChange={this.managechange} placeholder="your name please" required/>
                    </div>
                    
                    <div>
                        <label>password : </label>
                        <input style={{marginBottom:"5px"}} type="password" id="password" value={this.state.password} onChange={this.managechange} placeholder="your name please" required/>
                    </div>
                    <button>Submit</button>
                </form> 
            </div>
        );
    }
}

export default EditUser;