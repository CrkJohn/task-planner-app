import React from 'react';

export class Todo extends React.Component {


    render() {
        return (  
            <div>
            <h2>{ "Text : " + this.props.text +" Priority : " + this.props.priority + " DueDate " + this.props.dueDate}</h2> 
            </div>
        );
    }

}