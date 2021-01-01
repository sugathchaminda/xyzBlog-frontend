import React, { useEffect, useCallback, useState } from 'react';
import { SmartTagComponent } from './component';

interface Props extends RouteComponentProps {
  profileStart: () => any;
  getDeletePostStart: (request: object) => any;
  getProfileStatus: boolean;
  getProfileResponse: any;
  getDeletePostStatus: boolean;
  getDeletePostResponse: string;
}

const Dashboard: React.FunctionComponent<Props> = ({
  profileStart,
  getDeletePostStart,
  getProfileStatus,
  getDeletePostStatus,
  getProfileResponse,
}) => {
  const [profileResponse, setProfileResponse] = useState({});

  useEffect(() => {
    profileStart();
  }, [profileStart]);

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

  return (
    <div>
      <SmartTagComponent
        profileResponseData={profileResponse}
        deletePostData={deletePostFunc}
      />
    </div>
  );
};

export default Dashboard;
