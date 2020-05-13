import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography, IconButton, AppBar, Toolbar, 
MenuItem, Menu, Button } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import auth from '../Auth';
import { LinearDeterminate } from '../LinearDeterminate';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));

export default function NavbarBrowser(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const menuId = 'primary-search-account-menu';
    const history = useHistory();
    const [prog, setProg] = React.useState(false);
    const progress = (link) => {
        setProg(true);
        setTimeout(() => {
            history.push(link);
        }, 3000);
    };
    return (
            <div>
            <AppBar style={{ background: '#2748ac' }}>
                <LinearDeterminate bool={prog} />
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Clic'n Fest
                         </Typography>
                        <div className={classes.grow} />
                        <Button color="inherit" onClick={() => progress('/accueil')}>Accueil</Button>
                        <Button color="inherit" onClick={() => progress('/mes_evenements')}>Mes événements</Button>
                        <Button color="inherit" onClick={() => progress('/evenements/lieux')}>Nouvel évènement</Button>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Avatar alt="Hello World" src="https://kwsmdigital.com/wp-content/uploads/2012/08/Facebook-Blank-Photo.jpg"
                            className={classes.small} />
                        </IconButton>
                    </Toolbar>
                {/* <div style={{ height: '3px' , background: 'white' }} /> */}
                </AppBar>
                <Toolbar id="back-to-top-anchor" />
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={menuId}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={() => progress('/monprofil')}>Mon Profil</MenuItem>
                    <MenuItem onClick={() => auth.logout(() => { progress('/') })}>Déconnexion</MenuItem>
                </Menu>
            </div>
    );
}