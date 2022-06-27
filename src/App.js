import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

//With v6 it looks for exact matches, noneed to add exact

//Redirect is now Navigate
//<Navigate replace to='/welcome' /> => replace the current page

//useNavigate replace useHistory
//navigate('/welcome', {replace: true})
//replace redirect instead of replace

//Prompt doesn't exist

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          {/*<Routes> instead of switch*/}
          <Route path='/' exact>
            {/* <Route path='/welcome' element={<Welcome />} */}
            <Redirect to='/welcome' />
          </Route>
          <Route path="/welcome">
            <Welcome />
            {/* <Route path='/new-user' element={<p>Welcome, new-user</p>} */}
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
        {/* </Routes>  */}
      </main>
    </div>
  );
}

export default App;
