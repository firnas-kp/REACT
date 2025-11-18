// import { RouterContextProvider } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Banner from './components/Banner';
// import Brands from './components/Brands';
// import Categories from './components/Categories';
// import Deals from './components/Deals';
// import Footer1 from './components/Footer1';
// import Navbar1 from './components/Navbar1';
// import Items from './react-keys/Items';
// import SimpleForm from './form/SimpleForm';
// import RealWorld from './react-keys/RealWorld';
// import Work from './react-keys/Work';
// import Navbar from './nested-routing/Navbar';
// import AddTodo from './functional-components/hooks/useReducer/AddTodo';
// import TodoContext, { TodoProvider } from './functional-components/hooks/useReducer/TodoContext';
// import { Children } from 'react';
// import { UserApiProvider } from './functional-components/hooks/useContext-Hook/dark&light-mode/user-list/UserApiContext';
// import UserList from './functional-components/hooks/useContext-Hook/dark&light-mode/user-list/UserList';
// import Home from './functional-components/hooks/useContext-Hook/dark&light-mode/Home';
// import { ThemeProvider } from './functional-components/hooks/useContext-Hook/dark&light-mode/ThemeContext';
// import { UserApiProvider } from './functional-components/hooks/useContext-Hook/dark&light-mode/user-list/UserApiContext';
// import Example2 from './functional-components/hooks/useEffect-Hook/Example2'
// import ToggleButton from './functional-components/hooks/useEffect-Hook/ToggleButton'
// import UseState from './functional-components/hooks/UseState'
// import RenderingLists from './embedding-expression/RenderingLists'
// import CallingFunction from './embedding-expression/CallingFunction'
// import Conditional from './embedding-expression/Conditional'
// import Basic from './functional-components/Basic'
// import UseState from './functional-components/hooks/useState/useState'
// import Timer from './functional-components/hooks/useEffect-Hook/Timer'
// import UserList from './functional-components/hooks/useEffect-Hook/UserList'
// import Props from './functional-components/Props'
// import State from './functional-components/state'
// import Example2 from './functional-components/hooks/useEffect-Hook/Example2'

import Player from "./functional-components/hooks/useRef/Player";

// import AxiosPost from "./axios/AxiosPost";

// import AxiosGet from "./axios/AxiosGet";
// import TodoApp from "./ToDo/TodoApp";

// import ProfileForm from "./form/ProfileForm";


// import Crud from "./local-storage/Crud";

// import Form from "./form/Form";



// import ProductsPage from "./component-pages/ProductsPage";
// import ProductCard from "./components/productCard";

// import About from "./nested-routing/pages/About";
// import Home from "./nested-routing/pages/Home";
// import Service from './nested-routing/pages/Service';
// import Design from './nested-routing/pages/services/Design';
// import WebDev from './nested-routing/pages/services/WebDev';
// import AppDev from './nested-routing/pages/services/AppDev';

// import { Route, Routes } from "react-router-dom";
// import Product from "./dynamic-routing/Product";
// import ProductDetailPage from "./dynamic-routing/ProductDetailPage";

// import { Link, Route, Routes } from "react-router-dom";
// import Home from "./react-router-dom/Home";
// import About from "./react-router-dom/About";

function App() {

  return (
    <>
      {/* ------------Embedding-Expression---------- */}
      {/* <Welcome /> */}
      {/* <CallingFunction/> */}
      {/* <Conditional/> */}
      {/* <RenderingLists/>*/}

      {/* ------------------functional componants--------------- */}
      {/* <Basic /> */}
      {/* <State/> */}
      {/* <Props/> */}

      {/* ---------Hooks & life cycle methods------- */}
      {/* <Timer/> */}
      {/* <UserList/> */}
      {/* <Example2/> */}
      {/* <UseState/> */}
      {/* <ToggleButton/> */}

      {/* -----useContext hook----- */}
      {/* <ThemeProvider> */}
      {/* <Home/> */}
      {/* </ThemeProvider> */}
      {/* <UserApiProvider>
        <UserList/>
      </UserApiProvider> */}

      {/* ----todo----
      <TodoContext>
        <TodoProvider/>
      </TodoContext> */}
      {/* <AddTodo/> */}

      {/* ----------react-router-dom--------- */}
    {/* 1.-----basic routing---- */}
      {/* <div>
        <nav>
          <Link to='/'>Home</Link><br />
          <Link to='/about'>About</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes> */}

    {/* 2. -----dynamic routing----- */}
    {/* <Routes>
      <Route path="/" element={<Product/>}/>
      <Route path="/products/:id" element={<ProductDetailPage/>}/>
    </Routes> */}

    {/* 3. -----nested routing----- */}
    {/* <Navbar/> */}
    {/* <Home/> */}
    {/* <About/> */}
    {/* <Navbar/> 
    <div className='container-app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/> */}

        {/* nested routes can be added here */}
        {/* <Route path='/service' element={<Service/>}>
        <Route path='web-development' element={<WebDev/>}/>
        <Route path='app-development' element={<AppDev/>}/>
        <Route path='design' element={<Design/>}/>
        </Route>
      </Routes>
    </div> */}

    {/* -------react keys------ */}
    {/* <Items/> */}
    {/* <RealWorld/> */}
    {/* <SimpleForm/> */}
    {/* <Work/> */}
    {/* <Form/> */}
    {/* <Crud/> */}
    {/* <ProfileForm/> */}
    {/* <ProductCard/> */}
    {/* <ProductsPage/> */}

    {/* <Navbar1/>
    <Banner/>
    <Categories/>
    <Deals/>
    <Brands/>
    <Footer1/> */}

    {/* <TodoApp/> */}

    {/* ------------form------------ */}
    {/* <AxiosGet/> */}
    {/* <AxiosPost/> */}

    <Player/>
    </>
  );
}

export default App


{/* --------------------------class componants------------- */ }

// import React, { Component } from 'react'
// import Basic from './class-components/Basic'
// import Counter from './class-components/Counter'
// import Mounting from './class-components/LifeCycleMethods/Mounting'
// import Updating from './class-components/LifeCycleMethods/Updating'
// import UnMounting from './class-components/LifeCycleMethods/UnMounting'
// import ButtonUnMount from './class-components/LifeCycleMethods/ButtonUnMount'

// export default class App extends Component {
//   render() {
//     return (
//       <>
{/* <Basic /> */ }
{/* <UsingProps name="firnas" />   */ }
{/* <Counter/> */ }
{/* <Mounting/> */ }
{/* <Updating/> */ }
{/* <UnMounting/> */ }
{/* <ButtonUnMount/>
      </>
    )
  }
} */}