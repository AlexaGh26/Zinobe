import React from 'react';
import './baseAmount.scss';


const BaseAmountComponent = (props) => (
    <section className="base-amount" >
        <section className="amount" >
            Monto base: {props.amount}
        </section>
    </section>
)
export default BaseAmountComponent;