import React from 'react';
import { NavLink } from 'react-router-dom';

export function ItemNav(props){
    return(
        <NavLink to={props.href} activeClassName={props.activeClass}>
            {props.texto}
        </NavLink>
    );
}

/*

href='/productos' activeClass='activeLink' texto='productos'

NavLink to="/productos" activeClassName="activeLink">
            Productos
        </NavLink>

<NavLink to="/ingresar" activeClassName="activeLink">
                    Ingresar
                </NavLink>



*/