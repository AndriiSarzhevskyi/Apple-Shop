import { Container, Typography, Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import { ImgSlider } from "../Slider/ImgSlider";
import { useStylesProduct } from './Product.js';
import Rating from '@mui/material/Rating';

export const Product = ({ ad, addToBasketHandler }) => {
    const classes = useStylesProduct();
    return (
        <>
            <Container className={classes.productBlock}>
                <Container maxWidth='md' className={classes.productContainer}>
                    <div className={classes.flexRowProduct}>
                        <div className={` ${classes.flexRowProduct} ${classes.productSpace} ${classes.imgSlider}`}>
                            <ImgSlider photos={ad.Photo}></ImgSlider>
                        </div>
                        <div className={classes.flexColumnProduct}>
                            <Typography variant='h4' className={classes.prodName}>{ad.product_name}</Typography>
                            <div className={`${classes.flexRowProduct} ${classes.marginBetween}`}>
                                <Rating value={ad.rating} readOnly className={classes.ratingProduct}></Rating>
                                <Typography variant='body1' className={` ${classes.availibleProduct} `}>
                                    В наявності
                                </Typography>
                            </div>
                            <Typography variant='h4' className={`${classes.priceProduct} ${classes.marginBetween}`}>{ad.price}</Typography>
                            <Button size='large' variant="contained" color="primary" className={`${classes.marginBetween} ${classes.buyProduct}`} onClick={()=>addToBasketHandler(ad)}>
                                Додати в кошик
                            </Button>
                        </div>
                    </div>
                </Container>
            </Container>

            <div className={` ${classes.productBlock} ${classes.flexColumnProduct} ${classes.blackBlock}`}>
                <Container maxWidth='sm'>
                    <Typography variant='h4' className={` ${classes.whiteText} ${classes.marginBetweenAbout} ${classes.textCenter}`}>Опис</Typography>
                    <Typography className={` ${classes.whiteText} ${classes.marginBetween} `}>{ad.about}</Typography>
                    <Typography variant='h4' className={` ${classes.whiteText} ${classes.marginBetweenAbout} ${classes.textCenter}`}>Характеристики</Typography>
                    
                    <Grid container spacing={2} className={` ${classes.whiteText}  ${classes.marginBetween} ${classes.marginAfter}`}>
                        <Grid item xs={6}>
                            Колір
                        </Grid>
                        <Grid item xs={6}>
                            {ad.color}
                        </Grid>

                        <Grid item xs={6}>
                            Процесор
                        </Grid>
                        <Grid item xs={6}>
                            {ad.CPU}
                        </Grid>

                        <Grid item xs={6}>
                            Оперативна пам'ять
                        </Grid>
                        <Grid item xs={6}>
                            {ad.RAM} Гб
                        </Grid>

                        <Grid item xs={6}>
                            Пам'ять
                        </Grid>
                        <Grid item xs={6}>
                            {ad.memory} Гб
                        </Grid>

                        <Grid item xs={6}>
                            Діагональ екрану
                        </Grid>
                        <Grid item xs={6}>
                            {ad.screen} дюймів
                        </Grid>

                        <Grid item xs={6}>
                            Матриця
                        </Grid>
                        <Grid item xs={6}>
                            {ad.screen_type}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}