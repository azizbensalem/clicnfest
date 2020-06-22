import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavbarMobile from './NavbarMobile';
import NavbarBrowser from './NavbarBrowser';
import { isMobile, isMobileOnly } from "react-device-detect";


const useStyles = makeStyles(theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  sectionMobile: {
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}));



export default function Navbar(props) {
  const classes = useStyles();
  return (
    <div>
      {isMobile ? (
        <div>
        <div className={classes.sectionMobile}>
          <NavbarMobile />
        </div>
        <div className={classes.sectionDesktop}>
          <NavbarBrowser />
        </div>
        </div>
      ) : (
          <div>
              <div className={classes.sectionDesktop}>
              <NavbarBrowser />
              </div>
              <div className={classes.sectionMobile}>
              <NavbarMobile />
              </div>
          </div>
      )}
    </div>
  );
}
