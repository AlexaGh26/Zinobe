import React, { useState } from 'react';


const withApproval = (Component) => {

    const WithAproval = () => {

        const approval = () => {
            const result = !!(Math.round(Math.random()))
            return (result)
        }
        return (
            <Component approval={approval} ></Component>
        )
    }
    return (
        WithAproval
    )

}

export default withApproval;

