import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import './UserTab.css';


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
        this.state = { open: false };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
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




    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button onClick={this.handleOpen}>
                    <DataUsageIcon className={classes.iconHover}  fontSize="large"  ></DataUsageIcon>
                </Button>
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

                            {['Edit profile'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
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