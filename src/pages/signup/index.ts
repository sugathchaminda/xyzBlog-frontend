import { lazy } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signUpStart } from '../../Redux/auth/auth.actions';
import {
  selectGetSignInStatus,
  selectGetSignInResponse,
} from '../../Redux/auth/auth.selectors';
import { selectGetIsFetching, selectGetGlobalNotify } from '../../Redux/global/global.selectors';

const LazyContainer = lazy(() => import('./container'));

const mapStateToProps = createStructuredSelector({
  getSignInStatus: selectGetSignInStatus(),
  getSignInResponse: selectGetSignInResponse(),
  getGlobalNotify: selectGetGlobalNotify(),
  isFetching: selectGetIsFetching(),
});

const mapDispatchToProps = (dispatch: any) => ({
  signUpStart: (data) => dispatch(signUpStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LazyContainer);
