import { Box, Paper, Typography, Link, IconButton, Container, Grid, Toolbar } from '@material-ui/core';
import Button from '@mui/material/Button';
import { useStylesMain } from "./Main-styles";
import { Link as RouterLink } from 'react-router-dom';

export const Main = (props) => {
  const classes = useStylesMain();

  return (
    <>
      <main>
        <Paper
          style={{ backgroundImage: `url(/ca355a4c-ales-nesetril-im7lzjxelhg-unsplash-scaled.jpg)` }}
          className={classes.pictureBlock}
          square
        >
          <Container>
            <Toolbar>
              <Grid container>
                <Grid item md={4}>
                  <Typography variant="h4" className={classes.bottomSpaceText}>
                    Ласкаво просимо до нашого магазину техніки Apple!
                  </Typography>
                  <Typography variant="h6" className={classes.bottomSpaceBtn}>
                    Купуйте продукти Apple у нас і насолоджуйтесь передовими технологіями та надійністю, яку пропонує цей всесвітньо відомий бренд.
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.mainBtn}
                    component={RouterLink}
                    to="/shop" 
                  >
                    Перейти до товарів
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </Paper>
      </main>
    </>
  );
};