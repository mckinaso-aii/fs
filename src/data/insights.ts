// Finland School Business Intelligence Data
export interface DepartmentInsight {
  department: string;
  currentProcesses: string[];
  bottlenecks: string[];
  automationOpportunities: string[];
  aiOpportunities: string[];
  roiPotential: number;
  effortLevel: 'Low' | 'Medium' | 'High';
  criticality: 'Low' | 'Medium' | 'High';
  priority: 'Low' | 'Medium' | 'High';
  estimatedSavings: number;
  implementationTime: string;
}

export interface ProcessFlow {
  name: string;
  currentSteps: string[];
  proposedSteps: string[];
  efficiencyGain: number;
  automationLevel: number;
}

export const finlandSchoolInsights: DepartmentInsight[] = [
  {
    department: 'Administración General',
    currentProcesses: [
      'Gestión manual de documentos',
      'Control de asistencia en papel',
      'Comunicación por WhatsApp/email',
      'Archivo físico de expedientes',
      'Reportes manuales en Excel'
    ],
    bottlenecks: [
      'Tiempo excesivo en búsqueda de documentos',
      'Duplicación de información entre sistemas',
      'Errores humanos en transcripción de datos',
      'Falta de integración entre Odoo y procesos académicos'
    ],
    automationOpportunities: [
      'Digitalización completa de expedientes',
      'Automatización de reportes administrativos',
      'Sistema de gestión documental integrado',
      'Automatización de comunicaciones masivas',
      'Dashboard administrativo en tiempo real'
    ],
    aiOpportunities: [
      'Predicción de deserción estudiantil',
      'Análisis de rendimiento académico',
      'Chatbot para consultas administrativas',
      'Optimización de horarios y recursos',
      'Análisis predictivo de necesidades de personal'
    ],
    roiPotential: 85,
    effortLevel: 'Medium',
    criticality: 'High',
    priority: 'High',
    estimatedSavings: 45000,
    implementationTime: '3-4 meses'
  },
  {
    department: 'Facturación y Cobros',
    currentProcesses: [
      'Facturación manual en Odoo',
      'Control de pagos en Excel',
      'Seguimiento de morosidad manual',
      'Generación de reportes financieros básicos',
      'Conciliación bancaria manual'
    ],
    bottlenecks: [
      'Procesos de facturación lentos',
      'Falta de automatización en recordatorios de pago',
      'Errores en conciliación bancaria',
      'Reportes financieros limitados',
      'Falta de integración con sistemas bancarios'
    ],
    automationOpportunities: [
      'Automatización completa de facturación',
      'Sistema de recordatorios automáticos',
      'Conciliación bancaria automatizada',
      'Dashboard financiero en tiempo real',
      'Integración con sistemas de pago digital'
    ],
    aiOpportunities: [
      'Predicción de riesgo de morosidad',
      'Optimización de estrategias de cobro',
      'Análisis de patrones de pago',
      'Recomendaciones de políticas de crédito',
      'Detección de anomalías en transacciones'
    ],
    roiPotential: 95,
    effortLevel: 'Low',
    criticality: 'High',
    priority: 'High',
    estimatedSavings: 32000,
    implementationTime: '2-3 meses'
  },
  {
    department: 'Gestión Académica',
    currentProcesses: [
      'Planificación manual de horarios',
      'Control de asistencia en papel',
      'Evaluaciones en formato físico',
      'Comunicación con padres por WhatsApp',
      'Reportes de progreso manuales'
    ],
    bottlenecks: [
      'Planificación de horarios compleja y propensa a errores',
      'Falta de seguimiento en tiempo real del progreso',
      'Comunicación fragmentada con padres',
      'Evaluaciones no integradas con sistema principal',
      'Reportes académicos tardíos'
    ],
    automationOpportunities: [
      'Sistema de gestión académica integrado',
      'Automatización de planificación de horarios',
      'Portal para padres con acceso en tiempo real',
      'Sistema de evaluaciones digitales',
      'Reportes automáticos de progreso'
    ],
    aiOpportunities: [
      'Análisis predictivo del rendimiento estudiantil',
      'Recomendaciones personalizadas de aprendizaje',
      'Detección temprana de problemas académicos',
      'Optimización de metodologías de enseñanza',
      'Análisis de efectividad curricular'
    ],
    roiPotential: 75,
    effortLevel: 'High',
    criticality: 'High',
    priority: 'High',
    estimatedSavings: 38000,
    implementationTime: '4-6 meses'
  }
];

export function calculateTotalROI(): number {
  const totalSavings = finlandSchoolInsights.reduce((sum, insight) => sum + insight.estimatedSavings, 0);
  const totalInvestment = 150000;
  return (totalSavings / totalInvestment) * 100;
}

export function getHighPriorityInsights(): DepartmentInsight[] {
  return finlandSchoolInsights.filter(insight => insight.priority === 'High');
}

export function getRecommendedPlan(): string {
  const highPriority = getHighPriorityInsights();
  const totalSavings = highPriority.reduce((sum, insight) => sum + insight.estimatedSavings, 0);
  return `Plan Recomendado: Implementación por fases de ${highPriority.length} departamentos prioritarios con ROI estimado del ${calculateTotalROI().toFixed(1)}% y ahorros anuales de $${totalSavings.toLocaleString()}`;
}

export function allDepartmentInsights(): DepartmentInsight[] {
  return finlandSchoolInsights;
}
