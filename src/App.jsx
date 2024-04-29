import { useState } from 'react'

import './App.css'
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
<Signup/>
{/* <Signin/> */}
</div>
    
    </>
  )
}

export default App
