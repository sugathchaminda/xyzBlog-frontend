import React, { useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SmartTagComponent } from './component';

interface Props extends RouteComponentProps {
  editPostDetailsStart: (request: object) => any;
  postDetailsStart: (request: object) => any;
  postDetailsReset: any;
  getEditPostStatus: boolean;
  getPostDetailsResponse: any,
  getPostDetailsStatus: boolean,
}

const Dashboard: React.FunctionComponent<Props> = ({
  editPostDetailsStart,
  getPostDetailsStatus,
  getPostDetailsResponse,
  getEditPostStatus,
  postDetailsStart,
  postDetailsReset,
}) => {
  const history = useHistory();
  const [postDetails, setPostDetails] = useState({});

  const editPostFunc = (property: any, postId: string) => {
    const values = {
      text: property.text,
      title: property.title,
      postId,
    };

    editPostDetailsStart(values);
  };

  useEffect(() => {
    if (getEditPostStatus) {
      history.push('/profile');
    }
  }, [getEditPostStatus]);

  useEffect(() => {
    if (getPostDetailsStatus) {
      setPostDetails(getPostDetailsResponse);
      postDetailsReset();
    }
  }, [getPostDetailsStatus, getPostDetailsResponse]);

  const getPostDetailsFunc = useCallback((postId) => {
    postDetailsStart({ postId });
  }, []);

  return (
    <div>
      <SmartTagComponent
        editPost={editPostFunc}
        getPostDetailsFunc={getPostDetailsFunc}
        postDetailsData={postDetails}
      />
    </div>
  );
};

export default Dashboard;
