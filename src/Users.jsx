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
    render() {
        return (
            <div>
                <form style={{marginTop:"2rem"}}>
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
                    <div>
                        <h2>Name:{item.name}</h2>
                        <h2>Name:{item.email}</h2>
                        <h2>Name:{item.phone}</h2>
                        <h2>Name:{item.password}</h2>
                    </div>
                )
                
            })}
            </div>
            
        );
    }
}

export default Users;
