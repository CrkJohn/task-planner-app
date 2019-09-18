import React from 'react'
    import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './SignIn.css'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


const imgUrl = process.env.PUBLIC_URL + '/SignIn/footer.png'

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
    root: {
        backgroundImage: `url(${imgUrl})`,
    },
    multilineColor:{
        backgroundColor : 'white'
    },
});



class SingIn extends React.Component {
    //className={classes.avatar}


    loginSubmit(){
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value
        console.log(email + " " + password)
        if( email!=="" &&  password!==""){
            localStorage.setItem("isLoggedin",true);
            localStorage.setItem("mailLogged",email);
            localStorage.setItem("passwordLogged",password);
            window.location.href = "/index";
        }
    
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                <Container maxWidth='xl' >
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Trello Mobile
                   </Typography>
                        <Avatar id="avat" src={process.env.PUBLIC_URL + '/SignIn/trello.png'} className={classes.avatar} >
                        </Avatar>
                        <LockOutlinedIcon />
                        <Typography component="h1" variant="h5">
                            Sign in
                   </Typography>
                        <TextField
                            label="Email"
                            InputProps={{
                                className: classes.multilineColor
                            }}
                            id = "email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            InputProps={{
                                className: classes.multilineColor
                            }}    
                            id ="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="filled"
                        />
                        <br></br>
                        <Button type="submit"
                                className ={classes.button} 
                                style = {{backgroundColor: "#1976d2",color : "white"}} 
                                variant="contained"  onClick={this.loginSubmit}>
                            Login
                        </Button>
                        <div style={{ padding: 20 }}> 
                            <Grid container justify="center">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Create acount
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </div>

                </Container>
            </div>

        );
    }
}


SingIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SingIn);
