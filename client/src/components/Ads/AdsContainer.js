import { makeStyles } from '@material-ui/core/styles';

export const useStylesAdsList = makeStyles((theme) => ({
    adsBlock: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
    },
    adsBlockNoSpace: {
        marginBottom: theme.spacing(10),
    },
    adsGrid:{
        justifyContent: 'space-around',
    },
    headerBlock: {
        justifySelf: 'center',
        marginBottom: '32px !important',
        textAlign: 'center'
    }

}));