import { makeStyles } from '@material-ui/core/styles';

export const useStylesBasket= makeStyles((theme) => ({
    backetBlock: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: theme.spacing(15),
    },
    dialog: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
    header: {
        justifySelf: 'center',
        marginBottom: '20px !important',
        textAlign: 'center'
    },
    products: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    buy: {
        alignSelf: 'center',
        width: '80%',
        marginBottom: '40px !important',
        backgroundColor: '#fe8732',
        transition: 'background-color 0.3s, color 0.3s',
        '&:hover': {
          backgroundColor: 'green'
        }
    },
    approveIcon: {
        color: 'green',
        alignSelf: 'center'
    },
    approveBtn: {
        backgroundColor: 'green',
        alignSelf: 'center',
    },
    dialogBtnBlock: {
        justifyContent: 'center !important',
    }
}));