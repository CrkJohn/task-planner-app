import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import './UserTab.css';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Dialog from '@material-ui/core/Dialog';



const useStyles  = theme =>  ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    button : {
        margin: theme.spacing.unit, // You might not need this now
        position: "absolute",
        bottom: theme.spacing.unit ,
        right: theme.spacing.unit
    },
    iconHover : {
        color : "white",

    }
});


class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false,
            openFilter: false,
            filter: { name: '', status: '', dueDate: null },
            filtering: { name: '', status: '', dueDate: null }
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseFilter = this.handleCloseFilter.bind(this);
        this.handleOpenFilter = this.handleOpenFilter.bind(this);
        this.handleNameFilterChange = this.handleNameFilterChange.bind(this);
        this.handleStatusFilterChange = this.handleStatusFilterChange.bind(this);
        this.handleDueDateFilterChange = this.handleDueDateFilterChange.bind(this);
        this.handleSubmitFilter = this.handleSubmitFilter.bind(this);
        
    }

    logout() {
        localStorage.removeItem("isLoggedin");
        window.location.href = "/";
    }


    handleOpen(e) {

        this.setState({ open: true });
    }

    handleClose(e) {
        this.setState({ open: false });
    }



    handleOpenFilter(e) {
        this.setState({ openFilter: true });
    }

    handleCloseFilter(e) {
        this.setState({ openFilter: false });
    }

    handleNameFilterChange(e) {
        const fil = this.state.filter
        fil.name = e.target.value;
        this.setState({ filter: fil });
    }

    handleStatusFilterChange(e) {
        const fil = this.state.filter
        fil.status = e.target.value;
        this.setState({ filter: fil });
    }

    handleDueDateFilterChange(e) {
        const fil = this.state.filter
        fil.dueDate = moment(e.target.value, 'YYYY-MM-DD')
        this.setState({ filter: fil });
    }

    handleSubmitFilter(e) {
        e.preventDefault();
        this.setState({ filtering: this.state.filter });
        this.setState({openFilter:false});

    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                
                <Button onClick={this.handleOpen} style= {{top:0, left:0}} >
                    <DataUsageIcon className={classes.iconHover}  fontSize="large"  ></DataUsageIcon>
                </Button>
                <Button  style={{position:"fixed",top:0, right:0}}>
                    <SearchIcon className={classes.iconHover}  fontSize="large"  onClick={this.handleOpenFilter}></SearchIcon>
                </Button>
            
                <Divider id="line"></Divider>

                <Dialog onClose={this.handleCloseFilter} fullWidth={true} aria-labelledby="simple-dialog-title" open={this.state.openFilter}>
                        <form onSubmit={this.handleSubmitFilter} className="todo-form" style={{ width: "100%" }}>
                        <center>
                            <h3>Filter</h3>
                            <TextField
                                id="textFilter"
                                label="Name"
                                value={this.state.filter.name}
                                onChange={this.handleNameFilterChange}
                                margin="normal" />
                            <br />
                            <TextField
                                id="statusFilter"
                                label="Status"
                                value={this.state.filter.status}
                                onChange={this.handleStatusFilterChange}
                                margin="normal" />
                            <br />
                            <TextField
                                id="due-date"
                                label="Due Date"
                                type="date"
                                defaultValue={this.state.filter.dueDate ? this.state.filter.dueDate.format('YYYY-MM-DD') : null}
                                onChange={this.handleDueDateFilterChange}
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                            <br /><br />
                            <Button variant="outlined" color="secondary" type="submit">
                                Apply
                        </Button>
                            <Button onClick={this.handleClear} variant="outlined" color="primary" style={{ marginLeft: "5px" }}>
                                Clear All
                        </Button>
                        </center>
                        </form>
                </Dialog>


                <Drawer open={this.state.open} onClose={this.handleClose}>
                    <div
                        className={classes.list}
                        role="presentation"
                        onClick={this.handleClose}
                        style = {{
                            }} 
                        >
                        <List>
                            <ListItem>
                                <div className="logo-content">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png"></img>
                                </div>
                                <br>
                                </br>
                                <ListItemText>
                                    David Ibañez
                                </ListItemText> 
                            </ListItem> 


                            <ListItem button component={Link} to="/index">
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Index'}/>    
                            </ListItem > 
                            <ListItem button component={Link} to="/editprofile">
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Edit profile'}/>    
                            </ListItem > 
                        
                        </List>
                        <Divider/>
                        <Button className = {classes.button} style = {{
                                            backgroundColor: "#1976d2",color : "white"}} 
                                        variant="contained" 
                                        onClick={this.logout}>
                                        LogOut
                        </Button>
                    </div>
                </Drawer>
            </div>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Menu);