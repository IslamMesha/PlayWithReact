import React from 'react';
import Clock from './Clock';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import CommentBox from '../nestedcomponents/CommentBox';


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
                <br></br>
                <FirstComponent name={"Islam Mesha"} />
                <SecondComponent />
                <CommentBox />
                <Clock />
            </div>
        )
    }
}

export default HelloWorld;