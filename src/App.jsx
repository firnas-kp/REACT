import './App.css'
import { UserApiProvider } from './functional-components/hooks/useContext-Hook/dark&light-mode/user-list/UserApiContext';
import UserList from './functional-components/hooks/useContext-Hook/dark&light-mode/user-list/UserList';
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
      {/* <ThemeProvider>
      <Home/>
      </ThemeProvider> */}
      <UserApiProvider>
        <UserList/>
      </UserApiProvider>

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
