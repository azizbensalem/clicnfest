import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function CreerEvent() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        type: '',
        name: 'hai',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
      <div>
        <Typography variant="h6">Créer un événement</Typography>
        <br></br>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-type-native-simple">
            Type d'événement
          </InputLabel>
          <Select
            native
            value={state.type}
            onChange={handleChange("type")}
            labelWidth={labelWidth}
            inputProps={{
              name: "type",
              id: "outlined-type-native-simple"
            }}
          >
            <option value="After Work">After Work</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </div>
    );
}
