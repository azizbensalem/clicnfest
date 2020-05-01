import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Linprog from '../Linprog';

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

    return (
            <div>
            <AppBar style={{ background: '#2748ac' }}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Clic'n Fest
                         </Typography>
                        <div className={classes.grow} />
                        <Button color="inherit" onClick={() => history.push('/home')}>Accueil</Button>
                        <Button color="inherit" onClick={() => history.push('/mes_événements')}>Mes événements</Button>
                        <Button color="inherit" onClick={() => history.push('/lieux')}>Nouveau événement</Button>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
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
                    <MenuItem onClick={() => history.push('/monprofil')}>Mon Profil</MenuItem>
                    <MenuItem onClick={() => history.push('/')}>Déconnexion</MenuItem>
                </Menu>
            </div>
    );
}