import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn,
        }
    };


    render() {
        if (this.props.isLoggedIn === true) {
            return <UserGreeting />
        };
        return <GuestGreeting />

    }
}

export default Greeting;