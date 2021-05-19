import {makeStyles} from "@material-ui/core/styles";

// hook called headerStyles that is a function that has 
// a callback function that returns an object with CSS
// hook API only works with function components

const headerStyles = makeStyles(() => ({
    appBar:{
        backgroundColor:"white",
        textAlign:"center",
        color:'blue',
    },
    heading:{
        fontWeight:"900",
        textShadow:"1px 1px 1px",
        paddingTop:"1.5rem",
    },
    toolbar:{
        backgroundColor:"blue",
        padding:"0rem 3rem 0rem 3rem",
    },
    toolButton:{
        color:"white",
        textDecoration:"none",
        fontSize:"1rem",
    },
}))

export default headerStyles;