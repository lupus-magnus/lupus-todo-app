import React, { Component } from 'react';

class SingleToDo extends Component {

    render() { 
        
        return ( 
            <div className="border rounded container row m-2">
                <p className='my-auto'>{this.props.task}</p>
                <div className=''>
                    <button onClick={() => this.props.onComplete(this.props.id)} className='btn btn-sm btn-success m-2 '>Feito!</button>
                    <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-sm btn-danger m-2'>Excluir</button>
                </div>
                
                
            </div>

         );
    }
}
 
export default SingleToDo;