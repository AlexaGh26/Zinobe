import React from 'react';
import LayoutTemplate from '../../templates/template';
import './history.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TableComponent from '../../components/table/table';
import { ShowDataInRealTime } from '../../state/actions/credit.action';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const HistoryPage = (props) => {
    const { credit: { list } } = props
    // logic for the table component

    function createData(name, surname, identification, eMail, valueInput, approval) {
        return [
            { value: name },
            { value: surname },
            { value: identification },
            { value: eMail },
            { value: valueInput },
            { value: approval }];
    }
    const rows = list.map(({ name, surname, identification, eMail, valueInput, approval }) => {
        if (approval) {
            return createData(name, surname, identification, eMail, valueInput, 'Aceptado')
        }
    }).filter((item) => !!item)
    const rowsNotApproved = list.map(({ name, surname, identification, eMail, valueInput, approval }) => {
        if (!approval) {
            return createData(name, surname, identification, eMail, valueInput, 'Rechazado')
        }
    }).filter((item) => !!item)
    const columns = [
        { name: 'Nombre' },
        { name: 'Apellido' },
        { name: 'Identificacion' },
        { name: 'Mail' },
        { name: 'Valor credito' },
        { name: 'Estado' }];

    // Logic for the Tab component

    function a11yProps(index) {
        return {
            id: `nav-tab-${index}`,
            'aria-controls': `nav-tabpanel-${index}`,
        };
    }
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`nav-tabpanel-${index}`}
                aria-labelledby={`nav-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    function LinkTab(props) {
        return (
            <Tab
                component="a"
                onClick={(event) => {
                    event.preventDefault();
                }}
                {...props}
            />
        );
    }
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
    }));
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // end logic

    return (
        <LayoutTemplate {...props} >
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                    >
                        <LinkTab label=" Creditos Aprobados" href="/drafts" {...a11yProps(0)} />
                        <LinkTab label="Creditos Rechazados" href="/trash" {...a11yProps(1)} />

                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <h3 className="title_table" >Listado de creditos Aprobados:</h3>
                    {rows.length ? <TableComponent rows={rows} columns={columns}></TableComponent> : ''}

                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h3 className="title_table">Listado de creditos Rechazados:</h3>
                    {rowsNotApproved.length ? <TableComponent rows={rowsNotApproved} columns={columns}></TableComponent> : ''}
                </TabPanel>
            </div>

        </LayoutTemplate>
    );
}
// connect the Redux for HistoryPage

const mapStateToProps = ({ credit }) => ({
    credit,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ ShowDataInRealTime }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);

