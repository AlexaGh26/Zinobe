import React from 'react';
import LayoutTemplate from '../../templates/template';
import './history.scss';

const HistoryPage = (props) => {
    return (
        <LayoutTemplate {...props} >
            <section className="history">
                Historial
            </section>
        </LayoutTemplate>
    );
}

export default HistoryPage;