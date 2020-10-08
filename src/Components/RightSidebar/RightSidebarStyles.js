import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: '18%',
        backgroundColor: '#fff',
        padding: '1.5rem 1rem'
    },
    logoType: {
        fontSize: '1.25rem',
        fontWeight: '600',
        marginRight: '1rem',
        color: theme.palette.primary.main
    },
    hashtagTitle: {
        fontSize: '1.1rem',
        fontWeight: '600',
        marginTop: '3rem',
        marginBottom: '1.5rem',
    },
    hashtag: {
        marginRight: '.8rem',
    },
    hashtagParent: {
        width: '100%',
        marginBottom: '.5rem',
        padding: '.15rem'
    }

}))

export default useStyles