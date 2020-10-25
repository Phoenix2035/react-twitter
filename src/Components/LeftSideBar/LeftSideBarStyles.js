import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
    root: {
        width: '25%',
        backgroundColor: '#fff',
        padding: '1.5rem 2rem',
        overflow:'auto'
    },
    profileImg: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        cursor: 'pointer'
    },
    profileText: {
        width: 'max-content',
        marginLeft: '.5rem',
        direction: 'ltr'
    },
    profileName: {
        flex: 1,
    },
    profileId: {
        flex: 1,
        color: theme.palette.text.hint,
        fontSize: '.78rem'
    },
    twitterRoot: {
        backgroundColor: '#f5f8fa',
        marginTop: '3rem',
        borderRadius: '2.5rem',
        padding: '11px 24px'
    },
    twitterTitle: {
        fontSize: '1.1rem',
        fontWeight: '600',
        marginBottom: '11px',
    },
    twitterNameParent: {
        width: 'max-content',
        marginRight: '.5rem',
    },
    twitterParent: {
        padding: '10px 0'
    },
    menuItem: {
        fontFamily: 'shabnam'
    }
}))

export default useStyle