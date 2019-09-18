import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";


export class Todo extends React.Component {


    render() {
        return (  
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                        {this.props.text}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                        {" Date " + this.props.dueDate}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                        {" Status " + this.props.status}
                </Typography>
            
                <Typography variant="body2" color="textSecondary" component="p">
                        {" Email resposible " + this.props.email}
                </Typography>


            </CardContent>
        );
    }

}