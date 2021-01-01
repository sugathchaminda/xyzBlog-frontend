import { lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signInStart } from '../../Redux/auth/auth.actions';
import {
  selectGetSignInStatus,
  selectGetSignInResponse,
} from '../../Redux/auth/auth.selectors';
import { selectGetIsFetching, selectGetGlobalError } from '../../Redux/global/global.selectors';

const LazyContainer = lazy(() => import('./container'));

const mapStateToProps = createStructuredSelector({
  getSignInStatus: selectGetSignInStatus(),
  getSignInResponse: selectGetSignInResponse(),
  error: selectGetGlobalError(),
  isFetching: selectGetIsFetching(),
});

const mapDispatchToProps = (dispatch: any) => ({
  signInStart: (data) => dispatch(signInStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LazyContainer);
