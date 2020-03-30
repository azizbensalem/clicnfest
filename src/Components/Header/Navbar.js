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
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Linprog from '../Linprog';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },

  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function PrimarySearchAppBar(props) {
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

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button onClick={() => history.push('/')}>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <ListItem button onClick={() => history.push('/mes_événements')}>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="Mes événements" />
        </ListItem>
        <ListItem button onClick={() => history.push('/create_event')}>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="Nouveau événement" />
        </ListItem>
      </List>
    </div>
  );
  const [show , setShow]= React.useState(false)
  const linprog = () => {
     setShow(true);
  }
  function showing(url) {
  return <div>
    <Linprog /> 
  </div>
  }

  return (
    <div>
      <div className={classes.sectionDesktop}>
      <AppBar position="static" color="primary">
          {show ? showing() : null}
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Clic'n Fest
          </Typography>
          <div className={classes.grow} />
          <Button color="inherit" onClick={() => linprog() }>Accueil</Button>
          <Button color="inherit" onClick={() => history.push('/mes_événements')}>Mes événements</Button>
          <Button color="inherit" onClick={() => history.push('/create_event')}>Nouveau événement</Button>
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
        <MenuItem onClick={() => history.push('/login')}>Déconnexion</MenuItem>
      </Menu>
      </div>
      <div className={classes.sectionMobile}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon onClick={toggleDrawer('left', true)} />
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                  {sideList('left')}
                </Drawer>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Clic'n Fest
          </Typography>
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
        </div>
      </div>
    </div>
  );
}
