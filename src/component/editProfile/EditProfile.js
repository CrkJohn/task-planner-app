import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


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
    multilineColor: {
        backgroundColor: 'white'
    },
});



class EditProfile extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { classes } = this.props;
        return ;
    }
}


EditProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(EditProfile);
