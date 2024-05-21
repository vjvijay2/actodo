
import Header from "./components/Header";
import Card from "./components/Card";
import Todoform from "./components/Todoform";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";
function App(){
  const [users, setUsers] = useState(
      [{
          username: "aa",
          password: "123"
      }]
  )
  return(
  <div>
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login users={users} setUsers={setUsers}/>} ></Route>
          <Route path='/signup' element={<Signup users={users} setUsers={setUsers}/>}></Route>
          <Route path='/landing' element={<Landing/>}></Route>
      </Routes>
  </BrowserRouter>
  </div>
  )
}
export default App 
