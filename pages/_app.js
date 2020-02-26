import App from 'next/app'
import React from 'react'
import Layout from '../components/layout/layout'
import withReduxStore from '../lib/with-redux-store'
import {Provider} from 'react-redux'

class MyApp extends App {
    render() {
        const {Component, pageProps, reduxStore} = this.props;
        return (
            <Layout>
                <Provider store={reduxStore}>

                    <Component {...pageProps} />
                </Provider>
            </Layout>

        )
    }
}

export default withReduxStore(MyApp)
