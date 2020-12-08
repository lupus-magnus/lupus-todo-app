import React, { Component } from 'react';
import SingleToDo from './singletodo'

class ToDos extends Component {
    
    render() { 
        console.log('ToDos props: ', this.props)
        return (
            <React.Fragment>
                    
                {this.props.taskList.map(obj => <SingleToDo 
                onDelete={this.props.onDelete} 
                onComplete={this.props.onComplete}
                id={obj.id}
                key={obj.id} 
                task={obj.task} />)}
                
            </React.Fragment>
        );
    }
}
 
export default ToDos;