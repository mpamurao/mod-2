import {makeStyles} from "@material-ui/core/styles";

// hook called headerStyles that is a function that has 
// a callback function that returns an object with CSS

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
        textAlign:"center",
    },
    toolButton:{
        color:"white",
        textDecoration:"none",
        fontSize:"1rem",
    },
}))

export default headerStyles;