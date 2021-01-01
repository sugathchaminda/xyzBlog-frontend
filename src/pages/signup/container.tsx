import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SignInComponent from './component';

interface Props extends RouteComponentProps {
  signUpStart: (request: object) => any;
  getSignInStatus: boolean;
  getGlobalNotify: string;
  readonly isFetching: boolean;
}

const Login: React.FunctionComponent<Props> = ({
  isFetching,
  signUpStart,
  getSignInStatus,
  getGlobalNotify,
}) => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (getSignInStatus) {
      history.push('/list/posts');
    }
  }, [getSignInStatus]);

  useEffect(() => {
    if (getGlobalNotify) {
      history.push('/');
    }
  }, [getGlobalNotify]);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const OnSignUpClick = () => {
    history.push('/');
  };

  const signUpFunc = (property: any) => {
    const values = {
      first_name: property.firstName,
      last_name: property.lastName,
      email: property.email,
      password: property.password,
    };

    signUpStart(values);
  };
  return (
    <div>
      <SignInComponent
        showPassword={showPassword}
        signUp={signUpFunc}
        handleClickShowPassword={onClickShowPassword}
        handleSignupClick={OnSignUpClick}
        history={history}
      />
      {isFetching && (
        <div>
          <div className="overlay" />
          <CircularProgress
            className="loading"
            disableShrink
            color="inherit"
          />
        </div>
      )}
    </div>
  );
};

export default Login;
