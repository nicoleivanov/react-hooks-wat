import React from 'react';

// Consider this regular stateful class-based component
// Lets turn this into a stateful functional component w/ hooks!

class HookComponent extends React.Component{
    state = {
        name: "Marie",
    }
    
    handleNameChange = this.handleNameChange.bind(this)

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render(){
        return (
            <>
                <input value={this.state.name} onChange={this.handleNameChange} />
                <p>Hello, {this.state.name}</p>
            </>
        );
    }
}

export default HookComponent;