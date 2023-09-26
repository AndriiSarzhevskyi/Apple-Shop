import { Typography, Grid, CardContent, Card, CardMedia, Link, Box, IconButton } from '@material-ui/core';
import Rating from '@mui/material/Rating';
import { useStylesAd } from './Ad';
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Ad = (props) => {

    const classes = useStylesAd();

    return (
        <Grid item xs={12} sm={6} md={3} lg={3} className={classes.block}>
            <Card sx={{ maxWidth: 200}} >
                <CardMedia
                    component="img"
                    alt="ad picture"
                    height="200"
                    image={props.ad.Photo[0].filePath}
                    className={classes.cardImg}
                />

                <CardContent className={classes.cardContentCenter}>
                    <Rating value={props.ad.rating} readOnly className={classes.ratingCenter}></Rating>
                    <Typography variant='body1' className={classes.ratingCenter}>
                        <Link component={RouterLink} to={`/product/${props.ad.id}`} color="inherit" className={classes.name}>
                            {props.ad.product_name}
                        </Link>
                    </Typography>
                    <Typography variant='body1' className={classes.availible}>
                        В наявності
                    </Typography>
                    <Box className={classes.cardBottom}>
                        <Typography className={classes.price}>{props.ad.price} грн</Typography>
                        <IconButton color="inherit" onClick={() => props.addToBasketHandler(props.ad)}>
                            <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} className={classes.icon} />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}