'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeftIcon,
  DocumentTextIcon,
  UsersIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

interface QuestionnaireSection {
  section: string;
  questions: string[];
  targetAudience: string[];
}

const staffQuestionnaire: QuestionnaireSection[] = [
  {
    section: 'Procesos Administrativos',
    targetAudience: ['Administradores', 'Secretarias', 'Coordinadores'],
    questions: [
      '¿Cuánto tiempo dedica diariamente a buscar documentos físicos?',
      '¿Con qué frecuencia debe duplicar información entre diferentes sistemas?',
      '¿Cuántas horas semanales dedica a generar reportes manuales?',
      '¿Qué porcentaje de su tiempo se pierde en procesos repetitivos?',
      '¿Con qué frecuencia ocurren errores por transcripción manual de datos?',
      '¿Qué tan fácil es encontrar información específica de un estudiante?',
      '¿Cuánto tiempo toma procesar una nueva admisión de estudiante?',
      '¿Qué procesos administrativos considera más ineficientes?'
    ]
  },
  {
    section: 'Gestión Financiera',
    targetAudience: ['Contadores', 'Administradores Financieros', 'Tesorería'],
    questions: [
      '¿Cuánto tiempo toma generar una factura manualmente?',
      '¿Con qué frecuencia debe hacer seguimiento manual de pagos pendientes?',
      '¿Cuántas horas semanales dedica a conciliación bancaria?',
      '¿Qué tan fácil es identificar patrones de morosidad?',
      '¿Cuánto tiempo toma generar reportes financieros mensuales?',
      '¿Qué procesos financieros considera más propensos a errores?',
      '¿Cómo maneja actualmente los recordatorios de pago?',
      '¿Qué información financiera necesita pero no tiene disponible fácilmente?'
    ]
  },
  {
    section: 'Procesos Académicos',
    targetAudience: ['Docentes', 'Coordinadores Académicos', 'Directores'],
    questions: [
      '¿Cuánto tiempo dedica semanalmente a planificar horarios?',
      '¿Cómo lleva el control de asistencia de estudiantes?',
      '¿Cuánto tiempo toma calificar y registrar evaluaciones?',
      '¿Con qué frecuencia comunica con padres de familia?',
      '¿Qué tan fácil es generar reportes de progreso estudiantil?',
      '¿Cómo maneja la comunicación con estudiantes y padres?',
      '¿Qué información académica necesita pero no tiene disponible?',
      '¿Qué procesos académicos considera más ineficientes?'
    ]
  },
  {
    section: 'Recursos Humanos',
    targetAudience: ['RRHH', 'Administradores', 'Directores'],
    questions: [
      '¿Cómo lleva el control de asistencia del personal?',
      '¿Cuánto tiempo toma procesar la nómina mensualmente?',
      '¿Con qué frecuencia evalúa el desempeño del personal?',
      '¿Cómo gestiona las capacitaciones del personal?',
      '¿Qué tan fácil es acceder a información del personal?',
      '¿Qué procesos de RRHH considera más ineficientes?',
      '¿Cómo maneja los procesos de contratación?',
      '¿Qué información de RRHH necesita pero no tiene disponible?'
    ]
  },
  {
    section: 'Marketing y Admisiones',
    targetAudience: ['Marketing', 'Admisiones', 'Coordinadores'],
    questions: [
      '¿Cómo gestiona los leads de nuevos estudiantes?',
      '¿Cuánto tiempo toma procesar una solicitud de admisión?',
      '¿Con qué frecuencia hace seguimiento a prospectos?',
      '¿Cómo mide la efectividad de sus campañas de marketing?',
      '¿Qué tan fácil es identificar el origen de nuevos estudiantes?',
      '¿Cómo maneja la comunicación con prospectos?',
      '¿Qué información de marketing necesita pero no tiene?',
      '¿Qué procesos de admisiones considera más ineficientes?'
    ]
  },
  {
    section: 'Operaciones',
    targetAudience: ['Mantenimiento', 'Operaciones', 'Administradores'],
    questions: [
      '¿Cómo lleva el control de inventario de suministros?',
      '¿Con qué frecuencia realiza mantenimiento preventivo?',
      '¿Cómo gestiona las órdenes de compra?',
      '¿Qué tan fácil es identificar costos operativos?',
      '¿Cómo coordina con proveedores?',
      '¿Qué procesos operativos considera más ineficientes?',
      '¿Qué información operativa necesita pero no tiene?',
      '¿Cómo maneja el control de costos operativos?'
    ]
  },
  {
    section: 'Tecnología',
    targetAudience: ['TI', 'Sistemas', 'Administradores'],
    questions: [
      '¿Cómo monitorea el rendimiento de los sistemas?',
      '¿Con qué frecuencia realiza backups de información?',
      '¿Cómo maneja el soporte técnico al personal?',
      '¿Qué tan fácil es identificar problemas de sistemas?',
      '¿Cómo gestiona el acceso a sistemas?',
      '¿Qué procesos de TI considera más ineficientes?',
      '¿Qué información de sistemas necesita pero no tiene?',
      '¿Cómo maneja la seguridad de la información?'
    ]
  }
];

