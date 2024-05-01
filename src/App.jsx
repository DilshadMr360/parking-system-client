import { Routes, Route, Navigate } from "react-router-dom"
import NumberPlateDetection from "./pages/NumberPlateDetection";
import MainMenu from "./pages/MainMenu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { createContext } from "react";


export const UserContext = createContext(null)

function App() {

  const [token, setToken] = useState('LOADING');
  const [loading, setLoading] = useState(true);
  const ProtectedRoute = ({ condition, redirect, children }) => {
    console.log(condition);
    if (!condition) {
      return <Navigate to={redirect} replace />;
    }
    return children;
  };

  useEffect(() => {
    setToken(localStorage.getItem('authToken'))
  }, []);

  useEffect(() => {

    if(token != 'LOADING')
      localStorage.setItem('authToken', token)
  }, [token]);

  if(token == 'LOADING')
    return null

  return (
    <div>
      <UserContext.Provider value={{ token, setToken }}>

        <Routes>

          <Route path='/' element={
            <ProtectedRoute condition={token ? false : true}  redirect='/numberplate'>
              <MainMenu />
            </ProtectedRoute>
          }></Route>

          <Route path='/numberplate' element={
            <ProtectedRoute condition={token ? true : false}  redirect='/login'>
              <NumberPlateDetection />
            </ProtectedRoute>
          }></Route>

          <Route path='/login' element={
            <ProtectedRoute condition={token ? false : true} redirect='/numberplate'>
              <Login />
            </ProtectedRoute>
          }></Route>

          <Route path='/register' element={
            <ProtectedRoute condition={token ? false : true}  redirect='/numberplate'>
              <Register />
            </ProtectedRoute>
          }></Route>


        </Routes>
      </UserContext.Provider>

    </div>
  );
}

export default App;
