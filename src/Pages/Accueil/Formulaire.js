import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from "formik";
import * as Yup from "yup";
import { Paper, FormControl, TextField, Container, FormHelperText, Grid , 
Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  paper: {
    paddingBottom: "35px",
    paddingTop: "20px",
    paddingRight: "35px",
    paddingLeft: "35px",
  },
  padding: {
    marginTop: "-80px",
    border: "solid 5px rgb(210, 23, 64)",
    background: "transparent",
    borderRadius: "5px",
    padding: "15px",
    zIndex: "50",
    position: "relative",
    paddingBottom: "0",
    marginBottom: " 80px",
  },
  form: {
    width: "100%!important",
    textAlign: "center",
    marginBottom: "-23px",
  },
  formControl: {
    width: "100%!important",
    textAlign: "center",
    marginBottom: "0px!important",
  },
  button: {
    marginTop: "12px",
  },
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
}));

export const Formulaire = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
      <div className={classes.container}>
        <div className={classes.padding}>
            <Formik
              initialValues={{
                nom: '',
                date: '',
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  localStorage.setItem("name_event", values.nom);
                  localStorage.setItem("date_event", values.date);
                  history.push("/evenements/organisation");
                  setSubmitting(false);
                }, 500);
              }}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                } = props;
                return (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    autoComplete="off"
                    className={classes.form}
                  >
                    <Paper className={classes.paper} variant="outlined">
                      <Typography className={classes.title}>
                        Organisez votre événement maintenant
                      </Typography>
                      <br></br>
                      <Grid container spacing={3}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <TextField
                              name="nom"
                              type="text"
                              label="Nom de l'événement"
                              placeholder="Choisissez un nom de l'événement"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="outlined"
                              value={values.nom}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <TextField
                              name="date"
                              label="Date d'événement"
                              type="date"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="outlined"
                              value={values.date}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Paper>
                    <div className={classes.button}>
                      <Button
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          background: "rgb(210, 23, 64)",
                          color: "white",
                        }}
                      >
                        Commencer
                      </Button>
                    </div>
                  </form>
                );
              }}
            </Formik>
        </div>
      </div>
    );
}