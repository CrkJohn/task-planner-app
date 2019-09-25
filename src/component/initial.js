import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Cards } from './card/Cards';
import Menu from './drawers/Menu.js';
import Container from '@material-ui/core/Container'
import './index.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import "react-datepicker/dist/react-datepicker.css";
import MenuItem from '@material-ui/core/MenuItem';



const useStyles = theme => ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
    },
    index: {
        backgroundColor: "#1976d2"

    },
    iconHover: {
        color: "white",

    },
    fab: {
        margin: theme.spacing.unit, // You might not need this now
        position: "fixed",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3
    },
    h1: {
        position: "fixed",
        margin: theme.spacing.unit,
    },
    inline: {
        display: "inline",
    },
});



class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
            text: '', dueDate: moment(), open: false,
            name: '', email: '', status : '',
        };
    


        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);


        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);


    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }


    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }


    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleOpen(e) {
        this.setState({
            open: true
        });
    }

    handleClose(e) {
        this.setState({
            open: false
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.email.length || !this.state.status.length || !this.state.dueDate || !this.state.name.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            dueDate: this.state.dueDate,
            status: this.state.status,
            name: this.state.name,
            email: this.state.email,
            id: Date.now()
        };
        var tdListJSON = []
        var tdLists = JSON.parse(localStorage.getItem("tdList"));
        for(var i = 0 ; i < tdLists.length  ; ++i ){
            console.log(tdLists[i])
            tdListJSON.push(tdLists[i]);
        } 
        tdListJSON.push(JSON.stringify(newItem));
        localStorage.setItem("tdList",JSON.stringify(tdListJSON));
       
    }


    render() {
        const { classes } = this.props;
        const estados = [
            { value: "Completed"}, { value: "In Progress" }, { value: "Ready"}
          ]   
        return (
            <div className={classes.index} id="temp">

                <Menu></Menu>
               
                <Container maxWidth='sm'>
                    <div className={classes.paper} style={{ overflow: 'auto', height: '600px' }}  >
                        <Cards tdList={this.state.todoList} />
                    </div>
                    <Fab aria-label="add" className={classes.fab} onClick={this.handleOpen}>
                        <AddIcon />
                    </Fab>
                    <br />
                    <Dialog className={classes.dialog} fullWidth={true} onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open} >
                        <form onSubmit={this.handleSubmit} style={{ width: "100%" }}>
                            <center>
                                <h3>New task</h3>
                                <Divider id="line2"></Divider>

                                <TextField
                                    id="new-todo"
                                    label="Text"
                                    margin="normal"
                                    type="text"
                                    onChange={this.handleTextChange}
                                    value={this.state.text}
                                />
                                <br />
                                <br />

                                <TextField
                                    id="new-status"
                                    select
                                    label="status"
                                    margin="normal"
                                    helperText="Please select a status"

                                    onChange={this.handleStatusChange}
                                    value={this.state.status}
                                    
                                >
                                {estados.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                      {option.value}
                                    </MenuItem>))}

                                </TextField>
                                <br />
                                <br />

                                <TextField
                                    id="new-email"
                                    label="email"
                                    type="text"
                                    onChange={this.handleEmailChange}
                                    value={this.state.email}
                                />
                                <br />
                                <br />

                                <TextField
                                    id="new-name"
                                    label="name"
                                    type="text"
                                    onChange={this.handleNameChange}
                                    value={this.state.name}
                                />
                                <br />
                                <br />

                                <DatePicker
                                    id="due-date"
                                    placeholderText="Due date"
                                    selected={this.state.dueDate}
                                    onChange={this.handleDateChange}>

                                </DatePicker>
                                <br />
                                <br />

                                <Button type="submit" variant="contained" color="primary">
                                    {"Submit"}
                                </Button>

                                <Button onClick={this.handleClose} variant="contained" color="secondary">
                                    Cancel
                                </Button>


                            </center>
                            <br />
                        </form>

                    </Dialog>

                </Container>

            </div>
        );
    }
}


Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Index);
