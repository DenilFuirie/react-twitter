import {createMuiTheme} from "@material-ui/core";
import {green, purple} from "@material-ui/core/colors";


// @ts-ignore
export const theme = createMuiTheme({
    typography: {
        // @ts-ignore
        fontFamily: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Ubuntu',
            'Helvetica Neue',
        ]
    },
    palette: {
        primary: {
            main: 'rgb(29, 161, 242)',
        },
        secondary: {
            main: green[500],
        },
        background: {
            default: '#fff',
        }
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                height: 40,
                fontWeight: 700,
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            outlinedPrimary: {
                borderColor: 'rgb(29, 161, 243)'
            },
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottomWidth: '2px',
                }
            }
        }
    }
});