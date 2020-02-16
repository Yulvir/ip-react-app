import App from 'next/app'
import React from 'react'
import Layout from '../components/layout/layout'
import withReduxStore from '../lib/with-redux-store'
import {Provider} from 'react-redux'

class MyApp extends App {
    render() {
        const {Component, pageProps, reduxStore} = this.props;
        return (

            <Provider store={reduxStore}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>

        )
    }
}

export default withReduxStore(MyApp)
