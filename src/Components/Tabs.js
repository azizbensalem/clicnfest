import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PlaceIcon from '@material-ui/icons/Place';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import ForumIcon from '@material-ui/icons/Forum';
import GroupIcon from '@material-ui/icons/Group';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';


function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        paddingLeft: '110px',
        paddingRight: '110px',
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export const Menu = ({ value }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                    className={classes.sectionDesktop}
                >
                    <Tab label="Lieux" icon={<PlaceIcon />} {...a11yProps(0)} onClick={() => history.push('/evenements/lieux')}/>
                    <Tab label="Menus" icon={<RestaurantMenuIcon />} {...a11yProps(1)} onClick={() => history.push('/evenements/menus')} />
                    <Tab label="Boissons" icon={<FreeBreakfastIcon />} {...a11yProps(2)} onClick={() => history.push('/evenements/boissons')} />
                    <Tab label="Extra" icon={<AddCircleIcon />} {...a11yProps(3)} onClick={() => history.push('/evenements/extras')} />
                    <Tab label="Communication" icon={<ForumIcon />} {...a11yProps(4)} onClick={() => history.push('/evenements/communication')} />
                    <Tab label="Participants" icon={<GroupIcon />} {...a11yProps(5)} onClick={() => history.push('/evenements/participants')} />
                </Tabs>
                <Tabs
                    value={value}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                    className={classes.sectionMobile}
                >
                    <Tab label="Lieux" icon={<PlaceIcon />} {...a11yProps(0)} onClick={() => history.push('/evenements/lieux')} />
                    <Tab label="Menus" icon={<RestaurantMenuIcon />} {...a11yProps(1)} onClick={() => history.push('/evenements/menus')} />
                    <Tab label="Boissons" icon={<FreeBreakfastIcon />} {...a11yProps(2)} onClick={() => history.push('/evenements/boissons')} />
                    <Tab label="Extra" icon={<AddCircleIcon />} {...a11yProps(3)} onClick={() => history.push('/evenements/extras')} />
                    <Tab label="Communication" icon={<ForumIcon />} {...a11yProps(4)} onClick={() => history.push('/evenements/communication')} />
                    <Tab label="Participants" icon={<GroupIcon />} {...a11yProps(5)} onClick={() => history.push('/evenements/participants')} />
                </Tabs>
            </AppBar>
        </div>
    );
}