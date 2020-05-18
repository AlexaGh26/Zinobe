import React from 'react';
import './baseAmount.scss';


const BaseAmountComponent = (props) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })

    return (
        <section className="base-amount" >
            <section className="amount" >
                Monto disponible: {formatter.format(props.amount)}
            </section>
        </section>
    )
}
export default BaseAmountComponent;