import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import clicnfest from '../../../clicnfest.PNG';
import eventu from '../../../eventu.png';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import { FormHelperText } from "@material-ui/core";


const useStyles = makeStyles(theme => ({ 
  root: {
    borderRadius: '25px',
    textAlign: 'center',
    width: '300px',
    margin: 'auto',
  },
  rootForm: {
    '& > *': {
      margin: theme.spacing(1),
      maxWidth: 500,
      minWidth: 250,
  },

  },
  img: {
    width: '30%',
  },
  link: {
    margin: theme.spacing(1),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: theme.spacing(1),
    color: '#3f51b5'
  },
  content: {
    margin: 'auto'
  },
  Background: {
    // background: 'linear-gradient(to right, #ff0099, #493240)',
    backgroundImage: `url(${eventu})`,
    minHeight: '100vh',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
  }
}));

export default function Login() {
    const classes = useStyles();
    const history = useHistory();
    return (
      <div className={classes.Background}>
        <Grid className={classes.content}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <img src={clicnfest} className={classes.img} />
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textPrimary"
                  gutterBottom
                >
                  Se connecter à Clic'n Fest
                </Typography>
                <br></br>
                <Formik
                  initialValues={{ username: "", password: "" }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      console.log("Logging in", values);
                      setSubmitting(false);
                      history.push("/home");
                    }, 500);
                  }}
                  validationSchema={Yup.object().shape({
                    username: Yup.string().required(
                      "Ce champ est obligatoire."
                    ),
                    password: Yup.string().required("Ce champ est obligatoire.")
                  })}
                >
                  {props => {
                    const {
                      values,
                      touched,
                      errors,
                      isSubmitting,
                      handleChange,
                      handleBlur,
                      handleSubmit
                    } = props;
                    return (
                      <form
                        onSubmit={handleSubmit}
                        className={classes.rootForm}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          error={errors.username && touched.username && true}
                          name="username"
                          label="Nom d'utilisateur"
                          type="text"
                          value={values.username}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant="outlined"
                          helperText={
                            errors.username &&
                            touched.username && (
                              <FormHelperText error>
                                {errors.username}
                              </FormHelperText>
                            )
                          }
                        />
                        <TextField
                          error={errors.password && touched.password && true}
                          name="password"
                          label="Mot de passe"
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant="outlined"
                          helperText={
                            errors.password &&
                            touched.password && (
                              <FormHelperText error>
                                {errors.password}
                              </FormHelperText>
                            )
                          }
                        />
                        <div style={{ textAlign: "center" }}>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            color="primary"
                            variant="contained"
                          >
                            Se connecter
                          </Button>
                        </div>
                      </form>
                    );
                  }}
                </Formik>
                <div className={classes.link}>
                  <Typography className={classes.link}>
                    <Link to="" style={{ textDecoration: "none" }}>
                      Mot de passe oublié
                    </Link>
                  </Typography>
                  <Typography className={classes.link}>
                    <Link to="/inscription" style={{ textDecoration: "none" }}>
                      Inscrivez-vous à un compte
                    </Link>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
}




