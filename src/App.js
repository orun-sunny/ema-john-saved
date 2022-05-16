import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';

import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>

        <Routes>
          <Route exact path='/' element={<Shop />}>


          </Route>
          <Route exact path='shop' element={<Shop />}>


          </Route>
          <Route exact path="review" element={<OrderReview />}>
          </Route>

          <Route exact path="inventory" element={<Inventory />}>

          </Route>
          <Route exact path="*" element={<Notfound />}>
          </Route>




        </Routes>


      </BrowserRouter>



    </div>
  );
}

export default App;
