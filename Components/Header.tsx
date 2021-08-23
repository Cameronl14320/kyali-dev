import { FunctionComponent } from "react";
import { Box, Button } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        textAlign: 'center',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'left',
    },
    button: {
        padding: '5px',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5px',
        background: 'black',
    },
});

const Header: FunctionComponent = () => {
    const classes = useStyles()
    return (
        <Box className={classes.header}>
            <Box className={classes.content}>
                Test
            </Box>
            <Box className={classes.buttonContainer}>
                <Button className={classes.button}>
                    First
                </Button>
                <Button className={classes.button}>
                    Second
                </Button>
                <Button className={classes.button}>
                    Third
                </Button>
            </Box>
        </Box>
    )
}

export default Header