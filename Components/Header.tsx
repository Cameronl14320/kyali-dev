import { FunctionComponent } from "react";
import { Box, Button } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        textAlign: 'center',
    },
    button_container: {
        display: 'flex',
        justifyContent: 'left',
        background: 'red',
    },
    button: {
        padding: '5px',
    },
    banner: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5px',
        background: 'black',
        color: 'white',
    },
});

const Header: FunctionComponent = () => {
    const classes = useStyles()
    return (
        <Box className={classes.header}>
            <Box className={classes.banner}>
                Test
            </Box>
            <Box className={classes.button_container}>
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