export default function QuestionnairePage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [responses, setResponses] = useState<Record<string, Record<string, string>>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleResponseChange = (section: string, question: string, response: string) => {
    setResponses(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [question]: response
      }
    }));
  };

  const getCompletionPercentage = (section: string) => {
    const sectionData = staffQuestionnaire.find(s => s.section === section);
    if (!sectionData) return 0;
    
    const responsesForSection = responses[section] || {};
    const answeredQuestions = Object.keys(responsesForSection).length;
    return Math.round((answeredQuestions / sectionData.questions.length) * 100);
  };

  const getOverallCompletion = () => {
    const totalQuestions = staffQuestionnaire.reduce((sum, section) => sum + section.questions.length, 0);
    const totalAnswered = Object.values(responses).reduce((sum, sectionResponses) => 
      sum + Object.keys(sectionResponses).length, 0);
    return Math.round((totalAnswered / totalQuestions) * 100);
  };

  const selectedSectionData = staffQuestionnaire.find(s => s.section === selectedSection);

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
                <p className="text-white/80 text-xs sm:text-sm truncate">Cuestionario de Evaluación de Procesos</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-finland-blue-light font-semibold text-lg">
                {getOverallCompletion()}% Completado
              </div>
              <div className="text-white/60 text-sm">
                {Object.values(responses).reduce((sum, sectionResponses) => sum + Object.keys(sectionResponses).length, 0)} respuestas
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedSection ? (
          <>
            {/* Instructions */}
            <div className="roi-card mb-8">
              <div className="flex items-center mb-4">
                <DocumentTextIcon className="h-8 w-8 text-finland-blue-light mr-3" />
                <h2 className="text-2xl font-semibold text-white">Instrucciones del Cuestionario</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Este cuestionario está diseñado para recopilar información detallada sobre los procesos actuales 
                  de Finland School y identificar oportunidades de mejora, automatización e implementación de IA.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-finland-blue-light mr-2" />
                    <span className="text-sm">Tiempo estimado: 15-20 min por sección</span>
                  </div>
                  <div className="flex items-center">
                    <UsersIcon className="h-5 w-5 text-finland-blue-light mr-2" />
                    <span className="text-sm">Dirigido a todo el personal</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-finland-blue-light mr-2" />
                    <span className="text-sm">Respuestas confidenciales</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staffQuestionnaire.map((section, index) => {
                const completion = getCompletionPercentage(section.section);
                return (
                  <div
                    key={section.section}
                    className="roi-card group cursor-pointer"
                    onClick={() => setSelectedSection(section.section)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{section.section}</h3>
                      <div className="flex items-center">
                        {completion === 100 ? (
                          <CheckCircleIcon className="h-6 w-6 text-green-400" />
                        ) : completion > 0 ? (
                          <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400" />
                        ) : (
                          <ClockIcon className="h-6 w-6 text-finland-blue-light" />
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-white/60 mb-2">Audiencia objetivo:</div>
                      <div className="flex flex-wrap gap-1">
                        {section.targetAudience.map((audience, idx) => (
                          <span key={idx} className="text-xs bg-finland-blue-light/20 text-finland-blue-light px-2 py-1 rounded">
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-white/60 mb-1">
                        {section.questions.length} preguntas • {completion}% completado
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-finland-blue-light h-2 rounded-full transition-all duration-300"
                          style={{ width: `${completion}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="text-finland-blue-light font-medium group-hover:text-finland-blue-light/80 transition-colors">
                      {completion === 100 ? 'Revisar Respuestas →' : completion > 0 ? 'Continuar →' : 'Comenzar →'}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            {/* Section Header */}
            <div className="roi-card mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">{selectedSectionData?.section}</h2>
                  <p className="text-white/60">
                    {selectedSectionData?.questions.length} preguntas • 
                    Audiencia: {selectedSectionData?.targetAudience.join(', ')}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedSection(null)}
                  className="bg-finland-blue-light/20 hover:bg-finland-blue-light/30 text-finland-blue-light px-4 py-2 rounded-lg transition-colors"
                >
                  ← Volver
                </button>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-6">
              {selectedSectionData?.questions.map((question, index) => (
                <div key={index} className="roi-card">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Pregunta {index + 1} de {selectedSectionData.questions.length}
                    </h3>
                    <p className="text-white/80">{question}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <textarea
                      value={responses[selectedSection]?.[question] || ''}
                      onChange={(e) => handleResponseChange(selectedSection, question, e.target.value)}
                      placeholder="Escriba su respuesta aquí..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-finland-blue-light focus:border-transparent resize-none"
                      rows={4}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Save Progress */}
            <div className="roi-card mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">Progreso Guardado</h3>
                  <p className="text-white/60">
                    Sus respuestas se guardan automáticamente. Puede continuar en cualquier momento.
                  </p>
                </div>
                <div className="text-finland-blue-light font-semibold">
                  {getCompletionPercentage(selectedSection)}% Completado
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
