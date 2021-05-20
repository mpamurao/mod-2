import {makeStyles} from '@material-ui/core';

const footerStyles = makeStyles(() => ({
    footer:{
        backgroundColor:"blue",
        color:"white",
        width:"100%",
        alignText:"center",
        padding:"1rem",
        position:"fixed",
        bottom:0,
        opacity:0.9,
    },
    link:{
        textDecoration:"none",
        color:"white",
        fontWeight:"800",
        textShadow:"1px 1px 1px black",
    },
}));

export default footerStyles;