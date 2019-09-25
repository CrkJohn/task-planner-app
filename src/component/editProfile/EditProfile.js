import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Menu from '../drawers/Menu';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import swal from 'sweetalert';



const imgUrl = process.env.PUBLIC_URL + '/fondo.png'

const useStyles = theme => ({
    BackgroundHead: {
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    }, paper: {
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



class EditProfile extends React.Component {

    editProfile(){
        const name=document.getElementById("firstName").value;
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value
        const password2=document.getElementById("cpassword").value
        var msj = "Nothing will be changed because there are no modifications."
        
        if(name!==""){
            swal("The name will be changed to " + name, {
                buttons: {
                  cancel: "Cancel",
                  yes: {
                    value: "Yes",
                  },
                },
              })
              .then((value) => {
                switch (value) {
                  case "Yes":
                    swal("The name has been changed");
                    localStorage.setItem("name",name);
                    break;
               
                  default:
                    swal("Nothing has changed");
                }
              });
        }

        if(email!==""){
            swal("The email will be changed to " + email, {
                buttons: {
                  cancel: "Cancel",
                  yes: {
                    value: "Yes",
                  },
                },
              })
              .then((value) => {
                switch (value) {
                  case "Yes":
                    swal("The email has been changed");

                    localStorage.setItem("mailLogged",email);
                    break;
               
                  default:
                    swal("Nothing has changed");
                }
              });

        }
        if(password!=="" && password===password2){
            swal("The password will be changed", {
                buttons: {
                  cancel: "Cancel",
                  yes: {
                    value: "Yes",
                  },
                },
              })
              .then((value) => {
                switch (value) {
                  case "Yes":
                    swal("The password has been changed");
                    localStorage.setItem("passwordLogged",password);
                    break;
                  default:
                    swal("Nothing has changed");
                }
              });
        }
        if(password!==password2 && (( password=== ""  &&  password2!== "" )|| ( password!== ""  &&  password2=== "" ) )){
            swal({
                title: "Error",
                text: "Some key fields are empty or the keys do not match.",
                icon: "error",
                button: "ok",
              });
              
        }   
    }   

    render() {
        const { classes } = this.props;
        return (
            <div  className={classes.BackgroundHead} id="temp">
            <Menu></Menu>
            <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                            <EditIcon />
                        </Avatar>
                    <Typography component="h1" variant="h5" style={{ color: "white" }}>
                            Edit Profile
                    </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.txtField}
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
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

                                <Button
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                                onClick={this.editProfile}>
                                    Confirm
                                </Button>
                            </Grid>

                            </form>
                    </div>
                </Container>
            </div>
        );
    }
}


EditProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(EditProfile);
