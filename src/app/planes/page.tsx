'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeftIcon,
  CogIcon,
  ChartBarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

interface PriorityMatrixItem {
  name: string;
  effort: number; // 1-5 scale
  impact: number; // 1-5 scale
  category: 'Quick Wins' | 'Major Projects' | 'Fill-ins' | 'Thankless';
  description: string;
  estimatedROI: number;
  department: string;
  automationLevel: number;
  aiPotential: number;
}

const priorityMatrix: PriorityMatrixItem[] = [
  {
    name: 'Automatización de Facturación',
    effort: 2,
    impact: 5,
    category: 'Quick Wins',
    description: 'Automatización completa del proceso de facturación con Odoo, incluyendo generación automática, envío por email y seguimiento de pagos',
    estimatedROI: 95,
    department: 'Facturación',
    automationLevel: 95,
    aiPotential: 80
  },
  {
    name: 'Dashboard Administrativo',
    effort: 3,
    impact: 4,
    category: 'Quick Wins',
    description: 'Dashboard centralizado para administración general con métricas en tiempo real y reportes automáticos',
    estimatedROI: 85,
    department: 'Administración',
    automationLevel: 85,
    aiPotential: 70
  },
  {
    name: 'Sistema de Gestión Académica',
    effort: 5,
    impact: 5,
    category: 'Major Projects',
    description: 'Sistema integral de gestión académica con IA para planificación de horarios, seguimiento de progreso y comunicación con padres',
    estimatedROI: 75,
    department: 'Académico',
    automationLevel: 75,
    aiPotential: 90
  },
  {
    name: 'Portal para Padres',
    effort: 4,
    impact: 4,
    category: 'Major Projects',
    description: 'Portal digital para comunicación con padres, acceso a calificaciones, asistencia y comunicación directa con docentes',
    estimatedROI: 80,
    department: 'Académico',
    automationLevel: 70,
    aiPotential: 60
  },
  {
    name: 'CRM de Admisiones',
    effort: 3,
    impact: 4,
    category: 'Quick Wins',
    description: 'Sistema CRM para gestión de leads y admisiones con automatización de seguimiento y nurturing',
    estimatedROI: 80,
    department: 'Marketing',
    automationLevel: 80,
    aiPotential: 85
  },
  {
    name: 'Automatización de RRHH',
    effort: 3,
    impact: 3,
    category: 'Fill-ins',
    description: 'Automatización de procesos de recursos humanos incluyendo control de asistencia, nómina y evaluaciones',
    estimatedROI: 65,
    department: 'RRHH',
    automationLevel: 70,
    aiPotential: 60
  },
  {
    name: 'Sistema de Mantenimiento',
    effort: 4,
    impact: 3,
    category: 'Fill-ins',
    description: 'Sistema de gestión de mantenimiento preventivo con predicción de necesidades y optimización de recursos',
    estimatedROI: 70,
    department: 'Operaciones',
    automationLevel: 75,
    aiPotential: 80
  },
  {
    name: 'Monitoreo de Sistemas',
    effort: 4,
    impact: 2,
    category: 'Thankless',
    description: 'Sistema de monitoreo proactivo de TI con alertas automáticas y análisis predictivo de fallas',
    estimatedROI: 60,
    department: 'TI',
    automationLevel: 90,
    aiPotential: 85
  }
];

