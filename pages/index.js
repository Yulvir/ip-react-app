import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import {fetchMyIp, fetchMyIpAndGetInfoIp, setMyIpAndGetInfoIp} from "../actions/actions-creators";

class Index extends React.Component {
  static  async getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    // const host = req.headers["host"];
    // console.log(host);
    // if(host.includes("localhost")){
    //   await  reduxStore.dispatch(fetchMyIpAndGetInfoIp())
    // } else {
    //     await reduxStore.dispatch(setMyIpAndGetInfoIp(host));
    // }

    await  reduxStore.dispatch(fetchMyIpAndGetInfoIp());
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
