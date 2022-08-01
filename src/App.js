import { GlobalStyle } from './global.styles';
// react related imports
import { Routes, Route, Navigate } from 'react-router-dom';
// components imports
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Checkout from './pages/checkout/checkout.component';
import ShopPage from './pages/shop/shop.component';
import AdminPage from './pages/admin-page/admin-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { checkUserSession } from './redux/user/user.actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { selectCurrentUser, selectCurrentUserId, selectAdminId } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import Footer from './components/footer/footer.component';

function App({ 
  checkUserSession, currentUser, adminId, currentUserId 
}) {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
  return (
    <div>
    <GlobalStyle/>
      <Header />
      {/* Routes */}
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/signin' element={ currentUser? <Navigate to='/' /> : <SignInAndSignUpPage />  } />
        <Route exact path='/checkout' element={<Checkout />} />
        <Route exact path='/shop/*' element={<ShopPage />} />
        <Route exact path='/admin' element={
          adminId === currentUserId?
            <AdminPage />
          : <Navigate to='/' />
        } />
      </Routes>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  adminId: selectAdminId,
  currentUserId: selectCurrentUserId
})

const mapDispatchToProps = (dispatch) => {
  return({
    checkUserSession: () => {
      return(dispatch(checkUserSession()))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
