import React from 'react';
import { Todo } from './Todo'
import './Cards.css'

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";


export class Cards extends React.Component {
  

    render() {
        const listTodo = this.props.tdList.map((td) =>
            <div id ="test" >
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {td.text}   
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <Todo   priority = {td.priority} dueDate = {td.dueDate} ></Todo>    
                            </Typography>
                        </CardContent>
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