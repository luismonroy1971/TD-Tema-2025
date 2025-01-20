import React from 'react';
import { Card } from './Card';
import Image from 'next/image';

const Presentation = () => {
  return (
    <div className="space-y-8">
      {/* Slide 1 - Portada con imagen de fondo */}
      <Card className="relative overflow-hidden min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="/images/TD-Principal.webp" // Aquí puedes usar tu propia imagen
            alt="Digital Transformation"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center py-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transformación Digital
          </h1>
          <p className="text-2xl text-gray-700">Guía Estratégica para Organizaciones</p>
        </div>
      </Card>

      {/* Slide 2 - Definición con iconos */}
      <Card>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-700">
              ¿Qué es la Transformación Digital?
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Es el proceso de integrar tecnologías digitales en todas las áreas de una organización, 
                transformando fundamentalmente cómo opera y entrega valor a sus clientes.
              </p>
              <ul className="space-y-3">
                {[
                  'Cambio en la forma de operar',
                  'Mayor valor para clientes',
                  'Adaptación al entorno digital'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      ✓
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/images/TD2-Principal.webp"
              alt="Digital Transformation Concept"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Card>

      {/* Slide 3 - Elementos Clave con iconos modernos */}
      <Card>
        <h2 className="text-2xl font-bold mb-8 text-blue-700">Elementos Clave</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Cambio Cultural',
              items: [
                'Mentalidad de innovación',
                'Aprendizaje continuo',
                'Adaptabilidad'
              ],
              bgColor: 'bg-blue-50'
            },
            {
              title: 'Digitalización',
              items: [
                'Automatización de procesos',
                'Mejora de eficiencia',
                'Integración tecnológica'
              ],
              bgColor: 'bg-purple-50'
            }
          ].map((section, index) => (
            <div key={index} className={`${section.bgColor} p-6 rounded-xl shadow-sm`}>
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Slide 4 - Tecnologías Clave con tarjetas modernas */}
      <Card>
        <h2 className="text-2xl font-bold mb-8 text-blue-700">Tecnologías Clave</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Cloud Computing',
              desc: 'Acceso a recursos y servicios en línea',
              icon: '☁️'
            },
            {
              title: 'Big Data',
              desc: 'Análisis de datos para toma de decisiones',
              icon: '📊'
            },
            {
              title: 'IA',
              desc: 'Automatización y predicción avanzada',
              icon: '🤖'
            }
          ].map((tech, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
              <p className="text-gray-600">{tech.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Slide 5 - Beneficios con diseño moderno */}
      <Card>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-700">Beneficios</h2>
            <div className="space-y-4">
              {[
                'Mayor productividad y eficiencia',
                'Reducción de costos operativos',
                'Mejor experiencia del cliente',
                'Mayor agilidad empresarial'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/TD.webp"
              alt="Benefits of Digital Transformation"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Presentation;