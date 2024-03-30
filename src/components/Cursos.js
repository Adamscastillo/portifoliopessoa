// src/components/Cursos.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cursos.css';

const Cursos = () => {
  const cursosData = [
    { 
      title: "Curso 1",
      entity: "Entidade 1",
      startDate: "01/01/2024",
      endDate: "31/01/2024",
      description: "Descrição do Curso 1"
    },
    { 
      title: "Curso 2",
      entity: "Entidade 2",
      startDate: "01/02/2024",
      endDate: "28/02/2024",
      description: "Descrição do Curso 2"
    },
    { 
      title: "Curso 3",
      entity: "Entidade 3",
      startDate: "01/01/2024",
      endDate: "31/01/2024",
      description: "Descrição do Curso 3"
    },
    { 
      title: "Curso 3",
      entity: "Entidade 3",
      startDate: "01/02/2024",
      endDate: "28/02/2024",
      description: "Descrição do Curso 2"
    },
    
    // Adicione mais cursos conforme necessário
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Adicionando autoplay
    autoplaySpeed: 3000 // Velocidade de rotação em milissegundos (opcional)
  };

  return (
    <div className="cursos-container">
      <h1>Cursos</h1>
      <Slider {...settings}>
        {cursosData.map((curso, index) => (
          <div key={index} className="curso-card">
            <h2>{curso.title}</h2>
            <p><strong>Entidade:</strong> {curso.entity}</p>
            <p><strong>Início do Curso:</strong> {curso.startDate}</p>
            <p><strong>Fim do Curso:</strong> {curso.endDate}</p>
            <p>{curso.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Cursos;
