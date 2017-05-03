import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import store from '../store'
import IndexContainer from '../components/IndexPage/container'

class IndexPage extends React.Component {
  static getInitialProps ({ store, isServer }) {
    
    return {}
  }

  render () {
    return (
      <IndexContainer/>
    )
  }
}

export default withRedux(store)(IndexPage)
