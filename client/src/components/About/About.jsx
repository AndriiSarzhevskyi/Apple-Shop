import { Paper, Toolbar, Container, Typography, Box } from '@material-ui/core';
import { useStylesAbout } from './About.js';

export const About = () => {
    const classes = useStylesAbout();

    return (
        <Paper square className={classes.aboutBlock}>
            <Container >
                <Toolbar className={classes.blockCenter}>
                    <Typography variant='h4' className={classes.header}>Про нас</Typography>
                    <Container maxWidth='sm' className={classes.aboutText}>
                        <Typography variant='h6'>
                            Ласкаво просимо до нашого магазину техніки Apple!
                        </Typography>
                        <Typography>
                            У нас ви знайдете широкий вибір продуктів від Apple - від останніх моделей iPhone і MacBook до популярних гаджетів, таких як AirPods і Apple Watch. Ми пропонуємо якісні оригінальні пристрої, які допоможуть вам залишатися зв'язаними, продуктивними та насолоджуватися передовими технологіями.
                        </Typography>
                        <Typography>
                            Обирайте серед різних моделей, кольорів та конфігурацій, щоб знайти ідеальний пристрій, який відповідає вашим потребам. Наша команда експертів завжди готова допомогти вам з вибором та відповісти на всі ваші запитання.
                        </Typography>
                        <Typography>
                            Придбайте продукти Apple у нас і насолоджуйтеся передовими технологіями та надійністю, яку пропонує цей всесвітньо відомий бренд.
                        </Typography>
                        <Typography>
                            Ласкаво просимо до світу техніки Apple!
                        </Typography>
                    </Container>
                </Toolbar>
            </Container>
        </Paper>
    )
}