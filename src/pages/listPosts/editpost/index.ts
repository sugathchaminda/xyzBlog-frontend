import { lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { editPostDetailsReset, editPostDetailsStart, getPostDetailsStart } from '../../../Redux/listPosts/listPosts.actions';
import { selectGetEditPostStatus, selectGetEditPostResponse, selectGetPostDetailsStatus, selectGetPostDetailsResponse } from '../../../Redux/listPosts/listPosts.selectors';

const LazyContainer = lazy(() => import('./container'));

const mapStateToProps = createStructuredSelector({
  getEditPostStatus: selectGetEditPostStatus(),
  getEditPostResponse: selectGetEditPostResponse(),
  getPostDetailsStatus: selectGetPostDetailsStatus(),
  getPostDetailsResponse: selectGetPostDetailsResponse(),
});

const mapDispatchToProps = (dispatch: any) => ({
  editPostDetailsStart: (data) => dispatch(editPostDetailsStart(data)),
  postDetailsStart: (data) => dispatch(getPostDetailsStart(data)),
  postDetailsReset: () => editPostDetailsReset(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LazyContainer);
