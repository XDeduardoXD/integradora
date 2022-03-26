import { useDispatch, useSelector } from "react-redux"
import { startLoginEmailPassword } from "../actions/auth"
import { useForm } from "../hooks/useForm"
import './css/login.css';
import logo from './img/logo.png';
export const LoginPage = () => {
    const dispatch = useDispatch()
    const {loading, msgError} = useSelector(state => state.ui)
    const [formvalues, handleInputChange] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = formvalues

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(startLoginEmailPassword(email, password))
    }

    return (
        <div className="backgroundLogin">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="caja">
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-4 d-none d-md-block">
                                    <img
                                        src={logo}
                                        alt="login form"
                                        className="img-fluid h-100"
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-light">
                                        <form>
                                            <h5 className="fw-normal mb-3 pb-0 text-light">INICIAR SESIÓN</h5>

                                            <div className="form-outline mb-0 text-light">
                                                <input onChange={handleInputChange} name='email' value={email} type="email" id="form2Example17" className="form-control form-control-lg bordes transparencia focus text-light"/>
                                                <label className="form-label" htmlhtmlFor="form2Example17">Email</label>
                                            </div>

                                            <div className="form-outline mb-4 text-light">
                                                <input onChange={handleInputChange} name='password' value={password} type="password" id="form2Example27" className="form-control form-control-lg bordes transparencia focus text-light" />
                                                <label className="form-label" htmlFor="form2Example27">Contraseña</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                
                                            </div>


                                            <div className="pt-1 mb-4">
                                                <button onClick={handleLogin} disabled={loading} className="btn boton btn-lg btn-block text-light" type="button">Entrar</button>
                                            </div>

                                            {(msgError) && <p>{msgError}</p>}

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}