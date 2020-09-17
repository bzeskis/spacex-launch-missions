import React from 'react'
import { useQuery, gql } from '@apollo/client'
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`

function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY)
    if (error) return <p>Error</p>;
    const loadingItem = <p>Loading missions...</p>

    return (
        <>
            <h1 className="display-4 my-5 mx-auto w-75 text-center">Launch Missions</h1>
            <MissionKey />
            {loading ? loadingItem :
                data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
        </>
    )
}

export default Launches
