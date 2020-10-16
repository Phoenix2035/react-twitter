import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
    },
    leftSidebar: {
        width: '25%',
        backgroundColor: '#fff',
    },
    divider: {
        width: '1',
        height: '100%',
        backgroundColor: '#7ebaff',
        opacity: .5
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        overflowY:'auto'
    }

})

export default useStyle