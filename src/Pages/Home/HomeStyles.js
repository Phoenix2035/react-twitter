import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root: {
        flex: '1',
        backgroundColor: '#e6e6e6',
    },
    header: {
        padding: 18,
        backgroundColor: '#fff',
        display: 'flex'
    },
    headerTitle: {
        fontSize: '1.1rem',
        fontWeight: '600',
        marginRight: '.5rem'
    },
    divider: {
        backgroundColor: '#7ebaff',
        opacity: .15
    },
    newTweet: {
        padding: 18,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        flex: 1,
        marginRight: '1rem',
        padding: '.3rem',
        border: '.1px solid #ccc',
        borderRadius: 3,
        outline: 'none',
        '&:focus': {
            outline: 'none'
        }
    },
    newTweetBtn: {
        minWidth: '5rem',
        height: '30px',
        borderRadius: '1rem',
        fontFamily: 'shabnam',
        lineHeight: '1rem',
        color: 'white'
    },
    newTweetImgBtn: {
        border: '.5px solid #3337',
        padding: '.2rem',
        borderRadius: '50%',
        marginLeft: '1rem'
    },


})

export default useStyle