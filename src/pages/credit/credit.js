import React, { useState } from 'react';
import LayoutTemplate from '../../templates/template';
import './credit.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import ValueCreditComponent from '../../components/valueCredit/valueCredit';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    ShowDataInRealTime,
    AddNumberInput,
    InsertBaseMount,
    SubtractNumberInput,
    UpdateBaseMount,
    SaveDataRedux,
    InsertValueInput,
} from '../../state/actions/credit.action';
import * as env from '../../environment';

const CreditPage = (props) => {
    const { credit } = props;
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const { BASE_AMOUNT } = env[process.env.NODE_ENV];

    useState(() => {
        props.InsertBaseMount(BASE_AMOUNT)
        props.InsertValueInput(100000);

    }, [])

    return (
        <LayoutTemplate {...props}>
            <section className="credit">
                <form className="form" >
                    <div className="form__title">
                        <p className="form__title" >SOLICITUD DE CREDITO</p>
                    </div>
                    <div className="form__text">
                        <p>Ingrese el monto solicitado y la fecha de pago:</p>
                    </div>
                    <section className="form__container-input" >
                        <div className="form__inputs">
                            <TextField
                                onChange={(e) =>
                                    props.ShowDataInRealTime({ id: e.target.id, value: e.target.value })
                                }
                                required
                                id="name"
                                label="Nombres"
                                defaultValue=""
                                variant="outlined"
                            />
                        </div>
                        <div className="form__inputs">
                            <TextField
                                onChange={(e) =>
                                    props.ShowDataInRealTime({ id: e.target.id, value: e.target.value })
                                }
                                required
                                id="surname"
                                label="Apellidos"
                                defaultValue=""
                                variant="outlined"
                            />
                        </div>
                        <div className="form__inputs">
                            <TextField
                                onChange={(e) =>
                                    props.ShowDataInRealTime({ id: e.target.id, value: e.target.value })
                                }
                                required
                                id="identification"
                                label="Cedula"
                                defaultValue=""
                                variant="outlined"
                            />
                        </div>
                        <div className="form__inputs">
                            <TextField
                                onChange={(e) =>
                                    props.ShowDataInRealTime({ id: e.target.id, value: e.target.value })
                                }
                                required
                                id="eMail"
                                label="E-mail"
                                defaultValue=""
                                variant="outlined"
                            />
                        </div>
                    </section>
                    <div className="form__subtitle">
                        <p>Ingrese el monto solicitado y la fecha de pago:</p>
                    </div>
                    <section className="form__container-date-value">
                        <section className="form__container-little" >
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        onChange={(e) =>
                                            props.ShowDataInRealTime({ id: e.target.id, value: e.target.value })
                                        }
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="creditDate"
                                        label="Fecha de pagar"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </section>
                        <section className="form__container-little" >
                            <div className="form__input-value">
                                {credit ? <ValueCreditComponent
                                    onChange={(e) =>
                                        props.ShowDataInRealTime({
                                            id: e.target.id,
                                            value: props.credit.valueInput
                                        })
                                    }
                                    id="valueCredict" >
                                </ValueCreditComponent> : ""}
                            </div>
                        </section>
                    </section>
                    <div className="form__button">
                        <Button variant="contained" color="primary"
                            onClick={() => {
                                props.SaveDataRedux(props.credit.credit_info)
                                props.approval()
                            }}>
                            Enviar
                    </Button>
                    </div>
                </form>
            </section>
        </LayoutTemplate>
    );
}

const mapStateToProps = ({ credit }) => ({
    credit,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        ShowDataInRealTime,
        SubtractNumberInput,
        AddNumberInput,
        InsertBaseMount,
        UpdateBaseMount,
        SaveDataRedux,
        InsertValueInput,
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreditPage);

