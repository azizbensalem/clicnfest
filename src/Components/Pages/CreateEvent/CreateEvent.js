import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '../../Header/Navbar';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Formik } from "formik";
import * as Yup from "yup";
import { FormHelperText } from "@material-ui/core";
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 280,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
  padding: {
      justifyContent: 'center',
      paddingTop: '40px',
  },
  button: {
    paddingTop: '15px',
  }
}));




export default function CreerEvent() {
    const classes = useStyles();
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
  const history = useHistory();
    return (
        <div className={classes.root}>
          <AppBar />
        <Container>
            <div className={classes.padding}>
            <Typography variant="h6">Créer l'événement</Typography>
            <br></br>
              <Formik
              initialValues={{
                type_event: "After Work",
                local: "",
                date: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log("Logging in", values);
                  history.push("/mes_événements");
                  setSubmitting(false);
                }, 500);
              }}
              validationSchema={Yup.object().shape({
                type_event: Yup.string().required("Ce champ est obligatoire."),
                local: Yup.string().required("Ce champ est obligatoire."),
                date: Yup.string().required("Ce champ est obligatoire."),
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
                    noValidate
                    autoComplete="off"
                  >
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel ref={inputLabel} htmlFor="outlined-type-native-simple">
                      Type d'événement
                    </InputLabel>
                    <Select
                      native
                      error={errors.type_event && touched.type_event && true}
                      value={values.type_event}
                      name="type_event"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      labelWidth={labelWidth}
                      variant="outlined"
                      helperText={
                          errors.type_event &&
                          touched.type_event && (
                            <FormHelperText error>
                              {errors.type_event}
                            </FormHelperText>
                          )
                        }
                    >
                      <option value="After Work">After Work</option>
                      <option value="Conventum">Conventum</option>
                      <option value="Team building">Team building</option>
                      <option value="Pyjama">Pyjama</option>
                      <option value="Demande de mariage">Demande de mariage</option>
                    </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                          <TextField
                            error={errors.local && touched.local && true}
                            name="local"
                            label="Où"
                            type="text"
                            value={values.local}
                            placeholder="Où"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            variant="outlined"
                            helperText={
                              errors.local &&
                              touched.local && (
                                <FormHelperText error>
                                  {errors.local}
                                </FormHelperText>
                              )
                            }
                          />
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                                <TextField
                                error={errors.date && touched.date && true}
                                name="date"
                                id="outlined-number"
                                label="Date d'événement"
                                type="date"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                variant="outlined"
                                value={values.date}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                  errors.date &&
                                  touched.date && (
                                    <FormHelperText error>
                                      {errors.date}
                                    </FormHelperText>
                                  )
                                }
                                />
                      </FormControl>                   
                              <div className={classes.button}>
                                      <Button
                                        className={classes.backButton}
                                        onClick={() => history.push('/accueil')}
                                      >
                                        Retour
                                      </Button>
                                      <Button variant="contained" type="submit"
                                        disabled={isSubmitting}
                                        color="primary" >
                                          Confirmer
                                      </Button>
                              </div>
                      </form>
                      );
                    }}
                  </Formik>
                </div>
          </Container>
        </div>
    );
}
