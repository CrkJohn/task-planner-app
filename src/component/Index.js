import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Cards } from './card/Cards';
import  Menu from './drawers/Menu.js';
import Container from '@material-ui/core/Container'
import PlusOneIcon from '@material-ui/icons/PlusOne';
import { Button } from '@material-ui/core';
import './index.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = theme => ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
    },
    index : {
        backgroundColor : "#1976d2"
    },
    iconHover : {
        color : "white",

    },
    fab: {
        margin: theme.spacing.unit, // You might not need this now
        position: "fixed",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3
        
    },
});



class Index extends React.Component {

    constructor(props){
        super(props);
        this.state  = {
            todos : [{text:"Learn React",responsible: {
                                            name : "Santiago Carrillo",
                                            email: "sancarbar@gmail" ,
                                        } ,  
                                        priority:5, 
                                        dueDate: new Date(),
                                        status : "ready" },
                    {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
                    {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }],
        };
       
    }


    

    render() {
        const { classes } = this.props;
        return (
            <div className = {classes.index} id = "temp">
                <Menu></Menu>
                <Container maxWidth='sm' >
                    <div className={classes.paper}>
                        <Cards tdList={this.state.todos}/>
                    </div>
                    <Fab  aria-label="add" className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </Container>
               
            </div>
        );
    }
}


Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Index);
