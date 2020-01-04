import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    renderCampsite(campsite) {
        return (
            <div>
                <Card>
                     <CardImg top src={campsite.image} alt={campsite.name} />
                     <CardBody>
                         <CardTitle>{campsite.name}</CardTitle>
                         <CardText>{campsite.description}</CardText>
                     </CardBody>
                </Card>
            </div>
        );
    }

    render() {
        console.log("Campsite: ",this.props.campsite);
        if (this.props.campsite) {
            return (
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                </div>
            );

        } 
        return (
                <div>
                    I have no campsite.
                </div>
        );
        
        
    }
}

export default CampsiteInfo;