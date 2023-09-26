import { Box, CardMedia, Card, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useStylesBasketRow } from './BasketRow';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

export const BasketRow = ({ ad, removeFromBasket, addCountProduct, minusCountProduct }) => {
    const classes = useStylesBasketRow();
    return (
        <>
            <Card className={classes.card}>
                <CardMedia
                    component="img"
                    alt="ad picture"

                    image={ad.Photo[0].filePath}
                    className={classes.img}>
                </CardMedia>
                <div className={`${classes.flexColumn} ${classes.maxWidth}`}>
                    <div className={`${classes.flexRow} ${classes.maxWidth}`}>
                        <div className={`${classes.flexRowNoWrap} ${classes.topBlock}  ${classes.maxWidth}`}>
                            <Typography className={classes.productName}>{ad.product_name}</Typography>
                            <div className={classes.iconContainer}>
                                <IconButton onClick={() => removeFromBasket(ad)}>
                                    <CloseIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className={classes.flexRow}>
                            <div className={classes.flexColumn}>
                                <Typography className={classes.label}>Кількість</Typography>
                                <div className={classes.flexRow}>
                                    <IconButton onClick={() => minusCountProduct(ad)}>
                                        <RemoveIcon></RemoveIcon>
                                    </IconButton>
                                    <Typography className={classes.count} >{ad.count}</Typography>
                                    <IconButton onClick={() => addCountProduct(ad)}>
                                        <AddIcon></AddIcon>
                                    </IconButton>
                                </div>
                            </div>
                            <div className={classes.flexColumnSum}>
                                <Typography className={classes.label}>Сума</Typography>
                                <div className={`${classes.flexRow} ${classes.priceBlock}`}>
                                    <Typography className={classes.price} >{ad.count * ad.price} грн</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}