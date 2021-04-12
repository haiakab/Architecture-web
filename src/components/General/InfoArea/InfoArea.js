import React, { Component } from 'react'
import './infoArea.css'

class InfoArea extends Component {
    constructor(props){
        super(props);
      }
    render() {
        return (
            <div className="infoArea row">
                <div className="col-12 col-lg-6 p-0">
                    <img src={this.props.item.img} class="img-fluid" alt="Responsive image"/>
                </div>

                <div className="col-12 col-lg-6 infoBox mt-4 pt-5 pl-2 pr-2">
                    <p className="mt-4">{this.props.item.info}</p>
                </div>
            </div>
        )
    }
}
export default InfoArea;