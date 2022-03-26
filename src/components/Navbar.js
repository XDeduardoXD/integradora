import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { startLogout } from "../actions/auth";
import './css/navbar.css';
import logo from './img/logo2.png';

export const Navbar = () => {
    const { email } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout())
    }
    return (
        <nav className="navbar navbar-expand-lg bg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home"><img src={logo} height="30px" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-black" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-black">
                        <li className="nav-item a text-black">
                            <NavLink className={({ isActive }) => 'nav-item' + "text-black" + (isActive ?
                                'active' : '')}
                                to='/home'>Dispensador</NavLink>
                        </li>
                        <li className="nav-item a text-black">
                            <NavLink className={({ isActive }) => 'nav-item' + "text-black" + (isActive ?
                                'active' : '')}
                                to='/acerca'>Acerca de</NavLink>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <span className="nav-item>">{email}</span>
                        <button onClick={handleLogout} className="btn btn-outline-success"><b>Cerar sesión</b></button>
                    </form>
                </div>
            </div>
        </nav>
    )
}