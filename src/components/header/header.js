import React from 'react';
import '../../pages/home/home.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BaseAmountComponent from '../baseAmount/baseAmount';

const HeaderComponent = (props) => {
    return (< header className="main__header" >

        {props.credit.BaseMount ? <BaseAmountComponent amount={props.credit.BaseMount}></BaseAmountComponent> : ''}
    </header >)
}
const mapStateToProps = ({ credit }) => ({
    credit,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
