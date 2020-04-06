import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import Edit from './Edit';
import { Typography, Button } from '@material-ui/core';
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
        paddingBottom: "40px",
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

}));
export default function Show() {
    const classes = useStyles();
    const [state, setState] = React.useState(true);
    const modifier = () => {
        setState(false);
    }
    const history = useHistory();

    return(
        <div>
        {state ? <Formik
                    initialValues={{
                        nom: "Hello World",
                        prenom: "Hello World",
                        username: "Hello World",
                        email: "foulenelfouleni@gmail.com",
                        tel: "Hello World",
                        pwd: "Hello World",
                        confirmpwd: "Hello World",
                        img: ""
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log(values);
                            setSubmitting(false);
                            modifier();
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
                                    }                                    <Typography variant="h5">Foulen el fouleni</Typography>
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
                                        InputProps={{
                                        readOnly: true,
                                         }}
                                    />
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
                                    <br></br>
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
                                        InputProps={{
                                        readOnly: true,
                                        }}
                                    />
                                    <br></br>
                                    <div style={{ textAlign: "center" }}>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        color="primary"
                                        variant="contained"
                                    >
                                        Modifier
                                    </Button>
                                </div>
                            </div>
                        </form>
                );
            }}
                </Formik>  : <Edit/> }
        </div>
    );
}