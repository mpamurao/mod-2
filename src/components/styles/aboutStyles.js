import {makeStyles} from '@material-ui/core/styles';

const aboutStyles = makeStyles(() => ({
    aboutTitle:{
        borderBottom:"3px solid",
        padding:"1.2rem 1rem 0.5rem 1rem",
        // textAlign:"left",
        fontSize:"1.4rem",
        fontWeight:"900",
    },
    content:{
        padding:"0rem 10rem 0rem 2rem",
    },
    subtitle:{
        fontWeight:"900",
        fontSize:"1rem",
        padding:"1rem 0rem 0rem 0rem",
        marginBottom:"1rem",
        borderBottom:"1px solid",
        width:"20rem",
    },
    imageContainer:{
        maxWidth:800,
        margin:"1rem",
    },
    image: {
        padding:"1rem",
        // marginTop:'30'
        width:"100%",
      },
}));

export default aboutStyles;