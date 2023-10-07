import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,RouterProvider, Route,} from 'react-router-dom';
import { store } from './components/redux/Store';
import { Provider } from 'react-redux';
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import Contact from './components/Contact'
import Login from './components/Login';
import SignUp from './components/SignUp';
import NewProducts from './components/NewProducts';
import Menu from './components/Menu';
import Cart from './components/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About/>}></Route>;
        <Route path='/menu' element={<Menu/>}></Route>;
        <Route path='/menu/:filterby' element={<Support/>}></Route>;
        <Route path='/contact' element={<Contact/>}></Route>;
        <Route path='/login' element={<Login/>}></Route>;
        <Route path='/signup' element={<SignUp/>}></Route>;
        <Route path="/newproduct" element={<NewProducts />} />
        <Route path="/cart" element ={<Cart/>}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
