import React, { Component } from 'react';


class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

<footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
        <div className="col-12 col-md">
            <img className="mb-2" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="24"
                 height="24"/>
        </div>

        <div className="col-6 col-lg-12 text-right">
        </div>
    </div>
</footer>

    );
  }
}

export default Footer


