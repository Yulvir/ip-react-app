import Link from 'next/link'
import React from "react";
import PopNews from '../components/pop-news'
import {getNews, saveClientRequest} from "../actions/actions-creators";
class News extends React.Component {


    static async getInitialProps({reduxStore, req}) {
        await saveClientRequest(req, reduxStore);
        await reduxStore.dispatch(getNews("best phones in market"));
        return {}
    }

    render() {

        return (
 <div className="container-fluid">


            <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-info">
                            <h4 className="my-0 font-weight-lighter ">The last tech news in this week</h4>
                        </div>
                        <div className="card-body">
                        <PopNews/>
                        </div>

                    </div>

            </div>

        </div>

        )
    }

}

export default News;