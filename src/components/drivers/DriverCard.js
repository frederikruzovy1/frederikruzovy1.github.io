import React, { Component } from 'react';

export default class DriverCard extends Component {
    state = {
        driver: '',
        familyName: '',
        givenName: '',
        position: '',
        permamentNumber: '',
        points: '',
        code: ''
    };

    render() {
        const familyName = this.props.familyName;
        const position = this.props.position;
        const points = this.props.points;
        const code = this.props.code

        return (
            <div className="col-md-4 col-sm-6 my-3 container">
                {/* <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{position}</h5>
                        <a href="#" className="btn btn-primary">{familyName}</a>
                        <div className="card-img-wrap d-flex justify-content-center">
                            <div className="card-img" id={code}></div>
                        </div>
                        <p className="card-text mb-2">{points} points</p>
                    </div>
                </div> */}
                <div class="info-card">
                    <div class="img-box">
                        <div className="card-img" id={code}></div>
                        <h3>{familyName}</h3>
                    </div>
                    <div class="content">
                    <p className="mb-2">{points} points</p>
                    </div>
                </div>
            </div>
        )
    }
}
