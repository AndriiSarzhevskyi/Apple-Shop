import { makeStyles } from '@material-ui/core/styles';

export const useStylesAbout = makeStyles((theme) => ({
    aboutBlock: {
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        background: 'black',
        paddingBottom: theme.spacing(10),
    },
    blockCenter: {
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        color: 'white'
    },
    header: {
        marginTop: '120px !important'
    },
    aboutText: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        marginBlockStart: '7%',
        gap: 15
    }
}));