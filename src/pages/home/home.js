import React, { useState } from 'react';
import './home.scss';
import LayoutTemplate from '../../templates/template';
import * as env from '../../environment';
import { InsertBaseMount } from '../../state/actions/credit.action';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const HomePage = (props) => {

    const { BASE_AMOUNT } = env[process.env.NODE_ENV];

    useState(() => {
        props.InsertBaseMount(BASE_AMOUNT);
    }, [])

    return (
        <LayoutTemplate {...props}>
            <section className="">Bienvenido !</section>
        </LayoutTemplate>
    );
}
const mapStateToProps = ({ credit }) => ({
    credit,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ InsertBaseMount }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

