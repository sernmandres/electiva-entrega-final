import React from 'react';
import withNavigateHook from './withNavigateHook';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      last_name: "",
      email: "",
      password: ""
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.redirection = this.redirection.bind(this);
    this.validEmail = this.validEmail.bind(this);
  }

  validEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  changeHandler(event) {
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  redirection() {
    console.log("Login");
    this.props.navigation('/iniciar-sesion');
  }

  submitForm() {
    // POST - API/usuarios
    // URL:: https://sinocuser.herokuapp.com/usuario/register/

    console.log(this.state.name === "")

    if (this.state.name === "" || this.state.last_name === "" || this.state.username === "" ||
      this.state.email === "" || this.state.password === "") {

      if (this.state.name === "") {
        toast.warn("¡Ya casi!, ingresa tu nombre", {
          position: toast.POSITION.TOP_RIGHT
        });
      }

      if (this.state.last_name === "") {
        toast.warn("¡Ya casi, ingresa tus apellidos", {
          position: toast.POSITION.TOP_RIGHT
        });
      }

      if (this.state.username === "") {
        toast.warn("¡Ya casi, ingresa tu nickname", {
          position: toast.POSITION.TOP_RIGHT
        });
      }

      if (this.state.email === "") {
        toast.warn("¡Ya casi, ingresa tu correo electrónico", {
          position: toast.POSITION.TOP_RIGHT
        });
      }

      if (this.state.password === "") {
        toast.success("¡Ya casi, ingresa tu contraseña", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
      return;
    }

    if (!this.validEmail(this.state.email)) {
      toast.error("!ups!, debe de ser un correo electrónico válido.", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }

    axios
      .post('https://sinocuser.herokuapp.com/usuario/register/',
        JSON.stringify(this.state),
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        toast.success("¡Felicitaciones, registro ha sido correcto", {
          position: toast.POSITION.TOP_CENTER
        });
        
        setTimeout( () => {
          this.redirection();
        },3000)        
      })
      .catch(error => {
        toast.error("!ups!, ha ocurrido un error. Intenta nuevamente", {
          position: toast.POSITION.TOP_LEFT
        });
      });

  }

  render() {
    return (
      <div className='ca_forms'>
        <div>
          <div className='circleAnimation1'></div>
          <div className='circleAnimation2'></div>
          <div className='circleAnimation3'></div>
          <div className='circleAnimation4'></div>
          <div className='circleAnimation5'></div>
          <div className='ca_msj-form'>

            <h3>Bienvenido!</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ante egestas, tincidunt ante sed,
              commodo risus. Suspendisse molestie enim vel ligula scelerisque,
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ante egestas, tincidunt ante sed,
              commodo risus. Suspendisse molestie enim vel ligula scelerisque,  commodo risus. <span>Suspendisse molestie enim vel ligula scelerisque,</span>

            </p>
          </div>
        </div>

        <div className='ca_contFormulario'>
          <div>
            <div>
              <h3>Crear cuenta</h3>
            </div>

            <div className='ca_formularioEnvio'>
              <input value={this.state.username}
                name="username"
                onChange={this.changeHandler}
                type="text"
                className="form-control"
                placeholder="Nick"
              />

              <input value={this.state.name}
                name="name"
                onChange={this.changeHandler}
                type="text"
                className="form-control"
                placeholder='Nombre'
              />

              <input value={this.state.last_name}
                name="last_name"
                onChange={this.changeHandler}
                type="text"
                className="form-control"
                placeholder='Apellidos'
              />

              <input value={this.state.email}
                name="email"
                onChange={this.changeHandler}
                type="email"
                className="form-control"
                placeholder='Correo electrónico'
              />

              <input value={this.state.password}
                name="password"
                onChange={this.changeHandler}
                type="password"
                className="form-control"
                placeholder='Contraseña'
              />

              <input type="submit" onClick={this.submitForm} value="Registrarse" />
            </div>
          </div>
        </div>

        <ToastContainer transition={Bounce} />

      </div>
    )
  }
}

export default withNavigateHook(Register);
