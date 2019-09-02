import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            className: "on",
        }
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick = e => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
            className: state.isToggleOn ? "off" : "on",
        }));
    };

    render() {
        return (
            <div>
                <button className={this.state.className} onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
            </div>
        );
    }
}

export default Toggle;