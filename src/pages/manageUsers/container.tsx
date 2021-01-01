import React, { useEffect, useState } from 'react';
import { ManageUserComponent } from './component';

interface Props extends RouteComponentProps {
  allUsersStart: () => any;
  getUsersStatus: boolean;
  getUsersResponse: any,
  assignAdminRoleStartFunc: (request: object) => any;
  getAssignAdminRoleStatus: boolean;
  getAssignAdminRoleResponse: any,
}

const Dashboard: React.FunctionComponent<Props> = ({
  allUsersStart,
  getUsersStatus,
  getUsersResponse,
  assignAdminRoleStartFunc,
  getAssignAdminRoleStatus,
  getAssignAdminRoleResponse,
}) => {
  const [allUsersResponse, setAllUsersResponse] = useState({});

  useEffect(() => {
    allUsersStart();
  }, [allUsersStart]);

  useEffect(() => {
    if (getUsersStatus) {
      setAllUsersResponse(getUsersResponse);
    }
  }, [getUsersStatus, getUsersResponse]);

  useEffect(() => {
    if (getAssignAdminRoleStatus) {
      allUsersStart();
    }
  }, [getAssignAdminRoleStatus, getAssignAdminRoleResponse]);

  const assignAdminRoleFunc = (userId: string) => {
    assignAdminRoleStartFunc({ userId });
  };

  return (
    <div>
      <ManageUserComponent
        allUsersResponseData={allUsersResponse}
        assignAdminRole={assignAdminRoleFunc}
      />
    </div>
  );
};

export default Dashboard;
