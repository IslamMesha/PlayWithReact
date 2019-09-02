import React from 'react';



class SecondComponent extends React.Component {
    // This is a statefull component.

    constructor(props) {
        super(props);

        this.state = {
            toggle: true,
        };

        this.onClick = this.onClick.bind(this);

    };

    onClick = () => {
        console.log("You have ckicked the '<div>'");
        this.setState((prevState, props) => ({
            toggle: !prevState.toggle
        }));
    };

    render() {
        return (
            <div>
                <div onClick={this.onClick} style={{ cursor: "pointer" }} >Hello, {this.props.name} I am the second component!</div>
                <br />
                <span>Toggle is: {this.state.toggle}</span>
            </div>
        )
    };
}

export default SecondComponent;