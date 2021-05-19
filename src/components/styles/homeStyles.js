// to use material ui styles in class components
// have to use Higher-Order Component API {withStyles} 
// instead of Hook API {makeStyles}

const homeStyles = {
    homeTitle: {
        borderBottom:"3px solid",
        padding:"1.2rem 1rem 0.5rem 1rem",
        // textAlign:"left",
        fontSize:"1.4rem",
        fontWeight:"900",
    },
    formControl:{
        minWidth:"130px",
        justifyContent:"center",
    },
}


export default homeStyles;