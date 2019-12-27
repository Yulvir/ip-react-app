import React, {Component} from 'react';
import AlertDialog from './Dialog';

class Footer extends Component {

    render() {
        return (

            <div className="d-flex flex-column flex-md-row p-3 px-md-4 mb-3 bg-info border-bottom box-shadow">

                <nav className="my-2 my-md-0 mr-md-3 mr-auto">
                    <a className="btn btn-default" href="https://www.maxmind.com">MaxMind</a>
                </nav>

                <nav className="my-2 my-md-0 mr-md-3 ml-auto">

                    <a className="btn btn-default" href="#">TERMS</a>

                    <AlertDialog textButton={"Team"}
                                 title={"TEAM MEMBERS"}
                                 textContent={"Cresko:"}/>

                    <AlertDialog textButton={"Contact"}
                                 title={"CONTACT INFORMATION"}
                                 textContent={"We will answer as soon as possible"}/>

                </nav>

            </div>

        );
    }
}

export default Footer
