import React, { useState } from 'react';
import './Contact.scss';
import vitorPhoto from '../../assets/images/vitor.png'; // Adicione a foto do Vitor na pasta assets
import pedroPhoto from '../../assets/images/vitor.jpeg'; // Adicione a foto do Pedro na pasta assets

const users = [
  { email: 'vitor@example.com', password: 'vitor123' },
  { email: 'pedro@example.com', password: 'pedro123' },
];

const About = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      alert('Login bem-sucedido!');
      setErrorMessage(''); // Limpa a mensagem de erro após login bem-sucedido
    } else {
      setErrorMessage('Email ou senha inválidos.');
    }
  };

  return (
    <div className="about-container container">
      <h1>Sobre Nós</h1>
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={vitorPhoto} alt="Vitor Pinheiro" className="img-fluid rounded-circle mb-3" />
          <h2>Vitor Pinheiro</h2>
          <p>Desenvolvedor full stack com paixão por tecnologias modernas e inovação.</p>
        </div>
        <div className="col-md-6 text-center">
          <img src={pedroPhoto} alt="Pedro Chaves" className="img-fluid rounded-circle mb-3" />
          <h2>Pedro Chaves</h2>
          <p>Especialista em desenvolvimento front-end com foco em criar experiências de usuário intuitivas.</p>
        </div>
      </div>
      <div className="login-form mt-5">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default About;


