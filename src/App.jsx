// import './App.css'
// import RenderingLists from './embedding-expression/RenderingLists'
// import CallingFunction from './embedding-expression/CallingFunction'
// import Conditional from './embedding-expression/Conditional'

// function App() {

// return (
// <>
{/* ------------Embedding-Expression---------- */ }
{/* <Welcome /> */ }
{/* <CallingFunction/> */ }
{/* <Conditional/> */ }
{/* <RenderingLists/>*/ }
// </>
//   )
// }

// export default App


{/* --------------------------class componants------------- */ }

import React, { Component } from 'react'
import Basic from './class-components/Basic'
import Counter from './class-components/Counter'
import Mounting from './class-components/LifeCycleMethods/Mounting'
import Updating from './class-components/LifeCycleMethods/Updating'
import UnMounting from './class-components/LifeCycleMethods/UnMounting'
import ButtonUnMount from './class-components/LifeCycleMethods/ButtonUnMount'

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Basic /> */}
        {/* <UsingProps name="firnas" />   */}
        {/* <Counter/> */}
        {/* <Mounting/> */}
        {/* <Updating/> */}
        {/* <UnMounting/> */}
        <ButtonUnMount/>
      </>
    )
  }
}
