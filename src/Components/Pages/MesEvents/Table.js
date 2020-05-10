import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const Event = () => {
  const classes = useStyles();
  const events = [
  {
    id: 1,
    type: 'After Work',
    etat: 'Terminé',
  },
  {
    id: 2,
    type: 'Aaa',
    etat: 'Pas encore commencé',
  },
];

  const etat = (variable) => {
    variable = 'Terminé' ?
    <Chip
      size="small"
      label={variable}
      style={{ backgroundColor: "#4caf50", color: 'white' }}
    />
    :
      <Chip
        size="small"
        label={variable}
        color="secondary"
      /> 
    }
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type d'événement</TableCell>
            <TableCell align="right">État</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((events) => (
            <TableRow key={events.id}>
              <TableCell component="th" scope="row">
                {events.type}
              </TableCell>
              <TableCell align="right">
                {
                  events.etat == 'Terminé' ?
                    <Chip
                      size="small"
                      label={events.etat}
                      color="secondary"
                    />
                    :
                    <Chip
                      size="small"
                      label={events.etat}
                      style={{ backgroundColor: "#4caf50", color: 'white' }}
                    />
                }              
                </TableCell>
              <TableCell align="right">Voir</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
