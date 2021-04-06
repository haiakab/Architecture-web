import React, { Component } from 'react'

import './Card.css'

class ContactUsCard extends React.Component {
    constructor(props){
        super(props);
      }
    render() {
        return (
            <div class="card carditem text-center rounded  col-md-3 col-sm-12 mr-2 txtFont">
                <div dangerouslySetInnerHTML={{__html:this.props.item.txt}}></div>
            </div>
        )
    }
}

export default ContactUsCard;
