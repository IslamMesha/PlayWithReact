import React from 'react';
import Clock from './Clock';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import CommentBox from '../nestedcomponents/CommentBox';
import Toggle from './Toggle';
import Greeting from '../conditional_rendering/Greeting';
import Calculator from "./temperature_calculator/Calculator";

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        let firstName = props.fullName.split(" ")[0];
        this.state = {
            firstName: firstName,
            isLoggedIn: false,
        }
    };


    state = {
        firstName: "",
    };

    handleChange = (e) => {
        this.setState((prevstate, props) => ({
            isLoggedIn: !prevstate.isLoggedIn,
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleChange.bind(this)}>Change Component</button>
                <div style={{ color: "red", }}> Hello {this.state.firstName} !</div >
                <br></br>
                <FirstComponent name={"Islam Mesha"} />
                <SecondComponent />
                <CommentBox />
                <Clock />
                <Toggle />
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                <Calculator />
            </div>
        )
    }
}

export default HelloWorld;