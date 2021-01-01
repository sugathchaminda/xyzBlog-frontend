import React, { useEffect, useState } from 'react';
import { ManageUserComponent } from './component';

interface Props extends RouteComponentProps {
  allUsersStart: () => any;
  getUsersStatus: boolean;
  getUsersResponse: any,
}

const Dashboard: React.FunctionComponent<Props> = ({ allUsersStart, getUsersStatus, getUsersResponse }) => {
  const [allUsersResponse, setAllUsersResponse] = useState({});

  useEffect(() => {
    allUsersStart();
  }, [allUsersStart]);

  useEffect(() => {
    if (getUsersStatus) {
      setAllUsersResponse(getUsersResponse);
    }
  }, [getUsersStatus, getUsersResponse]);

  return (
    <div>
      <ManageUserComponent
        allUsersResponseData={allUsersResponse}
      />
    </div>
  );
};

export default Dashboard;
