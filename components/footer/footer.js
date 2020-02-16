import React from 'react';
import AlertDialog from '../dialog/dialog';


export default () => {

        return (

            <div className="d-flex flex-column flex-md-row p-3 px-md-4 mb-3 bg-info border-bottom box-shadow">

                <nav className="my-2 my-md-0 mr-md-3 mr-auto">
                    <a className="btn btn-default" href="https://www.maxmind.com">MaxMind</a>
                </nav>

                <nav className="my-2 my-md-0 mr-md-3 ml-auto">

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
