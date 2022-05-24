/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';

export default combineReducers({
    products,
    cart
})

