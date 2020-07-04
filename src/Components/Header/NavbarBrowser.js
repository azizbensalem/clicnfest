import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography, IconButton, AppBar, Toolbar, 
MenuItem, Menu, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { LinearDeterminate } from '../LinearDeterminate';
import clicnfest from '../../Images/clicnfest.PNG';
import AuthService from "../../Services/AuthService";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    img: {
        width: '7vh',
        padding: '10px',
    },
}));

export default function NavbarBrowser() {
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
    const Logout = () => {
        AuthService.logout(window.location.reload("/"));
    };
      const user = JSON.parse(localStorage.getItem("user"));
    return (
      <div>
        <AppBar style={{ background: "#d21740" }} variant="outlined">
          <LinearDeterminate bool={prog} />
          <Toolbar>
            <img src={clicnfest} className={classes.img} />
            <div className={classes.grow} />
            {user && user.token ? (
              <div>
                <Button color="inherit" href="#/accueil" >
                  Accueil
                </Button>
                <Button color="inherit" href="#/mes_evenements" >
                  Mes événements
                </Button>
                <Button color="inherit" href="#/evenements/organisation" >
                  Organiser un évènement
                </Button>
                <Button color="inherit" href="#/evenements/lieux" >
                  Acheter des produits
                </Button>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar
                    alt="Hello World"
                    src="https://kwsmdigital.com/wp-content/uploads/2012/08/Facebook-Blank-Photo.jpg"
                    className={classes.small}
                  />
                </IconButton>
              </div>
            ) : (
              <div>
                <Button color="inherit" href="/#">
                  Se connecter
                </Button>
                <Button
                  color="inherit"
                  href="/#/inscription"
                >
                  Créer un compte
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem style={{ display: "block" }}>
            <Avatar
              alt="Hello World"
              src="https://kwsmdigital.com/wp-content/uploads/2012/08/Facebook-Blank-Photo.jpg"
              style={{ margin: "auto" }}
            />
            <Typography variant="body2">Aziz Ben Salem</Typography>
          </MenuItem>
          <MenuItem onClick={() => progress("/monprofil")}>Mon Profil</MenuItem>
          <MenuItem onClick={() => Logout()}>Déconnexion</MenuItem>
        </Menu>
      </div>
    );
}