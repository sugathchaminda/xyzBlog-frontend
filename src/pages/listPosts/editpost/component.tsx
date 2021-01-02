import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from 'shared/form/button';
import React, { useEffect, useState } from 'react';
import { FormHelperText } from '@material-ui/core';
import TextField from 'shared/form/textField';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import customstyles from './styles.css';

const useStyles = makeStyles(() => createStyles({
  root: {
    flexGrow: 1,
    paddingBottom: '100px',
  },
  table: {
    width: '100%',
    minWidth: '100%',
  },
  subHeaderContainer: {
    width: '437px',
    height: '53px',
  },
  dashboardHeader: {
    color: '#702C75',
    fontSize: '32px',
  },
  form: { maxWidth: '800px' },
  title: {
    textAlign: 'left',
  },
}));

interface Props {
  editPost: (values: any, postId: string) => void;
  getPostDetailsFunc: (id: string) => void;
  postDetailsData: any;
}
interface ParamTypes {
  postId: string;
}

const SmartTag: React.FunctionComponent<Props> = ({ editPost, getPostDetailsFunc, postDetailsData }) => {
  const classes = useStyles();
  const params = useParams<ParamTypes>();
  const { postId } = params;

  const splitTokenValue = postId.split('=')[1];

  useEffect(() => {
    getPostDetailsFunc(splitTokenValue);
  }, [getPostDetailsFunc]);

  const [initialValues, setInitialValues] = useState({
    title: '',
    text: '',
  });

  useEffect(() => {
    if (postDetailsData) {
      setInitialValues({
        title: postDetailsData.title,
        text: postDetailsData.text,
      });
    }
  }, [postDetailsData]);

  return (
    <Grid container style={customstyles} className="p1" direction="column">
      <Grid item container xs={12} justify="center" alignItems="center">
        <Grid
          item
          xs={12}
          container
          spacing={1}
          className={classes.subHeaderContainer}
        >
          <h3 className={classes.dashboardHeader}>Edit Post</h3>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          className="main-content"
        >
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              editPost(values, splitTokenValue);
            }}
            validationSchema={Yup.object().shape({
              title: Yup.string()
                .required('Please enter title.'),
              text: Yup.string()
                .required('Please enter description'),
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
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <form
                  onSubmit={handleSubmit}
                  method="post"
                  className={classes.form}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit();
                      editPost(values, splitTokenValue);
                    }
                  }}
                >
                  <Grid item container>
                    <Grid
                      xs={12}
                      item
                    >
                      <Grid item xs={12} style={{ textAlign: 'left' }}>
                        <TextField
                          identifier="title"
                          value={values.title || ''}
                          onChange={handleChange}
                          type="title"
                          key="title-text-field"
                          autoFocus
                          fieldLabel="Title"
                          placeholder="Enter Title"
                          error={errors.title && touched.title}
                        />
                        {errors.title && touched.title && (
                          <FormHelperText className="formHelperText">
                            {errors.title}
                          </FormHelperText>
                        )}
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                    >
                      <Grid item style={{ textAlign: 'left' }}>
                        <TextField
                          identifier="text"
                          key="text-text-field"
                          type="text"
                          value={values.text || ''}
                          onChange={handleChange}
                          fieldLabel="Description"
                          error={errors.text && touched.text}
                          placeholder="Enter Description"
                        />
                        {errors.text && touched.text && (
                          <FormHelperText className="formHelperText">
                            {errors.text}
                          </FormHelperText>
                        )}
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                    >
                      <Grid item>
                        <Button
                          disabled={isSubmitting}
                          variant="contained"
                          onClick={handleSubmit}
                          label="Save"
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
  );
};

export const SmartTagComponent = React.memo(SmartTag);
