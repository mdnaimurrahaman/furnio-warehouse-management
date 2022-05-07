import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import ManageItems from './Pages/ManageItems/ManageItems';
import AddITems from './Pages/Home/AddItems/AddITems';
import MyItems from './Pages/Home/MyItems/MyItems';
import Login from '../../furnio-minimal-design/src/Pages/Auth/Login/Login';
import Signup from '../../furnio-minimal-design/src/Pages/Auth/Signup/Signup';
import NotFound from '../../furnio-minimal-design/src/Pages/Shared/NotFound/NotFound';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import RequireAuth from '../src/Pages/Auth/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manageItems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/addItems' element={
          <RequireAuth>
            <AddITems></AddITems>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/item/:itemId' element={
        <RequireAuth>
          <ItemDetail></ItemDetail>
        </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
