import { useEffect, useState } from 'react';
import { Container, Grid, Toolbar, Typography } from '@material-ui/core';
import { AdContainer } from '../Ad/AdContainer.js';
import { useStylesAdsList } from './AdsContainer.js';

export const AdsContainer = (props) => {
    const [conClass, setConClass] = useState();

    useEffect(() => {
        if (props.header && props.header !== "") {
            setConClass(classes.adsBlock);
        } else if(props.header === "") {
            setConClass(classes.adsBlockNoSpace);
        }
    }, [props.header]);

    const classes = useStylesAdsList();
    return (
        <>
            <Container className={conClass}>
                {props.header && props.header !== "" && <Typography variant='h4' className={classes.headerBlock}>{props.header}</Typography>}
                <Toolbar>
                    <Grid container className={classes.adsGrid}>
                        {props.ads.length > 0 && props.ads.map((ad) => {
                            return (
                                <AdContainer ad={ad} key={ad.id}></AdContainer>
                            );
                        })}
                    </Grid>
                </Toolbar>
            </Container>
        </>
    );
};