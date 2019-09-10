import React from 'react'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './SingIn.css'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';





const useStyles = theme => ({
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: theme.palette.secondary.main,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
});


class SingIn extends React.Component {
    //className={classes.avatar}
    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Trello Mobile
                   </Typography>

                    <Avatar id="avat" src={process.env.PUBLIC_URL + '/SigIn/trello.png'} className={classes.avatar} >
                    </Avatar>

                    <LockOutlinedIcon />
                    <Typography component="h1" variant="h5">
                        Sign in
                   </Typography>
                    <TextField
                        id="filled-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="filled"
                    />
                    <Button color = "3EB9DE" variant="contained" >
                        Login
                    </Button>
                </div>
            </Container>
        );
    }
}


SingIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SingIn);
