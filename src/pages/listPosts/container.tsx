import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ListPostComponent } from './component';

interface Props extends RouteComponentProps {
  allPostsStart: () => any;
  getPostsStatus: boolean;
  getPostsResponse: any,
}

const Dashboard: React.FunctionComponent<Props> = ({ allPostsStart, getPostsStatus, getPostsResponse }) => {
  const history = useHistory();
  const [allPostsResponse, setAllPostsResponse] = useState({});

  useEffect(() => {
    allPostsStart();
  }, [allPostsStart]);

  useEffect(() => {
    if (getPostsStatus) {
      setAllPostsResponse(getPostsResponse);
    }
  }, [getPostsStatus, getPostsResponse]);

  return (
    <div>
      <ListPostComponent
        allPostsResponseData={allPostsResponse}
        history={history}
      />
    </div>
  );
};

export default Dashboard;
