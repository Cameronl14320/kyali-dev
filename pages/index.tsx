import type { NextPage } from 'next';
import { Box, Grid, Button, Link } from '@material-ui/core';
import { useState, useRef, useEffect} from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Components/Header";
import Section from "../Components/Section";

const indexStyle = makeStyles({
    root: {
//         backgroundImage: `url(${"/images/background.png"})`
        background: '#efe1d6',
    },
    section_grid: {
        marginTop: '100px',
    }
});

const Home: NextPage = () => {
    const classes = indexStyle()

    const handleScroll = () => {console.log('hello')}
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })
    return (
        <Box className={classes.root}>
            <Header/>
            <Grid className={classes.section_grid}>
                <Section sectionId={"Art"}/>
                <Section sectionId={"2"}/>
                <Section sectionId={"3"}/>
            </Grid>
        </Box>
    )
}

export default Home
