import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IndexPage from './components';
import actions from './actions';

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const IndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)

export default IndexContainer

