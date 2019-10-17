import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Menu from '../drawers/Menu';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import { Cards } from '../card/Cards';
import SearchIcon from '@material-ui/icons/Search';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns"; // import

const imgUrl = process.env.PUBLIC_URL + '/fondo.png'

const useStyles = theme => ({
    BackgroundHead: {
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    }, paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "white",
        color: "black"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    txtField: {
        color: 'white',

        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
            color: 'white',

        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                color: 'white',

            },
            '&:hover fieldset': {
                borderColor: 'white',
                color: 'white',

            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
                Color: 'white',
            },
        },
        //borderColor : theme.palette.common.white,
    },
    floatingLabelFocusStyle: {
        color: "white"
    },
    fab: {
        margin: theme.spacing.unit, // You might not need this now
        position: "fixed",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3
    }
});



class Filter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            openFilter: false,
            status: '',
            dueDate: null,
            name: '',
            filtering: { name: '', status: '', dueDate: null }
                
        }
        this.handleCloseFilter = this.handleCloseFilter.bind(this);
        this.handleOpenFilter = this.handleOpenFilter.bind(this);
        this.handleNameFilterChange = this.handleNameFilterChange.bind(this);
        this.handleStatusFilterChange = this.handleStatusFilterChange.bind(this);
        this.handleDueDateFilterChange = this.handleDueDateFilterChange.bind(this);
        this.handleSubmitFilter = this.handleSubmitFilter.bind(this);
    }
    
    

    handleOpenFilter(e) {
        this.setState({ openFilter: true });
    }

    handleCloseFilter(e) {
        this.setState({ openFilter: false });
    }

    handleNameFilterChange(e) {

        this.setState({ name: e.target.value });
    }

    handleStatusFilterChange(e) {
        this.setState({ status: e.target.value });
    }

    handleDueDateFilterChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmitFilter(e) {
        e.preventDefault();
        const newItem = {
            dueDate: this.state.dueDate,
            status: this.state.status,
            name: this.state.name,
        };
        this.setState({
            filtering : newItem
        });
        this.setState({ openFilter: false });
    }
    render() {
        const estados = [
            { value: "Completed" }, { value: "InProgress" }, { value: "Ready" }
        ]
        const { classes } = this.props;
        return (
            <div className={classes.BackgroundHead} id="temp">
                <Menu></Menu>
                <Container component="main" maxWidth="xs">
                   
                    <div className={classes.paper}>
                        <Dialog onClose={this.handleCloseFilter} fullWidth={true} aria-labelledby="simple-dialog-title" open={this.state.openFilter}>
                            <form onSubmit={this.handleSubmitFilter} className="todo-form" style={{ width: "100%" }}>
                                <center>
                                    <h3>Filter</h3>
                                    <Divider id="line2"></Divider>
                                    <Container component="main" maxWidth="xs">
                                    <TextField
                                        id="textFilter"
                                        label="Name"
                                        value={this.state.name}
                                        onChange={this.handleNameFilterChange}
                                        margin="normal" 
                                        fullWidth = {true}/>
                                    <br />


                                    <TextField
                                        id="statusFilter"
                                        select
                                        label="status"
                                        margin="normal"
                                        helperText="Please select a status"
                                        fullWidth = {true}

                                        onChange={this.handleStatusFilterChange}
                                        value={this.state.status}

                                    >
                                        {estados.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.value}
                                            </MenuItem>))}

                                    </TextField>
                                    <br />
                                    
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
   
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="yyyy/MM/dd"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Date picker inline"
                                            value={this.state.dueDate}
                                            onChange={this.handleDueDateFilterChange}
                                            KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                            }}
                                        />
                                                     
                                    </MuiPickersUtilsProvider>
                                    <br /><br />

                                    <Button type="submit" variant="contained" color="primary">
                                        {"Submit"}
                                    </Button>
                                    </Container>
                                    <br /><br />
                                </center>
                            </form>
                        </Dialog>
                        <div className={classes.paper} style={{ overflow: 'auto', height: '600px' }}  >
                            <Cards tdList={this.state.todoList} filter = {this.state.filtering} />
                        </div> 
                        <Avatar className={classes.fab}>
                            <SearchIcon fontSize="large" onClick={this.handleOpenFilter}></SearchIcon>
                        </Avatar>     
                             
                    </div>
                </Container>
            </div>
        );
    }
}


Filter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Filter);
