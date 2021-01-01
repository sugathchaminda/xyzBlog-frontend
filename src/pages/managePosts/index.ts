import { lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectGetDeletePostStatus,
  selectGetDeletePostResponse,
  selectGetPostsAdminStatus,
  selectGetPostsAdminResponse,
  selectGetChangePostStatus,
  selectGetChangePostResponse,
} from '../../Redux/listPosts/listPosts.selectors';
import { deletePostStart, getAllPostsAdminStart, changePostStatusStart } from '../../Redux/listPosts/listPosts.actions';
import { getProfileStart } from '../../Redux/profile/profile.actions';

const LazyContainer = lazy(() => import('./container'));

const mapStateToProps = createStructuredSelector({
  getDeletePostStatus: selectGetDeletePostStatus(),
  getDeletePostResponse: selectGetDeletePostResponse(),
  getPostsStatus: selectGetPostsAdminStatus(),
  getPostsResponse: selectGetPostsAdminResponse(),
  getChangePostStatus: selectGetChangePostStatus(),
  getChangePostResponse: selectGetChangePostResponse(),
});

const mapDispatchToProps = (dispatch: any) => ({
  profileStart: () => dispatch(getProfileStart()),
  getDeletePostStart: (data) => dispatch(deletePostStart(data)),
  allPostsStart: () => dispatch(getAllPostsAdminStart()),
  postStatusStart: (data) => dispatch(changePostStatusStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LazyContainer);
