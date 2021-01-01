import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SmartTagComponent } from './component';

interface Props extends RouteComponentProps {
  addPostStartFunc: (request: object) => any;
  getAddPostStatus: boolean;
  getPostsResponse: any,
}

const Dashboard: React.FunctionComponent<Props> = ({ addPostStartFunc, getAddPostStatus }) => {
  const history = useHistory();

  const addPostFunc = (property: any) => {
    const values = {
      text: property.text,
      title: property.title,
    };

    addPostStartFunc(values);
  };

  useEffect(() => {
    if (getAddPostStatus) {
      history.push('/list/posts');
    }
  }, [getAddPostStatus]);

  return (
    <div>
      <SmartTagComponent
        addPost={addPostFunc}
      />
    </div>
  );
};

export default Dashboard;
