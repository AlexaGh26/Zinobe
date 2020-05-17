import React from 'react';
import '../../pages/home/home.scss';

const ContentComponent = (props) => {
    return (
        <section className="main__content">{props.children}</section>
    );
}
export default ContentComponent;