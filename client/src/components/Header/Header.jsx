import { Box, AppBar, Toolbar, Typography, Link, IconButton, Container } from '@material-ui/core';
import { useStylesHeader } from './Header-style';
import { Link as RouterLink } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Header = ({ countBasket }) => {
    const classes = useStylesHeader();

    return (

        <AppBar position="fixed" className={classes.appBar}>
            <Container>
                <Toolbar>
                    <Box className={classes.title}>
                        <Typography variant="h5" >
                            <Link component={RouterLink} to="/" color="inherit" underline="none">
                                Apple Shop
                            </Link>
                        </Typography>
                        <Box mr={3} className={classes.midSection}>

                            <Link component={RouterLink} variant="h6" to="/" color="inherit" underline="none" className={classes.link}>
                                Home
                            </Link>
                            <Link component={RouterLink} variant="h6" to="/shop" color="inherit" underline="none" className={classes.link}>
                                Shop
                            </Link>

                        </Box>
                    </Box>
                    <Box className={classes.rightSection}>
                        <IconButton component={RouterLink} to="/basket" color="inherit">
                            <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} className={classes.icon} />
                            {countBasket > 0 && <span className={classes.count}>{countBasket}</span>}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
};
