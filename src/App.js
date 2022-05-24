/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
import {BrowserRouter as Router} from 'reacts-router-dom';
import {Provider} from 'react-redux';
import store from './components/Store/';
import Routes from './routes';
import {Container} from '@material-ui/core/';
import Header from './components/Header';

const App = () => {
    const localCart = JSON.parse(localStorage.getItem('dishopping: cart'))
    if(localCart !== null)
    {
        store.dispatch({type: 'CHANGE_CART', localCart})
    }
    
    return(
        <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <Routes />
        </Router>
      </Container> 
    </Provider> 
   )
}
export default App;

