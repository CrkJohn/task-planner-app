import React from 'react';

export class Todo extends React.Component {


    render() {
        return (  
            <div>
                <h2> { " Priority : " + this.props.priority + " DueDate " + this.props.dueDate}</h2>         
            </div>
        );
    }

}