import React from 'react'
import spinner from './Loading_Spinner.gif'

const LoadingSpinner = () => {

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
            <img src={spinner} alt="loading" />
        </div>
    )

}

export default LoadingSpinner