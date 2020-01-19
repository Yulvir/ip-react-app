import React  from 'react';
import {connect} from "react-redux";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import store from "../js/store";



const mapStateToProps = (state) => {
  return { locationObject: state };
};

class ClipboardIP extends React.Component {
    constructor(props){
    super(props);

    this.state = {
      ownIpItems: []
    };
    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched),
      // we will update local component state and force component to rerender
      // with new data.
      this.setState({
        ownIpItems: store.getState().ownIpInfo,
      });
    });

  }
  displayTitle = () => {
    return [this.state.ownIpItems].map((store, index) => {
      return  ([


           <div key={index} className="alert alert-light" role="alert">
                      <CopyToClipboard text={store.ownIp}
                                       onCopy={() => this.setState({copied: true})}>
                          <h2>Your ip is {store.ownIp}</h2>
                      </CopyToClipboard>
                  </div>

      ])

    })
  };
  render() {
    return (
      <div>

          {this.displayTitle()}

          {this.state.copied ? <span style={{color: 'red'}}>Copied</span> : null}

      </div>

    );
  }
}
export const ConnectedClipboardIP = connect(mapStateToProps)(ClipboardIP)
