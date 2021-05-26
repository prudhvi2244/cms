import React, { Component } from 'react'
import axios from 'axios'
export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname:'',
             lname:'',
             city:'',
             msg:''
        }
    }

    handleChange=event=>
    {
       this.setState({
           [event.target.name]:event.target.value
       })
    }

    handleSubmit=event=>
    {
        event.preventDefault()
        axios.post('http://localhost:8080/customer/saveCustomer',this.state)
             .then(response=>
                {
                    console.log(response.data)
                    this.setState({msg:response.data})
                    
                })
             .catch(error=>console.log(error))

             this.setState(
                {
                    fname:'',
                    lname:'',
                    city:''
                })
    }
    
    render() {
        return (
            <div>
                <h3 className="text-danger">Registration Page</h3>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input onChange={this.handleChange} value={this.state.fname} name="fname" className='form-control' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label>
                        <input onChange={this.handleChange} value={this.state.lname} name="lname" className='form-control' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label>City</label>
                        <select onChange={this.handleChange} value={this.state.city} name="city" className='form-control' className='form-control'>
                            <option value="">--Select Your City--</option>
                            <option value="Vijayawada">Vijayawada</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>
                    </div>
                    <br/>
                    <button className="btn btn-success">Register</button>
                </form>
                <hr/>
                <h4>{this.state.msg}</h4>
            </div>
        )
    }
}

export default Register
