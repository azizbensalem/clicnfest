import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '../../Components/Header/Navbar';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { Formik } from "formik";
import * as Yup from "yup";
import { FormHelperText } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import cover from "../../Images/event.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 250,
    },
  },
  content: {
    textAlign: "center",
    paddingTop: "40px",
  },
  img: {
    width: "150px",
    borderRadius: "360px",
    height: "150px",
  },
  image: {
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom: "20px",
  },
  card: {
    maxWidth: "600px",
    margin: "auto",
    marginBottom: "40px",
  },
  cover: {
    height: "50vh",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${cover})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  title: {
    paddingTop: "19vh",
    fontWeight: "bold",
    color: "white",
  },
}));
export const Show = () => {
    const classes = useStyles();
    const history = useHistory();
     return(
        <div>
                <AppBar />
                <div className={classes.cover}>
                <Typography variant="h3" className={classes.title}>MON PROFIL</Typography>
                 </div>
        <div style={{ display: 'flow-root' }}>
        <Formik
                    initialValues={{
                        nom: "Hello World",
                        prenom: "Hello World",
                        email: "foulenelfouleni@gmail.com",
                        tel: "Hello World",
                        img: "",
                        proffession: "Hello World",
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            history.push('/monprofil/modifier');
                            setSubmitting(false);
                        }, 500);
                    }}
                    validationSchema={Yup.object().shape({
                        nom: Yup.string().required("Ce champ est obligatoire."),
                        prenom: Yup.string().required("Ce champ est obligatoire."),
                        email: Yup.string()
                            .required("Ce champ est obligatoire.")
                            .email("Email"),
                        tel: Yup.string().required("Ce champ est obligatoire."),
                    })}
                >
                    {props => {
                        const {
                        values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = props;
                        return (
                            <form
                                className={classes.root}
                                noValidate
                                autoComplete="off"
                                onSubmit={handleSubmit}
                            >
                                <div className={classes.image}>
                                    {values.img == ""
                                        ? <img
                                            className={classes.img}
                                            src='https://kwsmdigital.com/wp-content/uploads/2012/08/Facebook-Blank-Photo.jpg' />
                                        : <img
                                            className={classes.img}
                                            src={values.img} />}                                       
                                    <Typography variant="h5">{values.prenom} {values.nom}</Typography>
                                    <div style={{ padding: '10px' }}>
                                    <input
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span">
                                            Changer la photo de profil
                                        </Button>
                                    </label>
                                    </div>
                                </div>
                                <Card className={classes.card} variant="outlined">
                                <CardContent>
                                <div className={classes.content}>
                                    <TextField
                                        error={errors.nom && touched.nom && true}
                                        name="nom"
                                        label="Nom"
                                        type="text"
                                        value={values.nom}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        helperText={
                                            errors.nom &&
                                            touched.nom && (
                                                <FormHelperText error>
                                                    {errors.nom}
                                                </FormHelperText>
                                            )
                                        }
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                    <TextField
                                        error={errors.prenom && touched.prenom && true}
                                        name="prenom"
                                        label="Prénom"
                                        type="text"
                                        value={values.prenom}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        helperText={
                                            errors.prenom &&
                                            touched.prenom && (
                                                <FormHelperText error>
                                                    {errors.prenom}
                                                </FormHelperText>
                                            )
                                        }
                                        InputProps={{
                                         readOnly: true,
                                        }}
                                    />
                                    <br></br>
                                    <TextField
                                        error={errors.email && touched.email && true}
                                        name="email"
                                        label="Email"
                                        type="text"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        helperText={
                                            errors.email &&
                                            touched.email && (
                                                <FormHelperText error>
                                                    {errors.email}
                                                </FormHelperText>
                                            )
                                        }
                                        InputProps={{
                                        readOnly: true,
                                        }}
                                    />
                                    <TextField
                                        error={errors.tel && touched.tel && true}
                                        name="tel"
                                        label="Téléphone"
                                        type="text"
                                        value={values.tel}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        helperText={
                                            errors.tel &&
                                            touched.tel && (
                                                <FormHelperText error>
                                                    {errors.tel}
                                                </FormHelperText>
                                            )
                                        }
                                        InputProps={{
                                        readOnly: true,
                                        }}
                                    />
                                    <TextField
                                        error={errors.proffession && touched.proffession && true}
                                        name="proffession"
                                        label="Proffession"
                                        type="text"
                                        value={values.proffession}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant="outlined"
                                        helperText={
                                            errors.proffession &&
                                            touched.proffession && (
                                                <FormHelperText error>
                                                    {errors.proffession}
                                                </FormHelperText>
                                            )
                                        }
                                        InputProps={{
                                        readOnly: true,
                                        }}
                                    />
                                    </div>
                                    </CardContent>
                                    <div style={{ textAlign: "center" , marginBottom: "20px"}}>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        color="primary"
                                        variant="contained"
                                        style={{ margin: '5px' }}
                                    >
                                        Modifier
                                    </Button>
                                    <Button
                                            color="primary"
                                            variant="contained"
                                            style={{ margin: '5px' }}
                                            onClick={() => history.push('/monprofil/password')}
                                    >
                                        Changer mot de passe
                                    </Button>
                                </div>
                         </Card>
                        </form>
                        
                );
            }}
                </Formik>
            </div>
         </div>
        );
}

