import { useEffect, useState } from 'react'
import './App.css'
import './components/Homepage'
// import Homepage from './components/Homepage'
import Homepage from './components/Homepage'
import Login from './components/login'
import Signup from './components/Signup'
import Todos from './components/Todos'

function App() {

  const [todos, setTodos] = useState([])
  const TASKS = "https://random-data-api.com/api/v2/appliances?size=9"

  useEffect(() => {
    fetch(TASKS).then(response => response.json())
    .then(data => {
      setTodos(data)
    })
  }, [])

  return (
    <div>
      <Homepage />
      <Login />
      <Signup />
      <Todos todos={todos}/>
    </div>
  )
}

export default App
