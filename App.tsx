import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('introduccion');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-green-100 opacity-50 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-repeat-x bg-center bg-[url('https://i.imgur.com/8K37yU1.png')] z-0 animate-move"></div>
      <header className="flex justify-center mb-4 relative z-10">
        <h1 className="text-3xl font-bold text-green-500">Robots Agrícolas</h1>
      </header>
      <nav className="flex flex-wrap justify-center mb-4 relative z-10">
        <button
          className={`text-lg font-bold p-2 mx-2 ${activeTab === 'introduccion' ? 'bg-green-500 text-white' : 'bg-white text-green-500'}`}
          onClick={() => handleTabChange('introduccion')}
        >
          Introducción
        </button>
        <button
          className={`text-lg font-bold p-2 mx-2 ${activeTab === 'vision' ? 'bg-green-500 text-white' : 'bg-white text-green-500'}`}
          onClick={() => handleTabChange('vision')}
        >
          Visión
        </button>
        <button
          className={`text-lg font-bold p-2 mx-2 ${activeTab === 'mision' ? 'bg-green-500 text-white' : 'bg-white text-green-500'}`}
          onClick={() => handleTabChange('mision')}
        >
          Misión
        </button>
        <button
          className={`text-lg font-bold p-2 mx-2 ${activeTab === 'politica' ? 'bg-green-500 text-white' : 'bg-white text-green-500'}`}
          onClick={() => handleTabChange('politica')}
        >
          Política de Calidad
        </button>
        <button
          className={`text-lg font-bold p-2 mx-2 ${activeTab === 'objetivos' ? 'bg-green-500 text-white' : 'bg-white text-green-500'}`}
          onClick={() => handleTabChange('objetivos')}
        >
          Objetivos del Proyecto
        </button>
        <button
          className={`text-lg font-bold p-2 mx-2 ${activeTab === 'galeria' ? 'bg-green-500 text-white' : 'bg-white text-green-500'}`}
          onClick={() => handleTabChange('galeria')}
        >
          Galería de Fotos
        </button>
        <button
          className={`text-lg font-bold p-2 mx-2 ${activeTab === 'caracteristicas' ? 'bg-green-500 text-white' : 'bg-white text-green-500'}`}
          onClick={() => handleTabChange('caracteristicas')}
        >
          Características del Robot
        </button>
      </nav>
      {activeTab === 'introduccion' && (
        <div className="p-4 bg-white relative z-10">
          <h2 className="text-2xl font-bold text-green-500">Introducción</h2>
          <p className="text-lg text-gray-600">Nuestro proyecto de robots agrícolas busca optimizar las labores del campo, mejorando la eficiencia y reduciendo los costos.</p>
        </div>
      )}
      {activeTab === 'vision' && (
        <div className="p-4 bg-white relative z-10">
          <h2 className="text-2xl font-bold text-green-500">Visión</h2>
          <p className="text-lg text-gray-600">Nuestra visión es ser líderes en la implementación de tecnología agrícola, mejorando la vida de los agricultores y la calidad de los productos.</p>
        </div>
      )}
      {activeTab === 'mision' && (
        <div className="p-4 bg-white relative z-10">
          <h2 className="text-2xl font-bold text-green-500">Misión</h2>
          <p className="text-lg text-gray-600">Nuestra misión es desarrollar soluciones innovadoras y sostenibles para la agricultura, mejorando la productividad y la rentabilidad de los agricultores.</p>
        </div>
      )}
      {activeTab === 'politica' && (
        <div className="p-4 bg-white relative z-10">
          <h2 className="text-2xl font-bold text-green-500">Política de Calidad</h2>
          <p className="text-lg text-gray-600">Nuestra política de calidad se centra en la mejora continua, la innovación y la satisfacción del cliente.</p>
        </div>
      )}
      {activeTab === 'objetivos' && (
        <div className="p-4 bg-white relative z-10">
          <h2 className="text-2xl font-bold text-green-500">Objetivos del Proyecto</h2>
          <ul className="text-lg text-gray-600">
            <li>Mejorar la eficiencia en la agricultura</li>
            <li>Reducir los costos de producción</li>
            <li>Mejorar la calidad de los productos</li>
          </ul>
        </div>
      )}
      {activeTab === 'galeria' && (
        <div className="p-4 bg-white relative z-10">
          <h2 className="text-2xl font-bold text-green-500">Galería de Fotos</h2>
          <div className="flex flex-wrap justify-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-2 my-2" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-2 my-2" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-2 my-2" />
          </div>
        </div>
      )}
      {activeTab === 'caracteristicas' && (
        <div className="p-4 bg-white relative z-10">
          <h2 className="text-2xl font-bold text-green-500">Características del Robot</h2>
          <ul className="text-lg text-gray-600">
            <li>Autonomía y navegación</li>
            <li>Sistema de visión y detección</li>
            <li>Brazo robótico para tareas de cultivo</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;