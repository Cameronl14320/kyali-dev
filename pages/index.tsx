import type { NextPage } from 'next'
import { Box, Grid, Button } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { borders } from '@material-ui/system'
import Header from "../Components/Header";

const useStyles = makeStyles({
    section: {
        display: 'block',
        background: 'black',
        height: '80vh',
        color: 'white',
    },
    section_button: {
        color: 'white',
        margin: '10px',
        padding: '10px 40px 10px 40px',
        border: '2px solid',
    }
});


const Home: NextPage = () => {
    const classes = useStyles();
    return (
    <Box>
        <Header/>
      <Grid>
        <Box className={classes.section}>
            <Grid>
                <Box>
                </Box>
                <Button className={classes.section_button}>
                    Art
                </Button>
            </Grid>
        </Box>
        <Box className={classes.section}>
            <Grid>
                <Box>
                </Box>
                <Button className={classes.section_button}>
                    Section 2
                </Button>
            </Grid>
        </Box>
        <Box className={classes.section}>
            <Grid>
                <Box>
                </Box>
                <Button className={classes.section_button}>
                    Section 3
                </Button>
            </Grid>
        </Box>
      </Grid>
    </Box>
    )
}

export default Home
