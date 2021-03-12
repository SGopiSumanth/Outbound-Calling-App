import React, { Component } from 'react';
import Timer from 'react-compound-timer';
import axios from 'axios';

class ConnectedCall extends Component {
    constructor(props) {
        super(props)

        const setDuration = this.props.location.state.duration;
        if (setDuration === "5 minutes") {
            let self = this;
            setTimeout(function () {
                self.endCall();
            }, 5 * 60000);
        }
        if (setDuration === "10 minutes") {
            let self = this;
            setTimeout(function () {
                self.endCall();
            }, 10 * 60000);
        }
        if (setDuration === "15 minutes") {
            let self = this;
            setTimeout(function () {
                self.endCall();
            }, 15 * 60000);
        }
    }

    endCall = () => {
        const serviceId = this.props.location.state.serviceId;
        console.log(serviceId);
        axios.put(`http://localhost:4000/api/v1/calls/serviceid/${serviceId}`)
            .then(() => {
                this.props.history.push('/disconnected-call');
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.endCall();
    }

    render() {
        return (
            <div>
                <h1>Call Connected</h1>
                <Timer>
                    <Timer.Hours formatValue={value => `${value}:`} />
                    <Timer.Minutes formatValue={value => `${value}:`} />
                    <Timer.Seconds formatValue={value => `${value}`} />
                </Timer>
                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>End call</button>
                </form>
            </div>
        )
    }
}

export default ConnectedCall;