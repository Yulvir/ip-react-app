import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import {fetchMyIp, fetchMyIpAndGetInfoIp} from "../actions/actions-creators";

class Index extends React.Component {
  static  async getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    await reduxStore.dispatch(fetchMyIpAndGetInfoIp());

    return {}
  }


  render() {
    return (
        <div>
    <App/>
        </div>
    )
  }
}

export default connect()(Index)
