import React, {FunctionComponent} from "react";
import {Box, Button, Grid, Link} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const sectionStyle = makeStyles({
    section: {
        display: 'block',
        height: '80vh',
        color: 'black',
        padding: '10px',
    },
    section_button: {
        color: 'white',
        margin: '10px',
        padding: '10px 40px 10px 40px',
        border: '2px solid',
        minWidth: '150px',
        minHeight: '50px',
    },
    section_content: {
        background: 'black',
        minWidth: '200px',
        minHeight: '100px',
    },
});

export default function Section(props: {sectionId: string}) {
    const classes = sectionStyle();
    return (
        <Box id={"section-" + props.sectionId} className={classes.section}>
            <Grid
                container
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box className={classes.section_content}>
                </Box>
                <Button className={classes.section_button}>
                    {props.sectionId}
                </Button>
            </Grid>
        </Box>
    )
}