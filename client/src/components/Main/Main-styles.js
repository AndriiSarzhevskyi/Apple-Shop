import { makeStyles } from '@material-ui/core/styles';

export const useStylesMain = makeStyles((theme) => ({
    pictureBlock: {
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: theme.palette.common.white
    },
    title: {
        flexGrow: 1,
    },
    mainBtn: {
        color: 'white !important',
        alignSelf: 'center',
        borderColor: '#ffffff !important',
        transition: 'border-color 0.3s, color 0.3s',
        '&:hover': {
            color: 'orange !important',
            borderColor: 'orange !important'
        }
    },
    bottomSpaceText: {
        marginBottom: '16px !important'
    },
    bottomSpaceBtn: {
        marginBottom: '32px !important'
    }
}));