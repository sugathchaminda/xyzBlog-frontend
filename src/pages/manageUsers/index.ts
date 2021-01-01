import { lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectGetUsersStatus,
  selectGetUsersResponse,
} from '../../Redux/manageUsers/manageUsers.selectors';
import { getAllUsersStart } from '../../Redux/manageUsers/manageUsers.actions';

const LazyContainer = lazy(() => import('./container'));

const mapStateToProps = createStructuredSelector({
  getUsersStatus: selectGetUsersStatus(),
  getUsersResponse: selectGetUsersResponse(),
});

const mapDispatchToProps = (dispatch: any) => ({
  allUsersStart: () => dispatch(getAllUsersStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LazyContainer);
