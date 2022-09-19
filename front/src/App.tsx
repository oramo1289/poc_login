import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useUserAuthContext } from './hooks/useUserAuthContext'

// pages & components
import Home from './container/Home'
import Hello from './container/Hello'
import Login from './container/Login'
import Signup from './container/Signup'
import Navbar from './components/NavBar'

//styles
import './App.css'

const App = (): JSX.Element => {
    const { state } = useUserAuthContext()
    const { user } = state
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="body">
                    <Routes>
                        <Route path="/" element={user ? <Home /> : <Hello />} />
                        <Route
                            path="/login"
                            element={!user ? <Login /> : <Navigate to={'/'} />}
                        />
                        <Route
                            path="/signup"
                            element={!user ? <Signup /> : <Navigate to={'/'} />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
