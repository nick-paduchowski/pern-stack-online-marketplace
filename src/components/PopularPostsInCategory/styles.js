import { makeStyles } from '@material-ui/core/styles';
import { padding } from '@mui/system';

export default makeStyles({
    defaultPost: {
        width: 250,
        textAlign: "left"
    },
    imageOverlay: {
        position: "relative",
        textAlign: "center",
        color: "purple",
    },
    centeredText: {
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: "purple",
            color: "white"
        },
        cursor: "pointer",
        opacity: 0.9,
        padding: 5,
        borderRadius: 5,
        zIndex: 100,
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    headerImage: {
        height: 150,
        width: 250,
        borderRadius: 5
    },
    divBackground: {
        backgroundColor: "#3cb371",
        paddingTop: 20,
        paddingBottom: 20
    }
})