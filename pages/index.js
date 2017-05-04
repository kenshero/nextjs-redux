import React from 'react'
import { Provider } from 'react-redux'

import { initStore, reducers } from '../store'
import IndexContainer from '../components/IndexPage/container'


export default class IndexPage extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducers, {}, isServer)
    return { initialState: store.getState(), isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(reducers, props.initialState, props.isServer)
  }

  render () {
    return (
      <Provider store={this.store}>
        <IndexContainer />
      </Provider>
    )
  }
}
