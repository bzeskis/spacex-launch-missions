import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Link, withRouter } from 'react-router-dom'

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
	launch(flight_number: $flight_number) {
        flight_number
        mission_name
        launch_year
        launch_date_local
        launch_success
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
	    }
    }

`

function Launch(props) {
    let flight_number = parseInt(props.match.params.flight_number)
    const { loading, error, data } = useQuery(LAUNCH_QUERY, { variables: { flight_number } })

    if (error) return (<p>Error</p>)

    return (
        <>
            {loading ? <p>Loading...</p> : (
                <div>
                    <h1 className="display-4 my-3">{data.launch.mission_name}</h1>
                    <h4 className="mb-3">Launch Details</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Flight Number: {data.launch.flight_number}</li>
                        <li className="list-group-item">Launch Year: {data.launch.launch_year}</li>
                        <li className="list-group-item">Launch Successful:
                            <span className={data.launch.launch_success ? 'text-success' : 'text-danger'}>
                                {data.launch.launch_success ? 'Yes' : 'No'}
                            </span>
                        </li>
                    </ul>
                    <h4 className="my-3">Rocket Details</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Rocket ID: {data.launch.rocket.rocket_id}</li>
                        <li className="list-group-item">Rocket Name: {data.launch.rocket.rocket_name}</li>
                        <li className="list-group-item">Rocket Type: {data.launch.rocket.rocket_type}</li>
                    </ul>
                    <hr />
                    <Link to="/" className="btn btn-outline-secondary">Back</Link>
                </div>
            )}
        </>
    )
}

export default withRouter(Launch)