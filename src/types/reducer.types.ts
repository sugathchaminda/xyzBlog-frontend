export interface IAuthReducer {
  token?: string;
  user?: any;
  error?: string;
}

export interface IGetAllPostsReducer {
  getAllPostsSuccessStatus: boolean,
  getAllPostsError: string,
  getAllPosts: object,
}

export interface IGetAllUsersReducer {
  getAllUsersStatus: boolean,
  getAllUsersError: string,
  getAllUsers: object,
}

export interface IGetProfileReducer {
  getProfileSuccessStatus: boolean,
  getProfileError: string,
  getProfile: object,
}

export interface IGetUserStatReducer {
  getUserStatSuccessStatus: boolean,
  getUserStatErrorS: string,
  getUserStat: object,
}
