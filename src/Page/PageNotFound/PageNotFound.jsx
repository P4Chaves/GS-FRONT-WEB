import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.scss';
 
const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="content-overlay">
        <div className="content">
          <h1>404</h1>
          <h2>Página Não Encontrada</h2>
          <p>Desculpe, a página que você está procurando não existe.</p>
          <Link to="/" className="home-link">Voltar para a Home</Link>
        </div>
      </div>
    </div>
  );
};
 
export default PageNotFound;