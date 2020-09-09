import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Burguer.css';


export function Burguer({to, activeClassName}){
    return(
        <NavLink to={to} className="ellipsis" activeClassName={activeClassName} >
            <FontAwesomeIcon icon={faEllipsisH} />
        </NavLink>
    )
}