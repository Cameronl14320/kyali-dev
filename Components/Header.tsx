import { FunctionComponent } from "react";
import { Box, Button } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles({
    header: {
        display: 'sticky',
        textAlign: 'center',
        width: '100%',
    },
    button_container: {
        display: 'flex',
        justifyContent: 'left',
        background: 'white',
    },
    button: {
        padding: '5px',
    },
    banner: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5px',
        background: 'white',
        color: 'black',
    },
});

const Header: FunctionComponent = () => {
    const classes = headerStyles()
    return (
        <Box className={classes.header}>
            <Box className={classes.banner}>
                Test
            </Box>
            <Box className={classes.button_container}>
                <Button href="#section-Art" className={classes.button}>
                    Art
                </Button>
                <Button href="#section-2"  className={classes.button}>
                    Second
                </Button>
                <Button href="#section-3"  className={classes.button}>
                    Third
                </Button>
            </Box>
        </Box>
    )
}

export default Header