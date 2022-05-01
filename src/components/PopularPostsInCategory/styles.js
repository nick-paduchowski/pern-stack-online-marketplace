import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    defaultPost: {
        width: 250,
        textAlign: "left"
    },
    imageOverlay: {
        position: "relative",
        textAlign: "center",
        color: "white",
    },
    centeredText: {
        transitionDuration: '0.25s',
        backgroundColor: "purple",
        '&:hover': {
            backgroundColor: "white",
            color: "purple"
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