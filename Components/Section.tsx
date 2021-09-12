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
    section_block: {
        display: 'flex',
        padding: '10px',
        marginLeft: '10vw',
        marginRight: '10vw',
        minWidth: '80vw',
        maxWidth: '80vw',
        background: 'white',
        borderRadius: '15px',
        transition: '0.2s',
    },
    section_button: {
        color: 'black',
        margin: '10px',
        padding: '10px 40px 10px 40px',
        border: '2px solid red',
        minWidth: '150px',
        minHeight: '100%',
    },
    section_content: {
        justifyContent: 'center',
        color: 'black',
    },
});

export default function Section(props: {sectionId: string}) {
    const classes = sectionStyle();
    return (
        <Box id={"section-" + props.sectionId} className={classes.section}>
            <Box className={classes.section_block}>
                <Grid
                    container
                    spacing={0}
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Button className={classes.section_button}>
                        {props.sectionId}
                    </Button>
                    <Box className={classes.section_content}>
                        Testing
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}