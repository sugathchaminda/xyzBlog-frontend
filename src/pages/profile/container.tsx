import React, { useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SmartTagComponent } from './component';

interface Props extends RouteComponentProps {
  profileStart: () => any;
  postDetailsReset: () => any;
  getDeletePostStart: (request: object) => any;
  getProfileStatus: boolean;
  getProfileResponse: any;
  getDeletePostStatus: boolean;
  getDeletePostResponse: string;
}

const Dashboard: React.FunctionComponent<Props> = ({
  profileStart,
  getDeletePostStart,
  postDetailsReset,
  getProfileStatus,
  getDeletePostStatus,
  getProfileResponse,
}) => {
  const history = useHistory();
  const [profileResponse, setProfileResponse] = useState({});

  useEffect(() => {
    profileStart();
  }, [profileStart]);

  useEffect(() => {
    postDetailsReset();
  }, [postDetailsReset]);

  useEffect(() => {
    if (getProfileStatus) {
      setProfileResponse(getProfileResponse);
    }
  }, [getProfileStatus, getProfileResponse]);

  useEffect(() => {
    if (getDeletePostStatus) {
      profileStart();
    }
  }, [getDeletePostStatus, profileStart]);

  const deletePostFunc = useCallback((toDeleteId) => {
    getDeletePostStart({ postId: toDeleteId });
  }, []);

  const onEditPost = useCallback((postId) => {
    postDetailsReset();
    history.push(`/edit/post/postId=${postId}`);
  }, []);

  return (
    <div>
      <SmartTagComponent
        profileResponseData={profileResponse}
        deletePostData={deletePostFunc}
        onEditPost={onEditPost}
      />
    </div>
  );
};

export default Dashboard;
