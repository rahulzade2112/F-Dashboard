import { useState } from 'react'

import './App.css'
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
  <Header/>
<Signup/>
<Signin/>
</div>
    
    </>
  )
}

export default App
