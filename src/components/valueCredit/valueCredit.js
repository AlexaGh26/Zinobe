import React from 'react';
import './valueCredit.scss';
import { AddNumberInput, SubtractNumberInput } from '../../state/actions/credit.action';
import { CONFIG } from '../../config';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const ValueCreditComponent = (props) => {
    const { valueInput } = props;
    const { DEFAULTCREDITVALUE, MINVALUE, MAXVALUE } = CONFIG;

    const AddValue = (value) => {

        if (value === MAXVALUE) {
            alert("El valor màximo es $ 1.000.000")
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
            <div className="value-credit__button" onClick={() => SubstractValue(valueInput)} >-</div>
            <input className="value-credit__input" type="number" readOnly={false} value={valueInput}  ></input>
            <div className="value-credit__button" onClick={() => AddValue(valueInput)} >+</div>
        </section >
    );
}
const mapStateToProps = ({ credit: { credit_info: { valueInput } } }) => ({
    valueInput,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ AddNumberInput, SubtractNumberInput }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ValueCreditComponent);


