import { GlobalStyle } from './global.styles';
// react related imports
import { Routes, Route } from 'react-router-dom';
// components imports
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Checkout from './pages/checkout/checkout.component';
import ShopPage from './pages/shop/shop.component';
import AdminPage from './pages/admin-page/admin-page.component';

function App() {
  return (
    <div>
    <GlobalStyle/>
      <Header />
      {/* Routes */}
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/checkout' element={<Checkout />} />
        <Route exact path='/shop/*' element={<ShopPage />} />
        <Route exact path='/admin' element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
