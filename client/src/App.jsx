import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import CreateWorkspace from "./pages/CreateWorkspace";
import PrivateRoute from "./components/privateRoute";

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/sign-in" element={ <SignIn/>}/>
    <Route path="/sign-up" element={ <SignUp/>}/>
    <Route element={<PrivateRoute/>}>   
    <Route path="/dashboard" element={ <Dashboard/>}/>
    <Route path="createworkspace" element={<CreateWorkspace/>}/>   
    <Route path="/profile" element={<Profile/>}/>
    </Route>
  </Routes>
  </BrowserRouter>;
}
