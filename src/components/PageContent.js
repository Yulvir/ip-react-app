import React, {Component} from 'react';
import AlertDialog from './Dialog';
import logo from "./assets/img/getinfoip.png";
import banner from "./assets/img/81AyedcV+vL._SY550_.jpg";
import {Provider} from "react-redux";
import store from "../js/store";
import SearchBarForm from "./SearchBar";
import {ConnectedResultsContent} from "./ResultsContent";
import {ConnectedGoogleMapContainer} from "./GoogleMap";

class PageContent extends Component {

    render() {
        return (
<div className="container-fluid">


            <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-info">
                            <h4 className="my-0 font-weight-lighter ">What is IP ?</h4>
                        </div>
                        <div className="card-body">

                            <h1>This is your content</h1>
                        </div>

                    </div>

            </div>

        </div>
        );
    }
}

export default PageContent
