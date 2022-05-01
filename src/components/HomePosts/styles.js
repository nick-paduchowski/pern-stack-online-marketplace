import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    defaultPost: {
        width: 250,
        textAlign: "left",
        [theme.breakpoints.down('sm')]: {
            width: "500%",
        },
    }
}))