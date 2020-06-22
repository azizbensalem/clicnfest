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
        paddingBottom: "20px",
    },
    card: {
        maxWidth: '600px',
        margin: 'auto',
        marginBottom: '40px',
    },
    cover: {
        height: '50vh',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://www.ucb.ac.uk/content/images/courses/hospitality-tourism-events/events-management-3.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    title: {
        paddingTop: '19vh',
        fontWeight: 'bold',
        color: 'white',
    },
}));
export const Password = () => {
    const classes = useStyles();
    return (
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
                       pwd: "",
                       confirmedpwd: "",
                       img: "",
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            window.location.replace('clicnfest#/monprofil')
                            setSubmitting(false);
                        }, 500);
                    }}
                    validationSchema={Yup.object().shape({
                        pwd : Yup.string().required("Ce champ est obligatoire."),
                        confirmedpwd : Yup.string().required("Ce champ est obligatoire."),
                    })}
                >
                    {props => {
                        const {
                            values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
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
                                </div>
                                <Card className={classes.card} variant="outlined">
                                    <CardContent>
                                        <div className={classes.content}>
                                            <TextField
                                                error={errors.pwd && touched.pwd && true}
                                                name="pwd"
                                                label="Mot de passe"
                                                type="text"
                                                value={values.pwd}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                variant="outlined"
                                                helperText={
                                                    errors.pwd &&
                                                    touched.pwd && (
                                                        <FormHelperText error>
                                                            {errors.pwd}
                                                        </FormHelperText>
                                                    )
                                                }
                                            />
                                            <TextField
                                                error={errors.confirmedpwd && touched.confirmedpwd && true}
                                                name="confirmedpwd"
                                                label="Confirmer le mot de passe"
                                                type="text"
                                                value={values.confirmedpwd}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                variant="outlined"
                                                helperText={
                                                    errors.confirmedpwd &&
                                                    touched.confirmedpwd && (
                                                        <FormHelperText error>
                                                            {errors.confirmedpwd}
                                                        </FormHelperText>
                                                    )
                                                }
                                            />
                                            <br></br>
                                        </div>
                                    </CardContent>
                                    <div style={{ textAlign: "center", marginBottom: "20px" }}>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            color="primary"
                                            variant="contained"
                                            style={{ backgroundColor: '#4caf50', color: 'white', margin: '5px' }}
                                        >
                                            Confirmer
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

