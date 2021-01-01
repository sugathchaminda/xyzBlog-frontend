import * as Yup from 'yup';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PasswordTextField from 'shared/form/passwordTextField';
import { FormHelperText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Formik } from 'formik';
import React from 'react';
import Button from 'shared/form/button';
import TextField from 'shared/form/textField';
import logoImage from 'assets/images/xyz.jpeg';
import customstyles from './styles.css';

const useStyles = makeStyles(() => createStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: '2rem',
    lineHeight: '2.75rem',
    fontWeight: 'normal',
    fontFamily: 'Lato',
    color: '#fff',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: '1.25rem',
    color: 'Black',
    fontFamily: 'Nanum Gothic',
    fontWeight: 'lighter',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: '2rem',
    lineHeight: '1.5rem',
    fontWeight: 'normal',
    fontFamily: 'Lato',
    color: '#fff',
  },
  signInGrid: {
    marginTop: '0.675rem',
  },
  signUpBtn: {
    margin: '5px',
  },
  signInLink: {
    textAlign: 'left',
    marginTop: '20px',
  },
  signInInputAlign: {
    textAlign: 'center',
  },
}));

interface Props {
  signUp: (values: any) => void;
  handleClickShowPassword: () => void;
  showPassword: boolean;
  handleSignupClick: () => void;
  history: any;
}

const Login: React.FunctionComponent<Props> = ({
  signUp,
  showPassword,
  handleClickShowPassword,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container style={customstyles} direction="column">
        <Grid item container xs={12} justify="center" alignItems="center">
          <Grid item xs={5} container direction="column" alignItems="center">
            <img src={logoImage} alt="logo" className="headerImage" style={{ width: '100%' }} />
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="column"
            alignItems="center"
          >
            <Grid item />
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="column"
            alignItems="center"
            className="main-content"
          >
            <Formik
              initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                signUp(values);
              }}
              validationSchema={Yup.object().shape({
                firstName: Yup.string()
                  .required('First Name is required'),
                lastName: Yup.string()
                  .required('Last Name is required'),
                email: Yup.string()
                  .required('Email is required')
                  .email('Invalid email'),
                password: Yup.string()
                  .required('Password is required'),
              })}
            >
              {(props) => {
                const {
                  touched,
                  errors,
                  isSubmitting,
                  handleSubmit,
                  values,
                  handleChange,
                } = props;
                return (
                  <form
                    role="presentation"
                    onSubmit={handleSubmit}
                    method="post"
                    className="form resetForm"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit();
                      }
                    }}
                  >
                    <Grid item container>
                      <Grid
                        item
                        xs={12}
                        container
                        direction="column"
                        spacing={3}
                        justify="center"
                        alignItems="stretch"
                      >
                        <Grid item xs={12} className={classes.signInInputAlign}>
                          <TextField
                            identifier="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            type="text"
                            key="firstName-text-field"
                            autoFocus
                            fieldLabel="First Name"
                            placeholder="First Name"
                            // tslint:disable-next-line: radix
                            error={errors.firstName && touched.firstName}
                          />
                          <div>
                            {errors.firstName && touched.firstName && (
                              <FormHelperText
                                className="formHelperText"
                                id="my-helper-text"
                              >
                                {errors.firstName}
                              </FormHelperText>
                            )}
                          </div>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        container
                        direction="column"
                        spacing={3}
                        justify="center"
                        alignItems="stretch"
                      >
                        <Grid item xs={12} className={classes.signInInputAlign}>
                          <TextField
                            identifier="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            type="text"
                            key="lastName-text-field"
                            autoFocus
                            fieldLabel="Last Name"
                            placeholder="Last Name"
                            // tslint:disable-next-line: radix
                            error={errors.lastName && touched.lastName}
                          />
                          <div>
                            {errors.lastName && touched.lastName && (
                              <FormHelperText
                                className="formHelperText"
                                id="my-helper-text"
                              >
                                {errors.lastName}
                              </FormHelperText>
                            )}
                          </div>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        container
                        direction="column"
                        spacing={3}
                        justify="center"
                        alignItems="stretch"
                      >
                        <Grid item xs={12} className={classes.signInInputAlign}>
                          <TextField
                            identifier="email"
                            value={values.email}
                            onChange={handleChange}
                            type="text"
                            key="email-text-field"
                            autoFocus
                            fieldLabel="Email"
                            placeholder="Email"
                            // tslint:disable-next-line: radix
                            error={errors.email && touched.email}
                          />
                          <div>
                            {errors.email && touched.email && (
                              <FormHelperText
                                className="formHelperText"
                                id="my-helper-text"
                              >
                                {errors.email}
                              </FormHelperText>
                            )}
                          </div>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        container
                        direction="column"
                        spacing={3}
                        alignItems="stretch"
                        justify="center"
                      >
                        <Grid item className={classes.signInInputAlign}>
                          <PasswordTextField
                            key="password-text-field"
                            identifier="password"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange}
                            handleClickShowPassword={handleClickShowPassword}
                            showPassword={showPassword}
                            fieldLabel="Password"
                            error={errors.password && touched.password}
                            placeholder="Password"
                          />
                          <div>
                            {errors.password && touched.password && (
                              <FormHelperText
                                className="formHelperText"
                                id="my-helper-text"
                              >
                                {errors.password}
                              </FormHelperText>
                            )}
                          </div>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        container
                        direction="row"
                        spacing={3}
                        alignItems="stretch"
                        justify="center"
                      >
                        <Grid xs={6} item className={classes.signInLink}>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <br />
                          <a className="link mt-1" href="/">
                            Login
                          </a>
                        </Grid>
                        <Grid xs={6} item className={classes.signInInputAlign}>
                          <Button
                            disabled={isSubmitting}
                            variant="contained"
                            onClick={handleSubmit}
                            label="Sign Up"
                            className="primary"
                            width="100%"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </form>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
