import React, { useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
  useEffect(() => {
    const yearSpan = document.getElementById('current-year');
    yearSpan.textContent = new Date().getFullYear();
  }, []);

  const changeColor = () => {
    const footer = document.getElementById('footer');
    footer.style.backgroundColor = footer.style.backgroundColor === 'rgb(52, 58, 64)' ? '#007bff' : '#343a40';
  };

  return (
    <footer id="footer" className="footer-custom">
      <div className="container">
        <p>© <span id="current-year"></span> Info Wave App. Todos os direitos reservados.</p>
        <button onClick={changeColor} className="btn btn-primary">Mudar Cor</button>
      </div>
    </footer>
  );
};

export default Footer;
