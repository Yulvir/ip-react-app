import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import uuid from 'react-uuid'

class RecommendedSubnetConfiguration extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.recommendedConfiguration);
    }


    displayRecommendedSubnets = () => {
        return (
            this.props.recommendedConfiguration.map((item, i) => {
                return <div style={{marginTop: "5%"}}>
                    <ul >
                        <h2>Subnet {i}</h2>
                        <li key={uuid()} className="list-group-item d-flex justify-content-between align-items-center">
                            Ip Start
                            <h4><span className="badge badge-primary badge-pill">{item.ipLowStr}</span></h4>
                        </li>
                        <li key={uuid()} className="list-group-item d-flex justify-content-between align-items-center">
                            Ip End
                            <h4><span className="badge badge-primary badge-pill">{item.ipHighStr}</span></h4>
                        </li><li key={uuid()} className="list-group-item d-flex justify-content-between align-items-center">
                            Inverted Mask
                            <h4><span className="badge badge-primary badge-pill">{item.invertedMaskStr}</span></h4>
                        </li><li key={uuid()} className="list-group-item d-flex justify-content-between align-items-center">
                            Prefix Mask
                            <h4><span className="badge badge-primary badge-pill">{item.prefixMaskStr}</span></h4>
                        </li>
                    </ul>
                </div>
            })
        )
    };

    render() {
        return (
            <div>
                {this.displayRecommendedSubnets()}
            </div>
        );
    }
}

export default RecommendedSubnetConfiguration;