import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from'./Components/Navbar/Navbar'
import FloatingCart from './Components/FloatingCart/FloatingCart';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import Products from './Pages/Products/Products';
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase';
function App() {
  return (
    <Router>
      <Navbar />
      <FloatingCart />
      <Switch>
          <Route exact path ="/" Component={Home}/>
          <Route exact path ="/produits" Component={Products}/>
          <Route exact path ="/products:id" Component={ProductShowcase}/>
          <Route exact path ="/Contact" Component={Contact}/>
          <Route exact path ="/Shoppingcart" Component={ShoppingCart}/>
      </Switch>
    </Router>
  )
}

export default App;
