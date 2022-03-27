import { useLogin } from "../../hooks/Login/useLogin"
import { ToastContainer } from 'react-toastify'
import logo from "../../assets/images/logo-orange.png"

const Login = () => {

    const {
        loading,
        register,
        handleSubmit,
        errors,
        onSubmit
    } = useLogin()

    return(
        <div className="container-fluid background___login">
          <div className="row">
            <div className="col-xs-10 col-md-7 col-lg-4 mx-auto mt-5">
              <div className="col-12 text-center mt-4">
                
              </div>
              <div className="card card-login mt-3 pb-5">
                <div className="card-body p-4">
                  <div className="row">
                      <div className="col-12 mb-5 mt-5 text-center">
                        <div>
                          <img src={logo} alt="Logo" />
                        </div>
                        <h3 className="panel-title__main mt-5">Iniciar Sesión</h3>
                      </div>
                      <div className="col-12">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="row">
                            <div className="col-12 mb-4">
                                <div className="form-group">
                                  <label className="form__label mb-0" htmlFor="email">usuario</label>
                                  <input 
                                    type="text" 
                                    name="email"
                                    autoFocus
                                    id="email"  
                                    className="form-control" 
                                    ref={register({required: {value: true, message: 'Requerido'}})}
                                  />
                                {errors.email && (
                                  <span className="text-danger">
                                      {errors?.email?.message}
                                  </span>
                                )}            
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="form__label mb-0" htmlFor="password">Contraseña</label>
                                    <input 
                                      type="password" 
                                      name="password" 
                                      id="password" 
                                      className="form-control" 
                                      ref={register({required: {value: true, message: 'Requerido'}})} 
                                    />
                                    
                                    {errors.password && (
                                    <span className="text-danger">
                                        {errors?.password?.message}
                                    </span>
                                  )}  
                                  </div> 
                            </div>
                          </div>
                          <button className="w-100 btn btn-lg btn-orange mt-5 pt-3 pb-3" type="submit" disabled={loading}>
                            {loading ? 'Procesando...' : 'Ingresar'}
                          </button>
                        </form>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
    )    
}

export default Login