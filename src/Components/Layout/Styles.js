import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between'
    },
    rightSidebar: {
        width: '18%',
        backgroundColor: '#bdc3c7',

    },
    leftSidebar: {
        width: '25%',
        backgroundColor: '#bdc3c7',
    },
    mainPart: {
        flex: '1',
        backgroundColor: '#bdc3c7',
    },
})

export default useStyles