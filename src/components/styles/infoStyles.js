import {makeStyles} from '@material-ui/core/styles';

const infoStyles = makeStyles(() => ({
    infoContainer:{
        paddingBottom:"2rem",
    },
    infoTitle:{
        borderBottom:"3px solid",
        padding:"1.2rem 1rem 0.5rem 1rem",
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
        margin:"2rem",
        padding:"0.5rem",
    },
    image: {
        padding:"1rem",
        width:"100%",
      },
    bottom:{
        paddingBottom:"1rem",
    },
    last:{
        paddingBottom:"3rem",
    },
    subtitle2:{
        fontWeight:"900",
        fontSize:"1rem",
        marginBottom:"1rem",
        width:"5rem",
    }
}));

export default infoStyles;