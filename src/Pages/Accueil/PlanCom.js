import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { IconButton, Grid, Grow, Container, Button, Badge, Chip, CardActionArea } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles((theme) => ({
  text: {
    paddingTop: theme.spacing(1),
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingBottom: "10px",
  },
  paper: {
    paddingTop: theme.spacing(5),
    paddingButtom: theme.spacing(5),
  },
  padding: {
    paddingTop: "40px",
    paddingBottom: "20px",
    paddingRight: "40px",
    paddingLeft: "40px",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  button: {
    margin: "20px",
    textAlignLast: "center",
  },
}));

export const Plancom = () => {
    const classes = useStyles();
    const Events = [
    {
        id: 1,
        title: 'After work',
        rate: 3,
        date: '15/06/2020',
        lieux: 'Tunis',
        img: 'https://www.eventwala.info/wp-content/uploads/2016/07/Events-1200x630.jpg'
    },
    {
        id: 1,
        title: 'After work',
        rate: 3,
        date: '22/06/2020',
        lieux: 'Sousse',
        img: 'https://www.eventwala.info/wp-content/uploads/2016/07/Events-1200x630.jpg'
    },
    {
        id: 1,
        title: 'After work',
        rate: 3,
        date: '29/06/2020',
        lieux: 'Sfax',
        img: 'https://www.eventwala.info/wp-content/uploads/2016/07/Events-1200x630.jpg'
    },
    ]

    return (
    <div style={{ backgroundColor: 'white'}}>
        <Container className={classes.padding}>
            <Typography variant="h4" className={classes.title}>Les événements publiques</Typography>
            <Grid className={classes.paper} container spacing={3}>
               {Events.map(com => (
                    <Grow in={true}>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Card key={com.id}>
                               <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={com.img}
                                        title="Réseaux sociaux"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {com.title}
                                        </Typography>
                                        <Typography className={classes.text} variant="body2" color="textSecondary" >
                                           <RoomIcon />&nbsp;{com.lieux}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Typography variant="h7" style={{ paddingLeft: '10px'}}>
                                            A partir de <Chip color="primary" label="20 DT" />
                                        </Typography> 
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grow>))}
            </Grid>
            <div className={classes.button}>
                <Button variant="outlined" color="primary" href="/evenements">
                    Afficher plus
                </Button>
            </div>
        </Container>
    </div>
    
    );
}