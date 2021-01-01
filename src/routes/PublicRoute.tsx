import { Redirect, Route } from 'react-router-dom';
import api from 'api/client';
import React from 'react';
import MainFrontContainer from 'wrappers/mainFrontContainer';

const PublicRoute = ({ component: Component, ...rest }) => {
  const token = api.getToken();

  return (
    <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) => (token ? (
        <Redirect to="/list/posts" />
      ) : (
        <MainFrontContainer>
          <Component {...props} />
        </MainFrontContainer>
      ))}
    />
  );
};

export default PublicRoute;
