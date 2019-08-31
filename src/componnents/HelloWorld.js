import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        let firstName = props.fullName.split(" ")[0];
        this.state.firstName = firstName;
    };


    state = {
        firstName: "",
    };


    render() {
        return (
            <div>
                <div style={{ color: "red", }}> Hello {this.state.firstName} !</div >
            </div>
        )
    }
}

export default HelloWorld;