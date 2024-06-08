import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChartComponent.scss';

Chart.register(...registerables);

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://services3.arcgis.com/pI4ewELlDKS2OpCN/arcgis/rest/services/SDG_6_3_2_Proportion_of_bodies_of_water_with_good_ambient_water_quality/FeatureServer/0/query', {
          params: {
            where: '1=1',
            outFields: '*',
            geometry: '-98.463,10.209,-60.758,24.829',
            geometryType: 'esriGeometryEnvelope',
            inSR: 4326,
            spatialRel: 'esriSpatialRelIntersects',
            outSR: 4326,
            f: 'json'
          }
        });

        console.log('API Response:', response.data);

        if (response.data && response.data.features) {
          const data = response.data.features;

          console.log('Data:', data); // Log detalhado dos dados

          const labels = data.map(entry => {
            const id = entry.attributes.OBJECTID_1; // Ajustar conforme necessário
            return `ID: ${id}`;
          });

          const values = data.map(entry => {
            const value = entry.attributes.obsValue; // Ajustar conforme necessário
            return value !== null ? value : 0;
          });

          console.log('Labels:', labels);
          console.log('Values:', values);

          setChartData({
            labels,
            datasets: [
              {
                label: 'Proporção de corpos d\'água com boa qualidade ambiental',
                data: values,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }
            ]
          });
        } else {
          setError('Os dados retornados pela API estão vazios ou no formato incorreto.');
        }
      } catch (error) {
        setError('Erro ao buscar dados da API: ' + error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="error-message">Erro: {error}</div>;
  }

  return (
    <div className="container_dashboard">
      <div className="container">
        <div className="project-info">
          <h2 className="header_dashboard">Projeto Info Wave</h2>
          <p className="lead">
            O Projeto Info Wave visa aumentar a conscientização sobre a poluição marinha e seus impactos. Utilizando dados de várias fontes, fornecemos visualizações em tempo real e informações educativas para ajudar a preservar nossos oceanos.
          </p>
          <p>
            Através deste projeto, esperamos incentivar a participação em ações de limpeza, redução do uso de plásticos e apoio a políticas públicas voltadas para a conservação marinha. A poluição marinha é uma ameaça global que afeta a vida marinha, a saúde humana e o clima. Nosso objetivo é fornecer dados precisos e atualizados para que todos possam entender a gravidade da situação e agir de maneira eficaz.
          </p>
          <p>
            O aplicativo Info Wave é uma ferramenta poderosa para educadores, estudantes, ambientalistas e qualquer pessoa interessada em aprender mais sobre a saúde dos oceanos. Com dados de qualidade da água em tempo real, informações sobre tipos de poluição e sugestões práticas para reduzir o impacto ambiental, esperamos capacitar a próxima geração de defensores dos oceanos.
          </p>
          <p>
            Este projeto também visa colaborar com outras organizações ambientais e governamentais para promover políticas de conservação e práticas sustentáveis. Através de parcerias e compartilhamento de dados, podemos trabalhar juntos para criar um impacto positivo duradouro.
          </p>
          <p>
            Estamos comprometidos com a transparência e a precisão dos dados fornecidos. Utilizamos tecnologias de ponta para coletar e analisar informações, garantindo que nossos usuários tenham acesso às melhores ferramentas e conhecimentos disponíveis para proteger nossos oceanos.
          </p>
          <p>
            Junte-se a nós nesta missão e faça a diferença. Cada ação conta, e juntos podemos construir um futuro melhor para os nossos oceanos e para as gerações futuras.
          </p>
        </div>
        <div className="chart-container">
          <h2 className="header_dashboard">Proporção de corpos d'água com boa qualidade ambiental</h2>
          {chartData.labels ? <Line data={chartData} /> : <p>Carregando dados...</p>}
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
