
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addUser} from './actions/userActions'
class AddUsers extends Component {
    constructor(props){
        super(props)
        this.state={
           
            name:"",
            phone:"",
            email:"",
            password:""
        }
    }
    managechange=(e)=>{
        e.preventDefault()
        this.setState({[e.target.id] : e.target.value});
        
    }
    managesubmit=(e)=>{
        e.preventDefault()
       this.props.newUser(this.state)
       this.setState({
        name:"",
        phone:"",
        email:"",
        password:"" 
       })
    }

    render() {
        return (
            <div>
               
                <form style={{marginTop:"2rem",marginLeft:"10rem"}} onSubmit={this.managesubmit} >
                    <h1>Add Users</h1>
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
const mapDispatchToProps={
    newUser: addUser
}

export default connect(null,mapDispatchToProps)(AddUsers);



