import React from 'react';
import './Item.css';

const Item = ({id, nombre}) => {
    return (  
        
          <li className="producto txtHome">{id} - {nombre}</li>  
        
    )  
}
 
export default Item;