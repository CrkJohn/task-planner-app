import React from 'react';
import { Todo } from './Todo'
import './Cards.css'

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";


export class Cards extends React.Component {
  

    render() {
        const listTodo = this.props.tdList.map((td) =>
            <div id ="test" >
                <Card>
                    <CardActionArea>
                        <Todo email={td.email} status = {td.status} text = {td.text} priority = {td.priority} dueDate = {td.dueDate} ></Todo>  
                    </CardActionArea>
                </Card>
                <br></br>
            </div>
           
        );
        return (
            <div>
            {listTodo}
            </div>
        );
    }


}