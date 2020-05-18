import React from 'react';
import '../../pages/home/home.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BaseAmountComponent from '../baseAmount/baseAmount';
import { CONFIG } from '../../config'

const HeaderComponent = (props) => {

    const messageZero = () => {
        const message = `Su saldo disponible es : ${CONFIG.ZERO}`
        return (
            <section className="base-amount" >
                <section className="amount" >
                    {message}
                </section>
            </section>
        );
    }


    return (< header className="main__header" >

        {props.credit.BaseMount ? <BaseAmountComponent amount={props.credit.BaseMount}></BaseAmountComponent> :
            messageZero()}
    </header >)
}
const mapStateToProps = ({ credit }) => ({
    credit,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
