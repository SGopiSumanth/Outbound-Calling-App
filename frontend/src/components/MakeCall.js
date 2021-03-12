import React, { Component } from 'react';
import axios from 'axios';

class MakeCall extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toPhoneNumber: '',
            duration: '5 minutes'
        }
    }

    handleDurationChange = (event) => {
        this.setState({
            duration: event.target.value
        })
    }

    handleToPhoneNumberChange = (event) => {
        this.setState({
            toPhoneNumber: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const makeCall = {
            fromPhoneNumber: this.props.location.state.fromPhoneNumber,
            toPhoneNumber: this.state.toPhoneNumber,
            duration: this.state.duration
        }
        axios.post('http://localhost:4000/api/v1/calls/', makeCall)
            .then(response => {
                console.log(response);
                console.log(response.data);
                console.log(response.data.data[0]);
                console.log(response.data.data[0].service_id);
                this.props.history.push('/connected-call', { duration: this.state.duration, serviceId: response.data.data[0].service_id });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label> Phone Number</label>
                    <input type='text' value={this.state.toPhoneNumber} onChange={this.handleToPhoneNumberChange} />
                </div>
                <div>
                    <label> Duration</label>
                    <select value={this.state.duration} onChange={this.handleDurationChange}>
                        <option value="5 minutes">5 Minutes</option>
                        <option value="10 minutes">10 Minutes</option>
                        <option value="15 minutes">15 Minutes</option>
                    </select>
                </div>
                <button type="submit">Call</button>
            </form>
        )
    }
}

export default MakeCall;