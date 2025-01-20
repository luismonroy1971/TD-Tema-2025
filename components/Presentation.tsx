import React from 'react';
import { Card } from './Card';

const Presentation = () => {
  return (
    <div className="space-y-8">
      {/* Slide 1 - Portada */}
      <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold mb-6">Transformación Digital</h1>
          <p className="text-xl">Guía Estratégica para Organizaciones</p>
        </div>
      </Card>

      {/* Slide 2 - Definición */}
      <Card>
        <h2 className="text-2xl font-bold mb-6 text-blue-700">¿Qué es la Transformación Digital?</h2>
        <div className="space-y-4">
          <p className="text-lg">
            Es el proceso de integrar tecnologías digitales en todas las áreas de una organización para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cambiar fundamentalmente la forma de operar</li>
            <li>Ofrecer mayor valor a los clientes</li>
            <li>Adaptarse y prosperar en un entorno digital</li>
          </ul>
        </div>
      </Card>

      {/* Slide 3 - Elementos Clave */}
      <Card>
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Elementos Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Cambio Cultural</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mentalidad de innovación</li>
              <li>Aprendizaje continuo</li>
              <li>Adaptabilidad</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Digitalización</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Automatización de procesos</li>
              <li>Mejora de eficiencia</li>
              <li>Integración tecnológica</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Slide 4 - Tecnologías Clave */}
      <Card>
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Tecnologías Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Cloud Computing</h3>
            <p>Acceso a recursos y servicios en línea</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Big Data</h3>
            <p>Análisis de datos para toma de decisiones</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">IA</h3>
            <p>Automatización y predicción avanzada</p>
          </div>
        </div>
      </Card>

      {/* Slide 5 - Beneficios */}
      <Card>
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p>Mayor productividad y eficiencia</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p>Reducción de costos operativos</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p>Mejor experiencia del cliente</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p>Mayor agilidad empresarial</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Presentation;