import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useUserAuthContext } from '../hooks/useUserAuthContext'

import './NavBar.css'

const Navbar = (): JSX.Element => {
    const { logout } = useLogout()
    const { state } = useUserAuthContext()
    const { user } = state
    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <nav className="container__items">
                    {user && (
                        <div className="logout">
                            <span>{user.name}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div className="login">
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar
