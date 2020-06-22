import React from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import markerUrl from '../Images/clicnfest.PNG';
import { makeStyles } from "@material-ui/core/styles";
import { setRTLTextPlugin } from "mapbox-gl";

const useStyles = makeStyles(theme => ({
    image: {
        // backgroundImage: 'url("https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png")',
        // backgroundSize: 'cover',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        cursor: 'pointer',
    },
}));
    setRTLTextPlugin(
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true
    );

export const Map = () => {
const classes = useStyles();
const Maps = ReactMapboxGl(
{
  accessToken:
    "pk.eyJ1IjoiYXppemJlbnNhbGVtIiwiYSI6ImNqemg3NmRlbzBhYXkzZm16MzNlczdsdmgifQ.O0whWnzZZhvXb_8fg4UFJg",
});
  return (
    <Maps
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "50vh",
        width: "100vw",
      }}
      scrollZoom={false}
      center={[10.1870139, 36.8171747]}
    >
      <Marker coordinates={[10.186195, 36.800217]}>
        <img
          className={classes.image}
          src="https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png"
        />
      </Marker>
    </Maps>
  );
};

