import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    header: {
        width: "100%",
        backgroundColor: "#3cb371",
        margin: 0,
        marginTop: 20,
    },
    headerText: {
        fontSize: "2rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        fontWeight: "bold",
        color: "white"
    },
    headerImage: {
        maxHeight: 200,
        borderRadius: 5
    },
    imageOverlay: {
        position: "relative",
        textAlign: "center",
        color: "purple",
    },
    centeredText: {
        transitionDuration: "0.25s",
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
    titleText: {
        marginTop: 30,
        fontFamily: "Helvetica, sans-serif",
        fontWeight: "100",
        '&:hover': {
            cursor: "default"
        }
    },
    otherTitleText: {
        marginTop: 50,
        fontFamily: "Helvetica, sans-serif",
        fontWeight: "100",
        '&:hover': {
            cursor: "default"
        }
    },
    popularDiv: {
        width: "100%",
        margin: 0,
    }
});