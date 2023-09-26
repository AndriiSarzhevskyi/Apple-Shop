import { makeStyles } from '@material-ui/core/styles';

export const useStylesProduct= makeStyles((theme) => ({
    productBlock: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
    },
    productSpace: {
        marginTop: '32px !important'
    },
    productContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '80px !important',
    },
    imgSlider: {
        height: 300,
        width: 300,
    },
    flexRowProduct: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'space-around',
    },
    flexColumnProduct: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
    },
    prodName: {
        marginTop: '36px !important',
        
    },
    availibleProduct: {
        color: '#72d450',
        textAlign: 'center',
        fontSize: '18px !important'
    },

    marginBetween: {
        marginTop: '30px !important',
    },
    ratingProduct: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center'
    },
    priceProduct: {
        alignSelf: 'center',
        color: '#ff5c43',
    },
    buyProduct: {
        alignSelf: 'center',
        width: '80%',
        backgroundColor: '#ff5c43 !important'
    },
    blackBlock: {
        width: '100%',
        marginTop: '200px !important',
        backgroundColor: 'black',

        alignContent: 'center'
    },
    whiteText: {
        color: 'white !important'
    },
    marginBetweenAbout: {
        marginTop: '70px !important'
    },
    textCenter: {
        textAlign: 'center'
    },
    marginAfter: {
        marginBottom: '40px !important'
    }
}));