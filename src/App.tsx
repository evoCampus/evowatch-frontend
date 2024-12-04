import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ApiClient } from './app/apiClient.ts'

function App() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");


  console.log(userName);

  const addUser = () => {

    apiClient.userService.addUser({
      normalName: userName,
      email: "test",
      nickname: userName,
      password: "string"
    });
  }

  let apiClient = new ApiClient();

  return (
    <>
      <h1>evoWatch</h1>
      <div className="card">

        <input type='text' value={userName} onChange={(e) => {setUserName(e.target.value)} }></input>

        <button onClick={addUser}>
          Register
        </button>
      </div>
    </>
  )
}

export default App
