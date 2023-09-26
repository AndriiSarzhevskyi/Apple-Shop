import { makeStyles } from '@material-ui/core/styles';

export const useStylesAd = makeStyles((theme) => ({
    block: {
        marginTop: '16px !important',
    },
    cardImg: {
        marginTop: '16px !important',
        objectFit: 'contain'
    },
    cardContentCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10
    },
    ratingCenter: {
        display: 'flex',
        justifyContent: 'center',
    },
    name: {
        fontSize: 19,
        textAlign: 'center',
        height: 140
    },
    availible: {
        color: '#72d450',
        textAlign: 'center'
    },
    cardBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignContent: 'center',
        flexDirection: 'row',
    },
    price: {
        color: '#ff5c43',
        fontSize: 19,
        paddingTop: 5,
        alignSelf: 'center',
    }
}));