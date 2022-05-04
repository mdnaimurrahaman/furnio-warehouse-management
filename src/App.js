import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import ManageItems from './Pages/Home/ManageItems/ManageItems';
import AddITems from './Pages/Home/AddItems/AddITems';
import MyItems from './Pages/Home/MyItems/MyItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/addItems' element={<AddITems></AddITems>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
