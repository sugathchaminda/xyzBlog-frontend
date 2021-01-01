import { Redirect, Route } from 'react-router-dom';

import api from 'api/client';
import React from 'react';
import Main from 'wrappers/mainContainer';

const AdminRoute = ({ component: Component, ...rest }) => {
  const token = api.getToken();
  const userRole = api.getUserRole();
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) => (token && userRole === 'Admin' ? (
        <Main>
          <Component {...props} />
        </Main>
      ) : (
        <Redirect to="/list/posts" />
      ))}
    />
  );
};

export default AdminRoute;
