import React from 'react';
import withNavigateHook from './withNavigateHook';

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
    fetch('https://sinocuser.herokuapp.com/usuario/register/', {
      'mode': 'cors',
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then((data) => console.log(data));

    this.setState({
      username: '',
      name: '',
      last_name: '',
      email: '',
      password: ''
    });

    this.handleToContact();

  }

  render() {
    return (
      <div>
        <label >Nombre de usuario:</label>
        <input value={this.state.username}
          name="username"
          onChange={this.changeHandler}
          type="text"
          className="form-control"
        />

        <label>Nombre:</label>
        <input value={this.state.name}
          name="name"
          onChange={this.changeHandler}
          type="text"
          className="form-control"
        />

        <label>Apellidos:</label>
        <input value={this.state.last_name}
          name="last_name"
          onChange={this.changeHandler}
          type="text"
          className="form-control"
        />

        <label>Correo electrónico:</label>
        <input value={this.state.email}
          name="email"
          onChange={this.changeHandler}
          type="text"
          className="form-control"
        />

        <label>Contraseña:</label>
        <input value={this.state.password}
          name="password"
          onChange={this.changeHandler}
          type="text"
          className="form-control"
        />

        <input type="submit" onClick={this.submitForm} className="btn btn-dark" value="enviar data" />
      </div>
    )
  }
}

export default withNavigateHook(Register);
