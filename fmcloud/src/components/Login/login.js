import React from 'react';
import Style from './login.css';
import './login.css';
import '../../components/StyleGlobal/bootstrap.css';

const login = () => (
	<div className="login-page">
      <div className="container d-flex align-items-center">
        <div className="form-holder has-shadow">
          <div className="row">
            <div className="col-lg-6">
              <div className="info d-flex align-items-center">
                <div className="content">
                  <div className="logo">
                    <h1>DHAMIR</h1>
                  </div>
                  <p>Bienvenido a la pagina ingresa tus datos para continuar.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 bg-white">
              <div className="form d-flex align-items-center">
                <div className="content">
                  <form id="login-form" method="post">
                    <div className="form-group">
                      <input id="login-username" type="text" name="loginUsername" required="" className="input-material"/>
                      <label className="label-material">Usuario</label>
                    </div>
                    <div className="form-group">
                      <input id="login-password" type="password" name="loginPassword" required="" className="input-material"/>
                      <label className="label-material">Contraseña</label>
                    </div><a id="login" href="index.html" className="btn btn-primary">Ingresar</a>
                  </form><a href="#" className="forgot-pass">Recuperar Contraseña</a><small>Solicita una cuenta </small><a href="register.html" className="signup">SOLICITAR</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>);

export default login;