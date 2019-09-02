import React from 'react';



class FirstComponent extends React.Component {
    // This is a stateless component.

    render() {
        return (
            <div>Hello, {this.props.name} I am the first component!</div>
        )
    };
}

export default FirstComponent;