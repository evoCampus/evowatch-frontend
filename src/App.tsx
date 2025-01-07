import { useState } from "react";
import "./App.css";
import { ApiClient } from "./app/apiClient.ts";
import Sidebar from "./components/sidebar/Sidebar.tsx";

function App() {
  const [userName, setUserName] = useState("");

  console.log(userName);

  const addUser = () => {
    apiClient.userService.addUser({
      normalName: userName,
      email: "test",
      nickname: userName,
      password: "string",
      imageUrl: "http://localhost:5092",
    });
  };

  let apiClient = new ApiClient();

  return (
    <>
      <Sidebar />
    </>
  );
}

export default App;
