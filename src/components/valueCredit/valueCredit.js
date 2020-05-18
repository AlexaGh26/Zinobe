import React, { useEffect, useRef } from 'react';
import './valueCredit.scss';
import { AddNumberInput, SubtractNumberInput } from '../../state/actions/credit.action';
import { CONFIG } from '../../config';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const ValueCreditComponent = (props) => {
    const { valueInput, BaseMount, onCalculate } = props;
    const { DEFAULTCREDITVALUE, MINVALUE, MAXVALUE } = CONFIG;

    const AddValue = (value) => {
        if (value >= BaseMount) {
            alert("Ha superado el valor màximo")
        } else {
            props.AddNumberInput(DEFAULTCREDITVALUE)
        }
    }
    const SubstractValue = (value) => {
        if (value === MINVALUE) {
            alert("El valor minimo es $ 10.000")
        } else {
            props.SubtractNumberInput(DEFAULTCREDITVALUE)
        }
    }

    return (
        <section className="value-credit" >
            <div className="value-credit__button" onClick={() => { SubstractValue(valueInput); onCalculate() }} >-</div>
            <input className="value-credit__input" type="number" readOnly={false} value={valueInput}  ></input>
            <div className="value-credit__button" onClick={() => { AddValue(valueInput); onCalculate() }} >+</div>
        </section >
    );
}
const mapStateToProps = ({ credit: { BaseMount, credit_info: { valueInput } } }) => ({
    valueInput, BaseMount
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ AddNumberInput, SubtractNumberInput }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ValueCreditComponent);


