import React from 'react';

class HookComponent extends React.Component{
    state = {
        name: "Marie",
        surname: "Kondo",
    }
    
    handleNameChange = this.handleNameChange.bind(this)
    handleSurnameChange = this.handleSurnameChange.bind(this)

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSurnameChange(e) {
        this.setState({
            surname: e.target.value
        })
    }

    render(){
        return (
            <>
                <input value={this.state.name} onChange={this.handleNameChange} />
                <input value={this.state.surname} onChange={this.handleSurnameChange} />
                <p>Hello, {this.state.name} {this.state.surname}</p>
            </>
        );
    }
}

export default HookComponent;