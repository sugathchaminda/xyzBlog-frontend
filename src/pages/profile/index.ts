import { lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGetProfileStatus, selectGetProfileResponse } from '../../Redux/profile/profile.selectors';
import { selectGetDeletePostStatus, selectGetDeletePostResponse } from '../../Redux/listPosts/listPosts.selectors';
import { deletePostStart, editPostDetailsReset } from '../../Redux/listPosts/listPosts.actions';
import { getProfileStart } from '../../Redux/profile/profile.actions';

const LazyContainer = lazy(() => import('./container'));

const mapStateToProps = createStructuredSelector({
  getProfileStatus: selectGetProfileStatus(),
  getProfileResponse: selectGetProfileResponse(),
  getDeletePostStatus: selectGetDeletePostStatus(),
  getDeletePostResponse: selectGetDeletePostResponse(),
});

const mapDispatchToProps = (dispatch: any) => ({
  profileStart: () => dispatch(getProfileStart()),
  getDeletePostStart: (data) => dispatch(deletePostStart(data)),
  postDetailsReset: () => editPostDetailsReset(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LazyContainer);
