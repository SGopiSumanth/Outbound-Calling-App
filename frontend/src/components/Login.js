import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            phoneNumber: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handlePhoneNumberChange = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const loginData = {
            name: this.state.name,
            phoneNumber: this.state.phoneNumber
        }
        console.log(loginData);
        axios.post('http://localhost:4000/api/v1/users/', loginData)
            .then(() => {
                this.props.history.push('/make-call', { fromPhoneNumber: this.state.phoneNumber });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label> Name</label>
                    <input type='text' value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div>
                    <label> Phone Number</label>
                    <input type='text' value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login;