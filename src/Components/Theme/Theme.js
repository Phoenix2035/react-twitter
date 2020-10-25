import {createMuiTheme} from '@material-ui/core';
import tinyColor from 'tinycolor2'

const colorPrimary = '#5ea9dd'

const Theme = createMuiTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: colorPrimary,
            light: tinyColor(colorPrimary).lighten().toHexString()
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: 'shabnam !important',
            }
        },

        MuiButton: {
            label: {
                fontFamily: 'shabnam !important',
                color: '#fff'
            }
        },
        MuiTextField: {
            root: {
                fontFamily: 'shabnam !important'
            }
        },


    }
})


export default Theme