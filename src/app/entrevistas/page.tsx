'use client'

import Link from 'next/link'
import { ArrowLeftIcon, PrinterIcon } from '@heroicons/react/24/outline'

export default function InterviewQuestionnairePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-finland-school text-white">
      {/* Print Header - Only visible when printing */}
      <div className="hidden print:block print:text-black print:bg-white print:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-finland-blue mb-2">FINLAND SCHOOL</h1>
          <h2 className="text-2xl font-semibold text-finland-blue-light">Cuestionario de Entrevista para Análisis de Procesos</h2>
          <p className="text-gray-600 mt-2">Análisis de ROI y Oportunidades de Automatización</p>
          <p className="text-gray-500 text-sm">Fecha: _______________ Entrevistado: _______________ Departamento: _______________</p>
        </div>
      </div>

      {/* Screen Header - Hidden when printing */}
      <div className="print:hidden bg-finland-school p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-finland-blue-light hover:text-white transition-colors flex items-center">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Volver al Dashboard
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold finland-text">Cuestionario de Entrevista</h1>
          <button
            onClick={handlePrint}
            className="bg-finland-blue hover:bg-finland-blue-dark text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center"
          >
            <PrinterIcon className="h-5 w-5 mr-2" />
            Imprimir PDF
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="print:bg-white print:text-black print:p-8">
        <div className="max-w-4xl mx-auto p-6 print:p-0">
          
          {/* Instructions */}
          <div className="print:hidden glass-effect rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-finland-blue-light">Instrucciones para la Entrevista</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Este cuestionario está diseñado para ser usado como guía durante entrevistas presenciales</li>
              <li>Las preguntas están organizadas por departamento y tipo (flujo de trabajo vs. evaluación específica)</li>
              <li>Use las preguntas de flujo de trabajo para entender procesos completos</li>
              <li>Use las preguntas específicas para obtener métricas y identificar pain points</li>
              <li>Las preguntas transversales aplican a todos los departamentos</li>
            </ul>
          </div>

          {/* Section 1: Administrative Processes */}
          <div className="mb-12 print:mb-8">
            <h2 className="text-2xl font-bold text-finland-blue mb-4 print:text-finland-blue">SECCIÓN 1: PROCESOS ADMINISTRATIVOS</h2>
            <p className="text-lg font-semibold text-finland-blue-light mb-6 print:text-finland-blue-light"><strong>Audiencia:</strong> Administradores, Secretarias, Coordinadores</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Flujo de Trabajo (FUNDAMENTALES)</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black">
                <li><strong>Describa paso a paso el proceso actual de admisión de un nuevo estudiante</strong> (desde la primera consulta hasta la matrícula completa)</li>
                <li><strong>¿Cuál es el flujo de trabajo para generar reportes administrativos mensuales?</strong> (incluya todos los pasos y sistemas utilizados)</li>
                <li><strong>Describa el proceso de comunicación con padres de familia</strong> (cómo se inicia, qué canales se usan, cómo se registra)</li>
                <li><strong>¿Cómo maneja actualmente el archivo y búsqueda de documentos estudiantiles?</strong> (proceso completo desde recepción hasta consulta)</li>
                <li><strong>Describa el flujo de trabajo para el control de asistencia diario</strong> (desde la toma hasta el reporte)</li>
                <li><strong>¿Cuál es el proceso actual para generar comunicados masivos a la comunidad educativa?</strong></li>
                <li><strong>Describa el flujo de trabajo para el seguimiento de estudiantes con necesidades especiales</strong></li>
                <li><strong>¿Cómo se procesa actualmente una solicitud de traslado o retiro de estudiante?</strong></li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Evaluación Específica</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black" start={9}>
                <li>¿Cuánto tiempo dedica diariamente a buscar documentos físicos?</li>
                <li>¿Con qué frecuencia debe duplicar información entre diferentes sistemas?</li>
                <li>¿Cuántas horas semanales dedica a generar reportes manuales?</li>
                <li>¿Qué porcentaje de su tiempo se pierde en procesos repetitivos?</li>
                <li>¿Con qué frecuencia ocurren errores por transcripción manual de datos?</li>
                <li>¿Qué tan fácil es encontrar información específica de un estudiante?</li>
                <li>¿Cuánto tiempo toma procesar una nueva admisión de estudiante?</li>
                <li>¿Qué procesos administrativos considera más ineficientes?</li>
              </ol>
            </div>
          </div>

          {/* Section 2: Financial Management */}
          <div className="mb-12 print:mb-8">
            <h2 className="text-2xl font-bold text-finland-blue mb-4 print:text-finland-blue">SECCIÓN 2: GESTIÓN FINANCIERA</h2>
            <p className="text-lg font-semibold text-finland-blue-light mb-6 print:text-finland-blue-light"><strong>Audiencia:</strong> Contadores, Administradores Financieros, Tesorería</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Flujo de Trabajo (FUNDAMENTALES)</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black">
                <li><strong>Describa paso a paso el proceso de facturación mensual</strong> (desde la generación hasta el envío y seguimiento)</li>
                <li><strong>¿Cuál es el flujo de trabajo para el control de pagos pendientes?</strong> (cómo se identifican, qué acciones se toman)</li>
                <li><strong>Describa el proceso de conciliación bancaria</strong> (pasos, herramientas, frecuencia, tiempo requerido)</li>
                <li><strong>¿Cómo se procesa actualmente un pago recibido?</strong> (desde la recepción hasta el registro en Odoo)</li>
                <li><strong>Describa el flujo de trabajo para generar reportes financieros</strong> (qué datos se necesitan, de dónde se obtienen)</li>
                <li><strong>¿Cuál es el proceso actual para manejar morosidad estudiantil?</strong> (identificación, seguimiento, acciones)</li>
                <li><strong>Describa el flujo de trabajo para el control de gastos operativos</strong> (aprobación, registro, seguimiento)</li>
                <li><strong>¿Cómo se maneja actualmente el presupuesto anual y su seguimiento?</strong></li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Evaluación Específica</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black" start={9}>
                <li>¿Cuánto tiempo toma generar una factura manualmente?</li>
                <li>¿Con qué frecuencia debe hacer seguimiento manual de pagos pendientes?</li>
                <li>¿Cuántas horas semanales dedica a conciliación bancaria?</li>
                <li>¿Qué tan fácil es identificar patrones de morosidad?</li>
                <li>¿Cuánto tiempo toma generar reportes financieros mensuales?</li>
                <li>¿Qué procesos financieros considera más propensos a errores?</li>
                <li>¿Cómo maneja actualmente los recordatorios de pago?</li>
                <li>¿Qué información financiera necesita pero no tiene disponible fácilmente?</li>
              </ol>
            </div>
          </div>

          {/* Section 3: Academic Processes */}
          <div className="mb-12 print:mb-8">
            <h2 className="text-2xl font-bold text-finland-blue mb-4 print:text-finland-blue">SECCIÓN 3: PROCESOS ACADÉMICOS</h2>
            <p className="text-lg font-semibold text-finland-blue-light mb-6 print:text-finland-blue-light"><strong>Audiencia:</strong> Docentes, Coordinadores Académicos, Directores</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Flujo de Trabajo (FUNDAMENTALES)</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black">
                <li><strong>Describa paso a paso el proceso de planificación de horarios</strong> (desde la asignación de materias hasta la distribución final)</li>
                <li><strong>¿Cuál es el flujo de trabajo para el control de asistencia diario?</strong> (toma, registro, seguimiento, reportes)</li>
                <li><strong>Describa el proceso de evaluación estudiantil</strong> (desde la planificación hasta el registro de calificaciones)</li>
                <li><strong>¿Cómo se maneja actualmente la comunicación académica con padres?</strong> (qué información se comparte, cuándo, cómo)</li>
                <li><strong>Describa el flujo de trabajo para generar reportes de progreso</strong> (qué datos se incluyen, cómo se compilan)</li>
                <li><strong>¿Cuál es el proceso actual para el seguimiento de estudiantes con bajo rendimiento?</strong></li>
                <li><strong>Describa el flujo de trabajo para la planificación curricular</strong> (selección de contenidos, recursos, metodologías)</li>
                <li><strong>¿Cómo se maneja actualmente la comunicación entre docentes y coordinación académica?</strong></li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Evaluación Específica</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black" start={9}>
                <li>¿Cuánto tiempo dedica semanalmente a planificar horarios?</li>
                <li>¿Cómo lleva el control de asistencia de estudiantes?</li>
                <li>¿Cuánto tiempo toma calificar y registrar evaluaciones?</li>
                <li>¿Con qué frecuencia comunica con padres de familia?</li>
                <li>¿Qué tan fácil es generar reportes de progreso estudiantil?</li>
                <li>¿Cómo maneja la comunicación con estudiantes y padres?</li>
                <li>¿Qué información académica necesita pero no tiene disponible?</li>
                <li>¿Qué procesos académicos considera más ineficientes?</li>
              </ol>
            </div>
          </div>

          {/* Section 4: Human Resources */}
          <div className="mb-12 print:mb-8">
            <h2 className="text-2xl font-bold text-finland-blue mb-4 print:text-finland-blue">SECCIÓN 4: RECURSOS HUMANOS</h2>
            <p className="text-lg font-semibold text-finland-blue-light mb-6 print:text-finland-blue-light"><strong>Audiencia:</strong> RRHH, Administradores, Directores</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Flujo de Trabajo (FUNDAMENTALES)</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black">
                <li><strong>Describa paso a paso el proceso de contratación de nuevo personal</strong> (desde la solicitud hasta la incorporación)</li>
                <li><strong>¿Cuál es el flujo de trabajo para el control de asistencia del personal?</strong> (registro, seguimiento, reportes)</li>
                <li><strong>Describa el proceso de evaluación de desempeño</strong> (planificación, ejecución, seguimiento, documentación)</li>
                <li><strong>¿Cómo se maneja actualmente la gestión de capacitaciones?</strong> (identificación de necesidades, planificación, seguimiento)</li>
                <li><strong>Describa el flujo de trabajo para el procesamiento de nómina</strong> (datos necesarios, cálculos, pagos, reportes)</li>
                <li><strong>¿Cuál es el proceso actual para el manejo de permisos y vacaciones del personal?</strong></li>
                <li><strong>Describa el flujo de trabajo para la gestión de expedientes del personal</strong> (documentación, actualización, consulta)</li>
                <li><strong>¿Cómo se procesa actualmente una solicitud de cambio de horario o condiciones laborales?</strong></li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Evaluación Específica</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black" start={9}>
                <li>¿Cómo lleva el control de asistencia del personal?</li>
                <li>¿Cuánto tiempo toma procesar la nómina mensualmente?</li>
                <li>¿Con qué frecuencia evalúa el desempeño del personal?</li>
                <li>¿Cómo gestiona las capacitaciones del personal?</li>
                <li>¿Qué tan fácil es acceder a información del personal?</li>
                <li>¿Qué procesos de RRHH considera más ineficientes?</li>
                <li>¿Cómo maneja los procesos de contratación?</li>
                <li>¿Qué información de RRHH necesita pero no tiene disponible?</li>
              </ol>
            </div>
          </div>

          {/* Section 5: Marketing and Admissions */}
          <div className="mb-12 print:mb-8">
            <h2 className="text-2xl font-bold text-finland-blue mb-4 print:text-finland-blue">SECCIÓN 5: MARKETING Y ADMISIONES</h2>
            <p className="text-lg font-semibold text-finland-blue-light mb-6 print:text-finland-blue-light"><strong>Audiencia:</strong> Marketing, Admisiones, Coordinadores</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Flujo de Trabajo (FUNDAMENTALES)</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black">
                <li><strong>Describa paso a paso el proceso de captación de nuevos estudiantes</strong> (desde el primer contacto hasta la solicitud formal)</li>
                <li><strong>¿Cuál es el flujo de trabajo para el seguimiento de leads?</strong> (identificación, clasificación, acciones de nurturing)</li>
                <li><strong>Describa el proceso de evaluación de solicitudes de admisión</strong> (criterios, documentos, entrevistas, decisión)</li>
                <li><strong>¿Cómo se maneja actualmente la comunicación con prospectos?</strong> (canales, frecuencia, contenido, seguimiento)</li>
                <li><strong>Describa el flujo de trabajo para campañas de marketing</strong> (planificación, ejecución, medición, optimización)</li>
                <li><strong>¿Cuál es el proceso actual para el análisis de efectividad de marketing?</strong> (métricas, herramientas, reportes)</li>
                <li><strong>Describa el flujo de trabajo para eventos de captación</strong> (planificación, ejecución, seguimiento de leads)</li>
                <li><strong>¿Cómo se procesa actualmente una solicitud de información sobre la institución?</strong></li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Evaluación Específica</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black" start={9}>
                <li>¿Cómo gestiona los leads de nuevos estudiantes?</li>
                <li>¿Cuánto tiempo toma procesar una solicitud de admisión?</li>
                <li>¿Con qué frecuencia hace seguimiento a prospectos?</li>
                <li>¿Cómo mide la efectividad de sus campañas de marketing?</li>
                <li>¿Qué tan fácil es identificar el origen de nuevos estudiantes?</li>
                <li>¿Cómo maneja la comunicación con prospectos?</li>
                <li>¿Qué información de marketing necesita pero no tiene?</li>
                <li>¿Qué procesos de admisiones considera más ineficientes?</li>
              </ol>
            </div>
          </div>

          {/* Section 6: Operations */}
          <div className="mb-12 print:mb-8">
            <h2 className="text-2xl font-bold text-finland-blue mb-4 print:text-finland-blue">SECCIÓN 6: OPERACIONES</h2>
            <p className="text-lg font-semibold text-finland-blue-light mb-6 print:text-finland-blue-light"><strong>Audiencia:</strong> Mantenimiento, Operaciones, Administradores</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Flujo de Trabajo (FUNDAMENTALES)</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black">
                <li><strong>Describa paso a paso el proceso de control de inventario</strong> (desde la recepción hasta el consumo y reposición)</li>
                <li><strong>¿Cuál es el flujo de trabajo para el mantenimiento preventivo?</strong> (planificación, ejecución, seguimiento, documentación)</li>
                <li><strong>Describa el proceso de gestión de órdenes de compra</strong> (solicitud, aprobación, compra, recepción, pago)</li>
                <li><strong>¿Cómo se maneja actualmente la coordinación con proveedores?</strong> (selección, comunicación, seguimiento, evaluación)</li>
                <li><strong>Describa el flujo de trabajo para el control de costos operativos</strong> (identificación, registro, análisis, reportes)</li>
                <li><strong>¿Cuál es el proceso actual para la gestión de instalaciones y equipos?</strong> (mantenimiento, reparaciones, actualizaciones)</li>
                <li><strong>Describa el flujo de trabajo para la gestión de suministros</strong> (necesidades, compras, almacenamiento, distribución)</li>
                <li><strong>¿Cómo se procesa actualmente una solicitud de mantenimiento o reparación?</strong></li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Evaluación Específica</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black" start={9}>
                <li>¿Cómo lleva el control de inventario de suministros?</li>
                <li>¿Con qué frecuencia realiza mantenimiento preventivo?</li>
                <li>¿Cómo gestiona las órdenes de compra?</li>
                <li>¿Qué tan fácil es identificar costos operativos?</li>
                <li>¿Cómo coordina con proveedores?</li>
                <li>¿Qué procesos operativos considera más ineficientes?</li>
                <li>¿Qué información operativa necesita pero no tiene?</li>
                <li>¿Cómo maneja el control de costos operativos?</li>
              </ol>
            </div>
          </div>

          {/* Section 7: Technology */}
          <div className="mb-12 print:mb-8">
            <h2 className="text-2xl font-bold text-finland-blue mb-4 print:text-finland-blue">SECCIÓN 7: TECNOLOGÍA</h2>
            <p className="text-lg font-semibold text-finland-blue-light mb-6 print:text-finland-blue-light"><strong>Audiencia:</strong> TI, Sistemas, Administradores</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Flujo de Trabajo (FUNDAMENTALES)</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black">
                <li><strong>Describa paso a paso el proceso de monitoreo de sistemas</strong> (qué se monitorea, cómo, frecuencia, acciones)</li>
                <li><strong>¿Cuál es el flujo de trabajo para el manejo de backups?</strong> (planificación, ejecución, verificación, almacenamiento)</li>
                <li><strong>Describa el proceso de soporte técnico</strong> (recepción de solicitudes, clasificación, resolución, seguimiento)</li>
                <li><strong>¿Cómo se maneja actualmente la gestión de usuarios y accesos?</strong> (creación, modificación, eliminación, auditoría)</li>
                <li><strong>Describa el flujo de trabajo para la gestión de seguridad</strong> (monitoreo, detección de amenazas, respuesta, documentación)</li>
                <li><strong>¿Cuál es el proceso actual para la gestión de actualizaciones de software?</strong> (evaluación, planificación, implementación, rollback)</li>
                <li><strong>Describa el flujo de trabajo para la gestión de equipos de TI</strong> (inventario, mantenimiento, actualizaciones, disposición)</li>
                <li><strong>¿Cómo se procesa actualmente una solicitud de nuevo software o servicio tecnológico?</strong></li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Evaluación Específica</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black" start={9}>
                <li>¿Cómo monitorea el rendimiento de los sistemas?</li>
                <li>¿Con qué frecuencia realiza backups de información?</li>
                <li>¿Cómo maneja el soporte técnico al personal?</li>
                <li>¿Qué tan fácil es identificar problemas de sistemas?</li>
                <li>¿Cómo gestiona el acceso a sistemas?</li>
                <li>¿Qué procesos de TI considera más ineficientes?</li>
                <li>¿Qué información de sistemas necesita pero no tiene?</li>
                <li>¿Cómo maneja la seguridad de la información?</li>
              </ol>
            </div>
          </div>

          {/* Cross-cutting ROI Questions */}
          <div className="mb-12 print:mb-8">
            <h2 className="text-2xl font-bold text-finland-blue mb-4 print:text-finland-blue">PREGUNTAS TRANSVERSALES DE ROI</h2>
            <p className="text-lg font-semibold text-finland-blue-light mb-6 print:text-finland-blue-light"><strong>Aplican a todas las secciones</strong></p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Impacto y Automatización</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black">
                <li>¿Qué tareas repetitivas consume más tiempo en su departamento?</li>
                <li>¿Cuántas horas semanales se podrían ahorrar con automatización?</li>
                <li>¿Qué procesos considera más críticos para el funcionamiento de la institución?</li>
                <li>¿Cuál sería el impacto de reducir errores humanos en un 90%?</li>
                <li>¿Qué información necesita en tiempo real pero no tiene disponible?</li>
                <li>¿Cómo mejoraría la comunicación entre departamentos?</li>
                <li>¿Qué decisiones se toman sin información completa?</li>
                <li>¿Cuál sería el valor de tener reportes automáticos y en tiempo real?</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preguntas de Priorización</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black" start={9}>
                <li>¿Qué proceso mejoraría primero si tuviera recursos ilimitados?</li>
                <li>¿Qué automatización tendría mayor impacto en la satisfacción del personal?</li>
                <li>¿Qué mejora tendría mayor impacto en la satisfacción de padres y estudiantes?</li>
                <li>¿Qué proceso es más crítico para la continuidad del negocio?</li>
                <li>¿Qué mejora generaría mayor ahorro de costos?</li>
              </ol>
            </div>
          </div>

          {/* Additional Strategic Questions */}
          <div className="mb-12 print:mb-8">
            <h2 className="text-2xl font-bold text-finland-blue mb-4 print:text-finland-blue">PREGUNTAS ESTRATÉGICAS ADICIONALES</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Cumplimiento Legal y Auditoría</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black">
                <li>¿Cómo manejan actualmente la protección de datos estudiantiles y de padres (conforme a Ley 8968 de Costa Rica)?</li>
                <li>¿Qué procesos existen para auditorías internas o externas (ej. Ministerio de Educación)?</li>
                <li>¿Cómo se documentan y archivan las políticas internas y reglamentos institucionales?</li>
                <li>¿Qué tan preparado está el colegio para responder a incidentes (fallas tecnológicas, emergencias de seguridad, crisis de comunicación)?</li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Experiencia del Cliente (Padres y Estudiantes)</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black" start={5}>
                <li>¿Cómo recopilan retroalimentación de padres y estudiantes sobre su experiencia?</li>
                <li>¿Qué tan fácil es para un padre/estudiante acceder a información crítica (notas, pagos, asistencia, actividades)?</li>
                <li>¿Qué procesos existen para manejar quejas o solicitudes especiales de padres?</li>
                <li>¿Qué parte del proceso educativo genera más insatisfacción o frustración?</li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Inteligencia de Negocio y KPIs</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black" start={9}>
                <li>¿Qué indicadores clave de desempeño (KPIs) se utilizan para tomar decisiones en cada área?</li>
                <li>¿Qué tan integrado está el flujo de datos entre departamentos (ej. finanzas, académicos, admisiones)?</li>
                <li>¿Qué información se necesita en dashboards en tiempo real que hoy no está disponible?</li>
                <li>¿Cómo se generan actualmente los informes para la junta directiva o dueños del colegio?</li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Preparación Digital y Cambio Organizacional</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black" start={13}>
                <li>¿Qué nivel de conocimiento y uso de herramientas digitales tiene el personal actualmente?</li>
                <li>¿Qué tan abierta está la comunidad educativa a cambiar procesos tradicionales por automatizados?</li>
                <li>¿Qué procesos generan mayor resistencia al cambio?</li>
                <li>¿Qué capacitaciones serían necesarias para que la adopción de nuevas tecnologías sea exitosa?</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-finland-blue-light mb-4 print:text-finland-blue-light">Visión Estratégica y Crecimiento</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 print:text-black" start={17}>
                <li>¿Cuáles son las metas estratégicas de la institución para los próximos 3–5 años?</li>
                <li>¿Qué papel juega la tecnología actualmente en alcanzar esas metas?</li>
                <li>¿Dónde consideran que la institución pierde más oportunidades de crecimiento por falta de eficiencia?</li>
                <li>¿Qué procesos impactan más la imagen y reputación del colegio frente a padres y comunidad?</li>
              </ol>
            </div>
          </div>

          {/* Notes Section */}
          <div className="print:mt-12">
            <h2 className="text-2xl font-bold text-finland-blue mb-4 print:text-finland-blue">NOTAS ADICIONALES</h2>
            <div className="space-y-4 text-gray-700 print:text-black">
              <div>
                <h3 className="text-lg font-semibold mb-2">Observaciones del Entrevistador:</h3>
                <div className="border border-gray-300 rounded p-4 min-h-[100px] print:min-h-[150px]">
                  <p className="text-gray-500 italic">Escriba aquí observaciones adicionales, pain points identificados, oportunidades de mejora, y cualquier insight relevante...</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Próximos Pasos:</h3>
                <div className="border border-gray-300 rounded p-4 min-h-[80px] print:min-h-[100px]">
                  <p className="text-gray-500 italic">Documente aquí los próximos pasos acordados, documentos adicionales requeridos, y seguimientos necesarios...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Footer */}
      <div className="hidden print:block print:text-center print:text-gray-500 print:text-sm print:mt-8">
        <p>Finland School - Análisis de Procesos y Oportunidades de Automatización</p>
        <p>Página ___ de ___ | Entrevistador: _______________ | Fecha: _______________</p>
      </div>
    </div>
  );
}
