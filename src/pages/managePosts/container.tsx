import React, { useEffect, useCallback, useState } from 'react';
import { SmartTagComponent } from './component';

interface Props extends RouteComponentProps {
  getDeletePostStart: (request: object) => any;
  getDeletePostStatus: boolean;
  getDeletePostResponse: string;
  allPostsStart: () => any;
  getPostsStatus: boolean;
  getPostsResponse: any,
  postStatusStart: (request: object) => any;
  getChangePostStatus: boolean,
  getChangePostResponse: string,
}

const Dashboard: React.FunctionComponent<Props> = ({
  getPostsStatus,
  getChangePostStatus,
  getPostsResponse,
  allPostsStart,
  postStatusStart,
  getDeletePostStart,
  getDeletePostStatus,
}) => {
  const [allPostsResponse, setAllPostsResponse] = useState({});

  useEffect(() => {
    allPostsStart();
  }, [allPostsStart]);

  useEffect(() => {
    if (getPostsStatus) {
      setAllPostsResponse(getPostsResponse);
    }
  }, [getPostsStatus, getPostsResponse]);

  useEffect(() => {
    if (getChangePostStatus) {
      allPostsStart();
    }
  }, [getChangePostStatus]);

  useEffect(() => {
    if (getDeletePostStatus) {
      allPostsStart();
    }
  }, [getDeletePostStatus, allPostsStart]);

  const deletePostFunc = useCallback((toDeleteId) => {
    getDeletePostStart({ postId: toDeleteId });
  }, []);

  const changePostFunc = useCallback((status, postId) => {
    postStatusStart({ approve_status: status, postId });
  }, []);

  return (
    <div>
      <SmartTagComponent
        deletePostData={deletePostFunc}
        changePostData={changePostFunc}
        allPostsResponseData={allPostsResponse}
      />
    </div>
  );
};

export default Dashboard;
