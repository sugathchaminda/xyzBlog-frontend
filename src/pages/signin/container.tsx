import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SignInComponent from './component';

interface Props extends RouteComponentProps {
  signInStart: (request: object) => any;
  getSignInStatus: boolean;
  getSignInResponse: any;
  readonly isFetching: boolean;
  readonly error: string;
}

const Login: React.FunctionComponent<Props> = ({
  isFetching,
  signInStart,
  getSignInStatus,
  error,
}) => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (getSignInStatus) {
      history.push('/list/posts');
    }
  }, [getSignInStatus]);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const OnSignUpClick = () => {
    history.push('/');
  };

  const signInFunc = (property: any) => {
    const values = {
      email: property.username,
      password: property.password,
    };

    signInStart(values);
  };
  return (
    <div>
      <SignInComponent
        showPassword={showPassword}
        signIn={signInFunc}
        handleClickShowPassword={onClickShowPassword}
        handleSignupClick={OnSignUpClick}
        error={error}
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
