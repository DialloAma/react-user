import React, { Component } from 'react';

class Users extends Component {
    constructor(props){
        super(props)
        this.state={
            user: [] ,
                name:"",
                email:"",
                phone:"",
                password:"",
            }
        }
         managechange=(e)=>{
            e.preventDefault()
            this.setState({[e.target.id]: e.target.value})
    }
    manageSubmit=(e)=>{
        e.preventDefault()
        const newUser={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            password:this.state.password

        }
        this.setState({user:[...this.state.user,newUser],
                name:"",
                email:"",
                phone:"",
                password:"",
        })
    }
    render() {
        return (
            <div>
                <form style={{marginTop:"2rem",marginLeft:"10rem"}} onSubmit={this.manageSubmit}>
                    <h1>Add Users</h1>
                    <div>
                        <label>Name : </label>
                        <input style={{marginBottom:"5px"}} type="text" id="name" value={this.state.name} onChange={this.managechange} placeholder="your name please" required/>
                    </div>
                    <div>
                        <label>Email : </label>
                        <input style={{marginBottom:"5px"}}type="Email" id="email" value={this.state.email} onChange={this.managechange} placeholder="your name please" required/>
                    </div>
                    <div>
                        <label>phone : </label>
                        <input style={{marginBottom:"5px"}} type="number" id="phone" value={this.state.phone} onChange={this.managechange}  placeholder="your name please" required/>
                    </div>
                    <div>
                        <label>password : </label>
                        <input style={{marginBottom:"5px"}} type="password" id="password" value={this.state.password} onChange={this.managechange} placeholder="your name please" required/>
                    </div>
                    <button>Submit</button>
                </form>
                { this.state.user.map((item,index)=>{
                return(
                    <div key={index} style={{paddingLeft:"2rem"}}>
                        <h1>List Users</h1>
                        <h2>Name:{item.name}</h2>
                        <h2>E-mail:{item.email}</h2>
                        <h2>Phone:{item.phone}</h2>
                        <h2>Password:{item.password}</h2>
                        <hr/>
                    </div>
                )
                
            })}
            </div>
            
        );
    }
}

export default Users;
