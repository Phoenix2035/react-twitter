import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
    container: {
        width: '30rem',
        margin: '10rem auto',
        display: 'flex',
        flexDirection: 'column'
    },
    headerText: {
        margin: '1rem',
        alignSelf: 'center',
        fontFamily: 'shabnam'
    },
    tab: {
        flex: 1,
        fontFamily: 'shabnam',
        fontSize: '1rem',
        cursor: 'pointer'
    },
    containerInput: {
        padding: '1rem .8rem',
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        marginBottom: '1rem',

    },
    inputStyle: {
        fontFamily: 'shabnam'
    }


}))

export default useStyle