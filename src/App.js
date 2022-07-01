import { GlobalStyle } from './global.styles';
// react related imports
import { Routes, Route } from 'react-router-dom';
// components imports
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Checkout from './pages/checkout/checkout.component';

function App() {
  return (
    <div>
    <GlobalStyle/>
      <Header />
      {/* Routes */}
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
