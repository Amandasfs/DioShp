/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;

