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
                <form style={{marginTop:"2rem"}} onSubmit={this.manageSubmit}>
                    <div>
                        <label>Name : </label>
                        <input type="text" id="name" value={this.state.name} onChange={this.managechange} placeholder="your name please" required/>
                    </div>
                    <div>
                        <label>Email : </label>
                        <input type="Email" id="email" value={this.state.email} onChange={this.managechange} placeholder="your name please" required/>
                    </div>
                    <div>
                        <label>phone : </label>
                        <input type="number" id="phone" value={this.state.phone} onChange={this.managechange}  placeholder="your name please" required/>
                    </div>
                    <div>
                        <label>password : </label>
                        <input type="password" id="password" value={this.state.password} onChange={this.managechange} placeholder="your name please" required/>
                    </div>
                    <button>Submit</button>
                </form>
                { this.state.user.map((item,index)=>{
                return(
                    <div key={index}>
                        <h2>Name:{item.name}</h2>
                        <h2>E-mail:{item.email}</h2>
                        <h2>Phone:{item.phone}</h2>
                        <h2>Password:{item.password}</h2>
                    </div>
                )
                
            })}
            </div>
            
        );
    }
}

export default Users;
