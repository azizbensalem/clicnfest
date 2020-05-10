import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, Typography, Paper } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const Event = ({ data }) => {
  const classes = useStyles(); 
  return (
    <TableContainer component={Paper}>
      {data.length > 0 ?
      (<Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type d'événement</TableCell>
            <TableCell align="right">État</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((events) => (
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
                <TableCell align="right">
                  <Tooltip title="Afficher" placement="top">
                    <IconButton>
                      <VisibilityIcon color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Modifier" placement="top">
                    <IconButton>
                      <EditIcon style={{ color: '#4caf50' }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Supprimer" placement="top">
                    <IconButton>
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))
        }
        </TableBody>
        </Table>) : 
        <Typography variant="h6" style={{ textAlign: 'center' }}>Aucun résultat trouvé</Typography>
      }
    </TableContainer>
  );
}
