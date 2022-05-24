/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';

const Item = ({ name, details }) => {
    return(
        <ListItem>
            <ListItemText
                primary={name}
                secondary={details}
            />
        </ListItem>
    )
}
export default Item;
