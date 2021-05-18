import {makeStyles} from "@material-ui/core/styles";

// hook called headerStyles that is a function that has a callback function that returns an object with CSS

const headerStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor:"blue",
        padding:"1rem",
        textAlign:"center",
        color:'white',
    }
}))

export default headerStyles;