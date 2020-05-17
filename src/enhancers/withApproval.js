import React from 'react';

const withApproval = (Component) => {

    const WithAproval = () => {

        const approval = () => {
            const result = !!(Math.round(Math.random()))
            console.log(result)
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