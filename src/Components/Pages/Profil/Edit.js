import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { useHistory, Redirect } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
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
        height: "150px"
    },
    image: {
        textAlign: "center",
        paddingTop: "40px",
    },
    input: {
        display: 'none',
    },
}));

export default function Show() {
    const classes = useStyles();
    return (
        <div>
            <Formik
                initialValues={{
                    nom: "Hello World",
                    prenom: "Hello World",
                    email: "foulenelfouleni@gmail.com",
                    tel: "Hello World",
                    img: ""
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        window.location.reload();
                        setSubmitting(false);
                        console.log('hello');
                    }, 500);
                }}
                validationSchema={Yup.object().shape({
                    nom: Yup.string().required("Ce champ est obligatoire."),
                    prenom: Yup.string().required("Ce champ est obligatoire."),
                    username: Yup.string().required(
                        "Ce champ est obligatoire."
                    ),
                    email: Yup.string()
                        .required("Ce champ est obligatoire.")
                        .email("Email"),
                    tel: Yup.string().required("Ce champ est obligatoire."),
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
                                src={values.img} />
                                }
                                <div>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        value={values.img}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span">
                                            Changer la photo de profil
                                        </Button>
                                    </label>
                                </div>
                        </div>
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
                            />
                            <br></br>
                            <div style={{ textAlign: "center" , marginBottom: '10px' }}>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    color="primary"
                                    variant="contained"
                                >
                                    Confirmer
                                </Button>
                            </div>
                            </div>
                        </form>
                    );
                }}
            </Formik>        
        </div> 
    );
}