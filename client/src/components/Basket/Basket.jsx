import Button from '@mui/material/Button';
import { DialogActions } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';
import { Container } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { useStylesBasket } from './Basket';
import { BasketRowContainer } from '../BasketRow/BasketRowContainer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const Basket = ({ ads, total, removeFromBasket, addCountProduct, minusCountProduct, handleOpenModal, handleCloseModal, openModal }) => {
    const classes = useStylesBasket();
    return (
        <Container className={classes.backetBlock}>
            <Container maxWidth='sm' className={classes.main}>
                <Typography variant='h4' className={classes.header}>Мій кошик</Typography>
                {ads.length > 0 &&
                    <>
                        <div className={classes.products}>
                            {ads && ads.length > 0 && ads.map((ad) => {
                                return (
                                    <BasketRowContainer ad={ad} key={ad.id} removeFromBasket={removeFromBasket} addCountProduct={addCountProduct} minusCountProduct={minusCountProduct}></BasketRowContainer>
                                );
                            })}
                        </div>
                        <Typography variant='h5' className={`${classes.header}`}>Всього до сплати: {total}</Typography>
                        <Button size='large' variant="contained" color="primary" className={classes.buy} onClick={handleOpenModal}>Оформити замовлення</Button>
                    </>
                }
                {ads.length === 0 &&
                    <Typography variant='h5' className={classes.header}>Ви ще не обрали товари</Typography>
                }
            </Container>
            <Dialog open={openModal} onClose={handleCloseModal}>

                <DialogContent className={classes.dialog}>
                    <Typography variant='h4' className={classes.header}>Ваше замовлення успішно оформлено</Typography>

                    <CheckCircleOutlineIcon sx={{ fontSize: 200 }} className={classes.approveIcon}></CheckCircleOutlineIcon>

                    <Typography variant='h6' className={classes.header}>Наш менеджер зв'яжеться з вами найближчим часом!</Typography>

                </DialogContent>
                <DialogActions className={classes.dialogBtnBlock}>
                    <Button onClick={handleCloseModal} color="primary" size='large' variant="contained" className={classes.approveBtn}>
                        Зрозуміло
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}