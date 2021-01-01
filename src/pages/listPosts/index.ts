import { lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGetPostsStatus, selectGetPostsResponse } from '../../Redux/listPosts/listPosts.selectors';
import { getAllPostsStart } from '../../Redux/listPosts/listPosts.actions';

const LazyContainer = lazy(() => import('./container'));

const mapStateToProps = createStructuredSelector({
  getPostsStatus: selectGetPostsStatus(),
  getPostsResponse: selectGetPostsResponse(),

});

const mapDispatchToProps = (dispatch: any) => ({
  allPostsStart: () => dispatch(getAllPostsStart()),

});

export default connect(mapStateToProps, mapDispatchToProps)(LazyContainer);