export default function AutomationOpportunitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<PriorityMatrixItem | null>(null);

  const getCategoryItems = (category: string) => {
    return priorityMatrix.filter(item => item.category === category);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Quick Wins': return 'text-green-400';
      case 'Major Projects': return 'text-blue-400';
      case 'Fill-ins': return 'text-yellow-400';
      case 'Thankless': return 'text-red-400';
      default: return 'text-finland-blue-light';
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'Quick Wins': return 'Alto impacto, bajo esfuerzo - Implementar primero';
      case 'Major Projects': return 'Alto impacto, alto esfuerzo - Planificar cuidadosamente';
      case 'Fill-ins': return 'Bajo impacto, bajo esfuerzo - Implementar cuando haya tiempo';
      case 'Thankless': return 'Bajo impacto, alto esfuerzo - Evitar o delegar';
      default: return '';
    }
  };

  const categories = ['Quick Wins', 'Major Projects', 'Fill-ins', 'Thankless'];

  return (
    <div className="min-h-screen bg-finland-school">
      {/* Header */}
      <header className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="mr-4">
                <ArrowLeftIcon className="h-6 w-6 text-finland-blue-light hover:text-white transition-colors" />
              </Link>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold finland-text truncate">Finland School</h1>
                <p className="text-white/80 text-xs sm:text-sm truncate">Oportunidades de Automatización e IA</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-finland-blue-light font-semibold text-lg">
                {priorityMatrix.length} Oportunidades
              </div>
              <div className="text-white/60 text-sm">
                ROI promedio: {Math.round(priorityMatrix.reduce((sum, item) => sum + item.estimatedROI, 0) / priorityMatrix.length)}%
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedItem ? (
          <>
            {/* Priority Matrix Overview */}
            <div className="roi-card mb-8">
              <div className="flex items-center mb-4">
                <ChartBarIcon className="h-8 w-8 text-finland-blue-light mr-3" />
                <h2 className="text-2xl font-semibold text-white">Matriz de Prioridades</h2>
              </div>
              <p className="text-white/80 mb-6">
                Clasificación de oportunidades de automatización e IA basada en nivel de esfuerzo vs impacto esperado
              </p>
              
              {/* Matrix Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-white/60 mb-2">BAJO IMPACTO</div>
                  <div className="text-xs text-white/40">↓</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-white/60 mb-2">ALTO IMPACTO</div>
                  <div className="text-xs text-white/40">↑</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-white/40">← BAJO ESFUERZO</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-white/40">ALTO ESFUERZO →</div>
                </div>
              </div>

              {/* Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((category) => {
                  const items = getCategoryItems(category);
                  const avgROI = Math.round(items.reduce((sum, item) => sum + item.estimatedROI, 0) / items.length);
                  
                  return (
                    <div
                      key={category}
                      className={`roi-card group cursor-pointer ${selectedCategory === category ? 'ring-2 ring-finland-blue-light' : ''}`}
                      onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`text-lg font-semibold ${getCategoryColor(category)}`}>
                          {category}
                        </h3>
                        <span className="text-white/60 text-sm">{items.length}</span>
                      </div>
                      
                      <p className="text-white/70 text-sm mb-3">
                        {getCategoryDescription(category)}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">ROI Promedio:</span>
                          <span className="text-finland-blue-light font-semibold">{avgROI}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Proyectos:</span>
                          <span className="text-white">{items.length}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detailed Items */}
            {selectedCategory && (
              <div className="space-y-6">
                <div className="roi-card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      Proyectos en {selectedCategory}
                    </h3>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="text-finland-blue-light hover:text-white transition-colors"
                    >
                      ← Ver todas las categorías
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {getCategoryItems(selectedCategory).map((item, index) => (
                    <div
                      key={index}
                      className="roi-card group cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-semibold text-white group-hover:text-finland-blue-light transition-colors">
                          {item.name}
                        </h4>
                        <div className="text-finland-blue-light font-bold text-lg">
                          {item.estimatedROI}%
                        </div>
                      </div>
                      
                      <p className="text-white/70 mb-4 text-sm">
                        {item.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Departamento:</span>
                          <span className="text-white">{item.department}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Nivel de Automatización:</span>
                          <span className="text-finland-blue-light">{item.automationLevel}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Potencial de IA:</span>
                          <span className="text-finland-blue-light">{item.aiPotential}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Esfuerzo:</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full mr-1 ${
                                  i < item.effort ? 'bg-finland-blue-light' : 'bg-white/20'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Impacto:</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full mr-1 ${
                                  i < item.impact ? 'bg-green-400' : 'bg-white/20'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-finland-blue-light font-medium group-hover:text-finland-blue-light/80 transition-colors">
                        Ver Detalles →
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Items Overview */}
            {!selectedCategory && (
              <div className="space-y-6">
                <div className="roi-card">
                  <h3 className="text-xl font-semibold text-white mb-4">Todas las Oportunidades</h3>
                  <p className="text-white/70 mb-6">
                    Lista completa de oportunidades de automatización e IA identificadas para Finland School
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {priorityMatrix.map((item, index) => (
                    <div
                      key={index}
                      className="roi-card group cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-finland-blue-light transition-colors">
                            {item.name}
                          </h4>
                          <div className="flex items-center mt-1">
                            <span className={`text-xs px-2 py-1 rounded ${getCategoryColor(item.category)} bg-opacity-20`}>
                              {item.category}
                            </span>
                            <span className="text-white/60 text-sm ml-2">{item.department}</span>
                          </div>
                        </div>
                        <div className="text-finland-blue-light font-bold text-lg">
                          {item.estimatedROI}%
                        </div>
                      </div>
                      
                      <p className="text-white/70 mb-4 text-sm">
                        {item.description.substring(0, 120)}...
                      </p>
                      
                      <div className="flex justify-between text-sm mb-4">
                        <div className="flex items-center">
                          <span className="text-white/60 mr-2">Automatización:</span>
                          <span className="text-finland-blue-light">{item.automationLevel}%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-white/60 mr-2">IA:</span>
                          <span className="text-finland-blue-light">{item.aiPotential}%</span>
                        </div>
                      </div>
                      
                      <div className="text-finland-blue-light font-medium group-hover:text-finland-blue-light/80 transition-colors">
                        Ver Detalles →
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Item Detail View */}
            <div className="roi-card mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">{selectedItem.name}</h2>
                  <div className="flex items-center">
                    <span className={`text-sm px-3 py-1 rounded ${getCategoryColor(selectedItem.category)} bg-opacity-20 mr-3`}>
                      {selectedItem.category}
                    </span>
                    <span className="text-white/60 text-sm">{selectedItem.department}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="bg-finland-blue-light/20 hover:bg-finland-blue-light/30 text-finland-blue-light px-4 py-2 rounded-lg transition-colors"
                >
                  ← Volver
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="roi-card">
                  <h3 className="text-lg font-semibold text-white mb-4">Descripción del Proyecto</h3>
                  <p className="text-white/80">{selectedItem.description}</p>
                </div>

                <div className="roi-card">
                  <h3 className="text-lg font-semibold text-white mb-4">Beneficios Esperados</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <RocketLaunchIcon className="h-5 w-5 text-finland-blue-light mr-3" />
                      <span className="text-white/80">ROI estimado: {selectedItem.estimatedROI}%</span>
                    </div>
                    <div className="flex items-center">
                      <CogIcon className="h-5 w-5 text-finland-blue-light mr-3" />
                      <span className="text-white/80">Nivel de automatización: {selectedItem.automationLevel}%</span>
                    </div>
                    <div className="flex items-center">
                      <LightBulbIcon className="h-5 w-5 text-finland-blue-light mr-3" />
                      <span className="text-white/80">Potencial de IA: {selectedItem.aiPotential}%</span>
                    </div>
                  </div>
                </div>

                <div className="roi-card">
                  <h3 className="text-lg font-semibold text-white mb-4">Implementación Recomendada</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Fase 1: Preparación (2-4 semanas)</h4>
                      <ul className="text-white/70 text-sm space-y-1 ml-4">
                        <li>• Análisis detallado de procesos actuales</li>
                        <li>• Definición de requerimientos técnicos</li>
                        <li>• Selección de herramientas y tecnologías</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Fase 2: Desarrollo (4-8 semanas)</h4>
                      <ul className="text-white/70 text-sm space-y-1 ml-4">
                        <li>• Desarrollo de soluciones automatizadas</li>
                        <li>• Integración con sistemas existentes</li>
                        <li>• Pruebas y validación</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Fase 3: Implementación (2-4 semanas)</h4>
                      <ul className="text-white/70 text-sm space-y-1 ml-4">
                        <li>• Capacitación del personal</li>
                        <li>• Despliegue gradual</li>
                        <li>• Monitoreo y ajustes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="roi-card">
                  <h3 className="text-lg font-semibold text-white mb-4">Métricas del Proyecto</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/60">Esfuerzo</span>
                        <span className="text-white">{selectedItem.effort}/5</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-finland-blue-light h-2 rounded-full"
                          style={{ width: `${(selectedItem.effort / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/60">Impacto</span>
                        <span className="text-white">{selectedItem.impact}/5</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-green-400 h-2 rounded-full"
                          style={{ width: `${(selectedItem.impact / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/60">ROI</span>
                        <span className="text-white">{selectedItem.estimatedROI}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-finland-blue-light h-2 rounded-full"
                          style={{ width: `${Math.min(selectedItem.estimatedROI, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="roi-card">
                  <h3 className="text-lg font-semibold text-white mb-4">Próximos Pasos</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-white/80 text-sm">Evaluar viabilidad técnica</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-white/80 text-sm">Estimar presupuesto detallado</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-white/80 text-sm">Definir cronograma de implementación</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-white/80 text-sm">Asignar recursos del equipo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}