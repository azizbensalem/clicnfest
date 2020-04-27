import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '../../../Header/Navbar';
import Container from '@material-ui/core/Container';
import { Boisson as Boissons } from './Boissons';
import { SucreeSale } from './SucreeSale';
import { Extra } from './Extra';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TotalSb from '../../../Footer/TotalSb';
import ScrollTop from '../../../Footer/ScrollTop';
import Etape from '../../../Etape';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  padding: {
    justifyContent: 'center',
  },
  button: {
    paddingBottom: '100px',
  },
}));

export default function Index() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const expandChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
  const items = useSelector(state => state.addedItems);
  const history = useHistory();
    return (
      <div className={classes.root}>
        <AppBar />
        <Container>
            <Etape activeStep={2}/>
            <div className={classes.padding}>
            <Typography variant="h6">Commander</Typography><br></br>
              <ExpansionPanel expanded={expanded === 'panel1'} onChange={expandChange('panel1')}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Boissons</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ display: 'block' }}>
                <Boissons />
                </ExpansionPanelDetails>
                </ExpansionPanel>
              <ExpansionPanel expanded={expanded === 'panel2'} onChange={expandChange('panel2')}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Sucrée Salé</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ display: 'block' }}>
                <SucreeSale />
                </ExpansionPanelDetails>
                </ExpansionPanel>
              <ExpansionPanel expanded={expanded === 'panel3'} onChange={expandChange('panel3')}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Extra</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ display: 'block' }}>
                <Extra />
                </ExpansionPanelDetails>
                </ExpansionPanel>
        <br></br>
            <div className={classes.button}>
                <Button onClick={() => history.push('/invite')}>
                  Retour
                </Button>
                {console.log(items.length)}
                <Button variant="contained" color="primary" onClick = {() => history.push('/cart')} 
                disabled={ items.length > 0 ? false : true}>
                  Suivant
                </Button>
            </div>
            </div>
        </Container>
        <TotalSb />
        <ScrollTop />
      </div>
    );
}