import { useState } from 'react'
import './App.css'
import { ApiClient } from './app/apiClient.ts'

function App() {
  const [userName, setUserName] = useState("");


  console.log(userName);

  const addUser = () => {
    apiClient.userService.addUser({
      normalName: userName,
      email: "test",
      nickname: userName,
      password: "string",
      imageUrl: "http://localhost:5092"
    });
  }

  let apiClient = new ApiClient();

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-300">evoWatch</h1>
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
