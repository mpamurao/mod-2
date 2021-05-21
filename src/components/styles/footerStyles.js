import {makeStyles} from '@material-ui/core';

const footerStyles = makeStyles(() => ({
    footer:{
        backgroundColor:"blue",
        width:"100%",
        position:"fixed",
        bottom:0,
        opacity:0.9,
    },
    link:{
        textDecoration:"none",
        color:"white",
        fontWeight:"800",
        fontSize:"0.8rem",
        textShadow:"1px 1px 1px black",
        textAlign:"center",
        width:"20rem",
        // border:"1px solid red",
    },
}));

export default footerStyles;