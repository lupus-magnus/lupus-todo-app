import React, { Component } from 'react';

class UserInput extends Component {
    
    state = {
        value: ''
    }

    handleChange = (e) => {
    
        this.setState({value: e.target.value})    
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.value)
        this.setState({value: ''}) //resetando o input
        document.getElementById('inputBar').value=""
    }


    render() { 
        return (
            <form className="row d-flex justify-content-center mx-auto">
                <input 
                onChange = {this.handleChange} 
                
                placeholder='adicione uma tarefa...' 
                id='inputBar'
                type="text" 
                name='todo'/>
                <button value={this.state.value} onClick={this.handleSubmit} className="btn btn-lg m-2">add</button>
            </form>
          );
    }
}
 
export default UserInput;