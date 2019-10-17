import React from 'react';
import { Todo } from './Todo'
import './Cards.css'

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";


export class Cards extends React.Component {
  

    render() {
        var tdListJSON = []
        var tdLists = JSON.parse(localStorage.getItem("tdList"));
        for(var i = 0 ; i < tdLists.length  ; ++i ){
            tdListJSON.push(JSON.parse(tdLists[i]));
        }
        

        const listTodo = tdListJSON.map( (td,id) =>{
            if(this.props.filter!==undefined  && (this.props.filter.email !== '' || 
            this.props.filter.status !== '')){
                if (td.email.includes(this.props.filter.email) || 
                    td.status.includes( this.props.filter.status)) {

                    return (<div key={id}>
                        <Card>
                            <CardActionArea>
                                <Todo email={td.email} status = {td.status} text = {td.text} priority = {td.priority} dueDate = {td.dueDate} ></Todo>  
                            </CardActionArea>
                        </Card>
                        <br></br>
                    </div>);
                }

            }else{
                return(<div key={id}>
                    <Card>
                        <CardActionArea>
                            <Todo email={td.email} status = {td.status} text = {td.text} priority = {td.priority} dueDate = {td.dueDate} ></Todo>  
                        </CardActionArea>
                    </Card>
                    <br></br>
                </div>);
            }
        });
        return (
            <div>
                {listTodo}
            </div>
        );
    }


}