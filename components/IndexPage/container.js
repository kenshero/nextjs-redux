import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IndexPage from './components';
import actions from './actions';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.indexpage.count,
    products: state.indexpage.products,
    productName: state.indexpage.productName,
    productPrice: state.indexpage.productPrice,
    productCategory: state.indexpage.productCategory
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

