import { makeStyles } from '@material-ui/core/styles';

export const useStylesShop= makeStyles((theme) => ({
    fullScreen: {
        display: 'flex',
        flexDirection: 'column'
    },
    filterSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(10),
    },
    flexColumnDrawer: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    select: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridDrawer: {
        display: 'grid',
        flexDirection: 'column',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    headerBlock: {
        justifySelf: 'center',
        marginBottom: theme.spacing(4),
        textAlign: 'center'
    },
    selectSort: {
        minWidth: 200, 
        height: 47,
    },
    bottomSpace: {
        marginTop: theme.spacing(10),
        height: 50
    },
    drawerHeader: {
        textAlign: 'center',
        alignSelf: 'center',
        justifySelf: 'center'
    },

}));