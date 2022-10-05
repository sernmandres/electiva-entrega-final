import React from 'react';
import withNavigateHook from './withNavigateHook';
import axios from 'axios';

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
    this.handleToContact = this.handleToContact.bind(this);
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  handleToContact() {
    console.log("Login");
    this.props.navigation('/iniciar-sesion');
  }

  submitForm() {
    console.log("data enviado")

    console.log("this.state.name ", this.state.name)


    // POST - API/usuarios
    // URL:: https://sinocuser.herokuapp.com/usuario/register/
    axios
      .post('https://sinocuser.herokuapp.com/usuario/register/',
        JSON.stringify(this.state),
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then(response => {
        console.log('Well done!');
        console.log('User profile', response);
        this.handleToContact();
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
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
                placeholder= "Nick"
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
                type="text"
                className="form-control"
                placeholder='Correo electrónico'
              />

              <input value={this.state.password}
                name="password"
                onChange={this.changeHandler}
                type="text"
                className="form-control"
                placeholder='Contraseña'
              />

              <input type="submit" onClick={this.submitForm} value="Registrarse" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withNavigateHook(Register);
