import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '../../Header/Navbar';
import Container from '@material-ui/core/Container';
import { Formik, Form, getIn, FieldArray } from "formik";
import { useHistory } from 'react-router-dom';
import * as Yup from "yup";
import { Divider } from "@material-ui/core";
import {Menu} from '../../Tabs';

function Invite() {
    const useStyles = makeStyles(theme => ({
      root: {
          '& > *': {
              margin: theme.spacing(1),
              width: 280,
          },
      },
      padding: {
        padding: '20px'
      },
      padding: {
        paddingTop: '40px',
      },
      field: {
        margin: theme.spacing(1),
        minWidth: 280,
      },
      button: {
        marginTop: theme.spacing(1),
      }
    }));
    const classes = useStyles();
    const history = useHistory();
    const validationSchema = Yup.object().shape({
      participant: Yup.array().of(
        Yup.object().shape({
          nom: Yup.string().required("Nom est obligatoire"),
          prenom: Yup.string().required("Prénom est obligatoire"),
          email: Yup.string().email("Email doit etre sous forme 'exemple@exemple.com'").required("Email est obligatoire"),
        })
      )
    });
  
    return (
        <div>
        <AppBar />
        <Menu value={5} />
        <Container className={classes.padding}>
        <Typography variant="h6">Choisir les participants</Typography>
        <br></br>
            <Formik
              initialValues={{
                participant: [
                  {
                    id: Math.random(),
                    nom: "",
                    prenom: "",
                    email: ""
                  }
                ]
              }}
              validationSchema={validationSchema}
              onSubmit={values => {
                console.log("onSubmit", JSON.stringify(values, null, 2));
                history.push('/evenements/commande')
              }}
            >
              {({ values, touched, errors, handleChange, handleBlur, isValid }) => (
                <Form noValidate autoComplete="off">
                  <FieldArray name="participant">
                    {({ push, remove }) => (
                      <div>
                        {values.participant.length > 0 ?
                          values.participant.map((p, index) => {
                            const nom = `participant[${index}].nom`;
                            const touchedNom = getIn(touched, nom);
                            const errorNom = getIn(errors, nom);

                            const prenom = `participant[${index}].prenom`;
                            const touchedPrenom = getIn(touched, prenom);
                            const errorPrenom = getIn(errors, prenom);

                            const email = `participant[${index}].email`;
                            const touchedEmail = getIn(touched, email);
                            const errorEmail = getIn(errors, email);

                            return (
                              <div key={p.id}>
                                <TextField
                                  className={classes.field}
                                  margin="normal"
                                  variant="outlined"
                                  label="Nom"
                                  name={nom}
                                  value={p.nom}
                                  required
                                  helperText={
                                    touchedNom && errorNom
                                      ? errorNom
                                      : ""
                                  }
                                  error={Boolean(touchedNom && errorNom)}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <TextField
                                  className={classes.field}
                                  margin="normal"
                                  variant="outlined"
                                  label="Prénom"
                                  name={prenom}
                                  value={p.prenom}
                                  required
                                  helperText={
                                    touchedPrenom && errorPrenom
                                      ? errorPrenom
                                      : ""
                                  }
                                  error={Boolean(touchedPrenom && errorPrenom)}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <TextField
                                  className={classes.field}
                                  margin="normal"
                                  variant="outlined"
                                  label="Email"
                                  name={email}
                                  value={p.email}
                                  required
                                  helperText={
                                    touchedEmail && errorEmail
                                      ? errorEmail
                                      : ""
                                  }
                                  error={Boolean(touchedEmail && errorEmail)}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <IconButton
                                  className={classes.button}
                                  margin="normal"
                                  type="button"
                                  color="secondary"
                                  variant="outlined"
                                  onClick={() => remove(index)}
                                >
                                  <DeleteIcon />
                                </IconButton>
                                <IconButton
                                  className={classes.button}
                                  type="button"
                                  variant="outlined"
                                  onClick={() =>
                                    push({ id: Math.random(), nom: "", prenom: "", email: "" })
                                  }
                                >
                                  <AddCircleIcon color="primary" />
                                </IconButton>
                              </div>
                            );
                          })
                          : <Button
                            className={classes.button}
                            type="button"
                            color="primary"
                            variant="outlined"
                            onClick={() =>
                              push({ id: Math.random(), nom: "", prenom: "", email: "" })
                            }
                          >
                            Ajouter un participant
                          </Button>
                        }
                      </div>
                    )}
                  </FieldArray>
                  <Divider style={{ marginTop: 20, marginBottom: 20 }} />


            <div className={classes.button}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={!isValid || values.participant.length === 0}
              >
                Confirmer les participants
              </Button>
            </div>
                </Form>
              )}
            </Formik>
        </Container>
      </div>
    );
}
export default Invite;