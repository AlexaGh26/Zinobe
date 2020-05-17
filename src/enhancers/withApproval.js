import React from 'react';

const withApproval = (Component) => {

    const WithAproval = () => {

        const approval = () => {
            const result = !!(Math.round(Math.random()))
            console.log(result)
            if (result) {
                alert('Su solicitud fue aprobada con èxito')
            } else {
                alert('Su solicitud fue negada, verifique su moto disponible o llamenos al +57(1)6331409')
            }
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