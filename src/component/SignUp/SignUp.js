import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './SingUp.css'
import {Link} from 'react-router-dom';


const imgUrl = process.env.PUBLIC_URL + '/fondo.png'


const useStyles = theme => ({
    BackgroundHead: {
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "white",
        color : "black"
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
    }
});



class SignUp extends React.Component {

    signupCl(){
        const name=document.getElementById("firstName").value;
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value
        const password2=document.getElementById("cpassword").value
        if(password===password2){
            localStorage.setItem("name",name);
            localStorage.setItem("isLoggedin",true);
            localStorage.setItem("mailLogged",email);
            localStorage.setItem("passwordLogged",password);
            window.location.href = "/index";
        }   
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.BackgroundHead} id="temp">

                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <PeopleOutlineIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" style={{ color: "white" }}>
                            Registration
                    </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.txtField}
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="Full name"
                                        autoFocus
                                        style={{ color: "white" }}
                                        InputLabelProps={{
                                            className: classes.floatingLabelFocusStyle,
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField

                                        className={classes.txtField}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        InputLabelProps={{
                                            className: classes.floatingLabelFocusStyle,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.txtField}

                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        InputLabelProps={{
                                            className: classes.floatingLabelFocusStyle,
                                        }}
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.txtField}

                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Confirm password"
                                        type="password"
                                        id="cpassword"
                                        InputLabelProps={{
                                            className: classes.floatingLabelFocusStyle,
                                        }}
                                        autoComplete="current-password"
                                    />
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"

                                className={classes.submit}
                            >
                                Sign Up
                      </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link to="/signin" variant="body2" style={{ color: "white" }}  >
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>

                </Container>

            </div>
            
        );
    }
}


SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SignUp);
