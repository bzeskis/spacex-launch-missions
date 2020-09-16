import React from 'react'

function MissionKey() {
    return (
        <div className="my-3">
            <p>
                <span className="px-3 mr-2 bg-success" /> = Success
            </p>
            <p>
                <span className="px-3 mr-2 bg-danger" /> = Failed
            </p>
            <p>
                <span className="px-3 mr-2 bg-dark" /> = Upcoming
            </p>
        </div>
    )
}

export default MissionKey
