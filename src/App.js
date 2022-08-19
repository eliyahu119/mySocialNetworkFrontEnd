import './App.css'
import MainPage from './components/MainPage'
import Login from './components/Login'
import HeadLine from './components/HeadLine'
import SignIn from './components/SignIn'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
    return (
        <>
            <HeadLine />
            <Routes>
                <Route exact path="/register" element={<SignIn />} />
                <Route exact path="/login" element={<Login />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </>
    )
}

export default App
