import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListUserComponent from "./components/ListUserComponent.tsx";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import UserComponent from "./components/UserComponent";
import LoginPage from "./components/LoginPage.tsx";

function App() {

  return (
    <>
        <Router>
            <HeaderComponent />
                <Routes>
                    <Route path="/login" element={ <LoginPage /> } />
                    {/* http://localhost:3000 */}
                    <Route path='/project' element = { <ListUserComponent /> } />
                    {/* http://localhost:3000/add-user */}
                    <Route path='/add-user' element = { <UserComponent /> } />
                </Routes>
            <FooterComponent />
        </Router>
    </>
  )
}

export default App
