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
  signIn: (values: any) => void;
  handleClickShowPassword: () => void;
  showPassword: boolean;
  error: string;
  handleSignupClick: () => void;
  history: any;
}

const Login: React.FunctionComponent<Props> = ({
  signIn,
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
              initialValues={{ username: '', password: '' }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                signIn(values);
              }}
              validationSchema={Yup.object().shape({
                username: Yup.string()
                  .email('Invalid Email')
                  .required('User Name is required'),
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
                            identifier="username"
                            value={values.username}
                            onChange={handleChange}
                            type="text"
                            key="username-text-field"
                            autoFocus
                            fieldLabel="Email"
                            placeholder="Email"
                            // tslint:disable-next-line: radix
                            error={errors.username && touched.username}
                          />
                          <div>
                            {errors.username && touched.username && (
                              <FormHelperText
                                className="formHelperText"
                                id="my-helper-text"
                              >
                                {errors.username}
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
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="link mt-1" href="/signup">
                            Sign Up
                          </a>
                        </Grid>
                        <Grid xs={6} item className={classes.signInInputAlign}>
                          <Button
                            disabled={isSubmitting}
                            variant="contained"
                            onClick={handleSubmit}
                            label="Log In"
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
