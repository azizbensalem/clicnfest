import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import clicnfest from '../../clicnfest.PNG';
import { isMobileOnly } from "react-device-detect";


const useStyles = makeStyles(theme => ({
    root: {
        height: 180,
        display: 'initial'
    },
    paper: {
        margin: theme.spacing(1),
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
    img: {
      maxHeight: '593px',
      width: '2000px',
    },
    Background: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        height: '593px',
        textAlign: 'center'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        width: '25%',
        paddingTop: '130px',
        margin: 'auto'

    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        width: '80%',
        paddingTop: '130px', 
        margin: 'auto'
    },
}));

export default function SimpleFade() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(prev => !prev);
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Fade in={setChecked} timeout={3000}>
                    <div className={classes.Background}>
                        <img src={clicnfest} className={classes.sectionDesktop} />
                        <img src={clicnfest} className={classes.sectionMobile} />
                    </div>
                </Fade>
            </div>
        </div>
    );
}
