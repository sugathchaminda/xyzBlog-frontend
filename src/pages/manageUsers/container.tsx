import React, { useEffect, useState } from 'react';
import { ManageUserComponent } from './component';

interface Props extends RouteComponentProps {
  allUsersStart: () => any;
  getUsersStatus: boolean;
  getUsersResponse: any,
  assignAdminRoleStartFunc: (request: object) => any;
  updateUserStartFunc: (request: object) => any;
  getAssignAdminRoleStatus: boolean;
  getAssignAdminRoleResponse: any,
  getUpdateUserStatus : boolean;
  getUpdateUserResponse: (request: object) => any;
}

const Dashboard: React.FunctionComponent<Props> = ({
  allUsersStart,
  getUsersStatus,
  getUsersResponse,
  assignAdminRoleStartFunc,
  getAssignAdminRoleStatus,
  getUpdateUserStatus,
  updateUserStartFunc,
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
    if (getAssignAdminRoleStatus || getUpdateUserStatus) {
      allUsersStart();
    }
  }, [getAssignAdminRoleStatus, getUpdateUserStatus]);

  const assignAdminRoleFunc = (userId: string) => {
    assignAdminRoleStartFunc({ userId });
  };

  const updateUserFunc = (userId: string, status: string) => {
    updateUserStartFunc({ userId, status });
  };

  return (
    <div>
      <ManageUserComponent
        allUsersResponseData={allUsersResponse}
        assignAdminRole={assignAdminRoleFunc}
        updateUser={updateUserFunc}
      />
    </div>
  );
};

export default Dashboard;
