import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

function LaunchItem({ launch: {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success } }) {

    let upcomingMission = false;
    if (new Date(launch_date_local) > new Date()) {
        upcomingMission = true
    }
    return (
        <div className="card card-body mb-3">
            <div className="row align-items-center">
                <div className="col-md-9 d-flex flex-column justify-content-end">
                    <h4 className="my-1">
                        <span className={upcomingMission ? '' : (launch_success ? ' text-success' : 'text-danger')}>
                            {mission_name}
                        </span>
                    </h4>
                    <p className="my-1">
                        <Moment format="YYYY-MM-DD HH:mm">
                            {launch_date_local}
                        </Moment>
                    </p>
                    {upcomingMission ? 'Upcoming mission' : ''}
                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${flight_number}`} className="btn btn-outline-secondary">Launch Details</Link>
                </div>
            </div>
        </div>
    )
}

export default LaunchItem
