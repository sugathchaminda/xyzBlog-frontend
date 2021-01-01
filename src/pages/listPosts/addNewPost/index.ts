import { lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addPostStart } from '../../../Redux/listPosts/listPosts.actions';
import { selectGetAddPostStatus, selectGetAddPostResponse } from '../../../Redux/listPosts/listPosts.selectors';

const LazyContainer = lazy(() => import('./container'));

const mapStateToProps = createStructuredSelector({
  getAddPostStatus: selectGetAddPostStatus(),
  getAddPostResponse: selectGetAddPostResponse(),
});

const mapDispatchToProps = (dispatch: any) => ({
  addPostStartFunc: (data) => dispatch(addPostStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LazyContainer);
