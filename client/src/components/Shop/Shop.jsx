import { IconButton, Container, Toolbar, Typography, MenuItem, Paper, TextField } from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import Drawer from '@mui/material/Drawer';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TuneIcon from '@mui/icons-material/Tune';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useStylesShop } from "./Shop";
import { AdsContainer } from "../Ads/AdsContainer.jsx";
import Select, { SelectChangeEvent } from '@mui/material/Select';
export const Shop = ({ ads, sort, filters, handleChangeSort, isDrawerOpen, handleDrawerOpen, handleDrawerClose, changeFiltersHandler, filterHandler}) => {
    const classes = useStylesShop();

    return (
        <>
            <Container className={classes.fullScreen} key={Date.now()}>

                <Toolbar className={classes.flexColumn}>
                    <Typography variant='h4' className={classes.headerBlock}>Наші товари</Typography>
                    <div className={classes.filterSection}>
                        <IconButton onClick={handleDrawerOpen}>
                            <FilterListIcon sx={{ fontSize: 50 }}></FilterListIcon>
                        </IconButton>
                        <Select value={sort} onChange={handleChangeSort} className={classes.selectSort} style={{ whiteSpace: 'normal !important' }}>
                            <MenuItem value={'new'} style={{ display: 'block' }}>Спочатку новіші</MenuItem>
                            <MenuItem value={'old'} style={{ display: 'block' }}>Спочатку старі</MenuItem>
                            <MenuItem value={'rating'} style={{ display: 'block' }}>За рейтингом</MenuItem>
                            <MenuItem value={'price-asc'} style={{ display: 'block' }}>За зростанням ціни</MenuItem>
                            <MenuItem value={'price-desc'} style={{ display: 'block' }}>За спаданням ціни</MenuItem>
                        </Select>
                    </div>
                </Toolbar>
                <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
                    <Paper style={{ width: 300 }}>
                        <div>
                            <Toolbar className={classes.gridDrawer}>
                                <Typography variant='h5' className={classes.drawerHeader}>Фільтри</Typography>
                            </Toolbar>
                            <Toolbar className={classes.flexColumnDrawer}>
                                <TextField
                                    label="Мінімальна ціна"
                                    name="minPrice"
                                    defaultValue={filters.minPrice}
                                    type="number"
                                    onChange={changeFiltersHandler}
                                />
                                <TextField
                                    label="Максимальна ціна"
                                    name="maxPrice"
                                    defaultValue={filters.maxPrice}
                                    type="number"
                                    onChange={changeFiltersHandler}
                                />

                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="select-label">Категорія</InputLabel>
                                    <Select labelId="select-label" label="Категорія" value={filters.category} className={classes.selectSort} name="category" onChange={changeFiltersHandler} style={{ whiteSpace: 'normal' }}>
                                        <MenuItem value="all" style={{ display: 'block' }}>Усі товари</MenuItem>
                                        <MenuItem value="phone" style={{ display: 'block' }}>IPhone</MenuItem>
                                        <MenuItem value="MacBook" style={{ display: 'block' }}>Macbook</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button variant="outlined" onClick={filterHandler}>Фільтрувати</Button>
                            </Toolbar>
                        </div>
                    </Paper>
                </Drawer>

                {ads !== undefined && <AdsContainer ads={ads} header={""}></AdsContainer>}

            </Container>
        </>
    );
}
