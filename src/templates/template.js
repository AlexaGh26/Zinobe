import React from 'react';
import './template.scss';
import HeaderComponent from '../components/header/header';
import MenuComponent from '../components/menu/menu';
import ContentComponent from '../components/content/content';


const LayoutTemplate = (props) => {
    return (
        <main className="main">
            <HeaderComponent></HeaderComponent>
            <MenuComponent {...props}></MenuComponent>
            <ContentComponent>{props.children}</ContentComponent>
        </main>
    );
}

export default LayoutTemplate;