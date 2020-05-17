import React from 'react';
import '../../pages/home/home.scss';
import './menu.scss';


const MenuComponent = (props) => (
    <nav className="main__menu">
        <ul className="menu" >
            <li className="menu__item" onClick={() => props.history.push("/Home")}>Home</li >
            <li className="menu__item" onClick={() => props.history.push("/Credit")}>Solicitar Crèdito</li >
            <li className="menu__item" onClick={() => props.history.push("/History")}>Historial</li >
        </ul>
    </nav >
)
export default MenuComponent;