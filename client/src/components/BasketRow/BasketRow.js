import { makeStyles } from '@material-ui/core/styles';

export const useStylesBasketRow = makeStyles((theme) => ({
    card: {
        display: 'flex'
    },
    img: {
        height: 140,
        width: 120,
        objectFit: 'contain'
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: theme.spacing(1),
    },
    flexColumnSum: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: theme.spacing(2),
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    flexRowNoWrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
    },
    productName: {
        fontSize: 18,
        alignSelf: 'center',
    },
    count: {
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
        alignSelf: 'center',
        border: '1px solid black',
    },
    price: {
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
        alignSelf: 'center',
    },
    priceBlock: {
        height: 48,
    },
    label: {
        textAlign: 'center'
    },
    topBlock: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        justifyContent: "space-between",
    },
    maxWidth: {
        width: '100%',
    }

}));