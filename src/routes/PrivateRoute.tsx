import { Redirect, Route } from 'react-router-dom';

import api from 'api/client';
import React from 'react';
import Main from 'wrappers/mainContainer';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = api.getToken();
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) => (token ? (
        <Main>
          <Component {...props} />
        </Main>
      ) : (
        <Redirect to="/signin" />
      ))}
    />
  );
};

export default PrivateRoute;
