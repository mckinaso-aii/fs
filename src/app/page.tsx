'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ChartBarIcon, 
  CogIcon, 
  DocumentChartBarIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import { calculateTotalROI, getHighPriorityInsights, getRecommendedPlan, allDepartmentInsights } from '@/data/insights'
import MermaidChart from '@/components/MermaidChart'

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  // Check for existing authentication on component mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('finland-school-auth')
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
    setIsCheckingAuth(false)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        setIsAuthenticated(true)
        localStorage.setItem('finland-school-auth', 'true')
      } else {
        alert('Contraseña incorrecta')
      }
    } catch {
      alert('Error de conexión')
    } finally {
      setIsLoading(false)
    }
  }

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-finland-school">
        <div className="glass-effect rounded-2xl p-8 w-full max-w-md mx-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-finland-blue-light mx-auto mb-4"></div>
            <p className="text-white/80">Verificando autenticación...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-finland-school p-4">
        <div className="glass-effect rounded-2xl p-6 sm:p-8 w-full max-w-md">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold finland-text mb-2">Finland School</h1>
            <p className="text-white/80 text-sm sm:text-base">Análisis de Inteligencia de Negocio</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Contraseña de Acceso
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-finland-blue-light focus:border-transparent text-sm sm:text-base"
                placeholder="Ingrese la contraseña"
                autoComplete="current-password"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-finland-blue to-finland-blue-light hover:from-finland-blue-light hover:to-finland-blue text-white font-semibold py-2 sm:py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isLoading ? 'Verificando...' : 'Acceder a la Propuesta'}
            </button>
          </form>
          
          <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-white/60">
            <p>Desarrollado por <span className="text-finland-blue-light">aii.cr</span></p>
          </div>
        </div>
      </div>
    )
  }

  const totalROI = calculateTotalROI()

  return (
    <div className="min-h-screen bg-finland-school">
      {/* Header */}
      <header className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold finland-text truncate">Finland School</h1>
              <p className="text-white/80 text-xs sm:text-sm truncate">Análisis de Inteligencia de Negocio</p>
            </div>
            <button
              onClick={() => {
                setIsAuthenticated(false)
                localStorage.removeItem('finland-school-auth')
              }}
              className="text-white/60 hover:text-white transition-colors text-sm sm:text-base ml-2 flex-shrink-0"
            >
              <span className="hidden sm:inline">Cerrar Sesión</span>
              <span className="sm:hidden">Salir</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Diagnóstico de <span className="finland-text">Inteligencia de Negocio</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Análisis integral de Finland School con enfoque en optimización de procesos educativos, 
            automatización administrativa y transformación digital para maximizar eficiencia operativa
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="roi-card">
            <div className="flex items-center mb-4">
              <BuildingOfficeIcon className="h-8 w-8 text-finland-blue-light mr-3" />
              <h3 className="text-xl font-semibold text-white">Institución Educativa</h3>
            </div>
            <p className="text-white/70">
              Finland School - Educación preescolar y primaria con metodología finlandesa en Costa Rica
            </p>
          </div>

          <div className="roi-card">
            <div className="flex items-center mb-4">
              <ChartBarIcon className="h-8 w-8 text-finland-blue-light mr-3" />
              <h3 className="text-xl font-semibold text-white">ROI Promedio</h3>
            </div>
            <p className="text-white/70">
              <span className="text-finland-blue-light font-bold text-2xl">{totalROI.toFixed(1)}%</span> de retorno de inversión potencial identificado
            </p>
          </div>

          <div className="roi-card">
            <div className="flex items-center mb-4">
              <CogIcon className="h-8 w-8 text-finland-blue-light mr-3" />
              <h3 className="text-xl font-semibold text-white">Departamentos Analizados</h3>
            </div>
            <p className="text-white/70">
              <span className="text-finland-blue-light font-bold text-2xl">3</span> áreas operativas con prioridad alta identificada
            </p>
          </div>

          <div className="roi-card">
            <div className="flex items-center mb-4">
              <CheckCircleIcon className="h-8 w-8 text-finland-blue-light mr-3" />
              <h3 className="text-xl font-semibold text-white">Automatizaciones Sugeridas</h3>
            </div>
            <p className="text-white/70">
              <span className="text-finland-blue-light font-bold text-2xl">15+</span> oportunidades de automatización identificadas
            </p>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <Link href="/analisis-flujo" className="roi-card group cursor-pointer">
            <div className="flex items-center mb-4">
              <DocumentChartBarIcon className="h-10 w-10 text-finland-blue-light mr-4" />
              <h3 className="text-2xl font-semibold text-white">Análisis de Procesos Educativos</h3>
            </div>
            <p className="text-white/70 mb-4">
              Visualización detallada de procesos administrativos y académicos actuales vs propuestos con diagramas interactivos
            </p>
            <div className="text-finland-blue-light font-medium group-hover:text-finland-blue-light/80 transition-colors">
              Ver Análisis →
            </div>
          </Link>

          <Link href="/propuesta-valor" className="roi-card group cursor-pointer">
            <div className="flex items-center mb-4">
              <CurrencyDollarIcon className="h-10 w-10 text-finland-blue-light mr-4" />
              <h3 className="text-2xl font-semibold text-white">Análisis de ROI Educativo</h3>
            </div>
            <p className="text-white/70 mb-4">
              Análisis detallado de ROI por departamento, cuellos de botella y oportunidades de mejora en procesos educativos
            </p>
            <div className="text-finland-blue-light font-medium group-hover:text-finland-blue-light/80 transition-colors">
              Ver Análisis →
            </div>
          </Link>

          <Link href="/planes" className="roi-card group cursor-pointer">
            <div className="flex items-center mb-4">
              <CogIcon className="h-10 w-10 text-finland-blue-light mr-4" />
              <h3 className="text-2xl font-semibold text-white">Oportunidades de Automatización</h3>
            </div>
            <p className="text-white/70 mb-4">
              Matriz de prioridades con oportunidades de automatización e IA por nivel de esfuerzo e impacto
            </p>
            <div className="text-finland-blue-light font-medium group-hover:text-finland-blue-light/80 transition-colors">
              Ver Oportunidades →
            </div>
          </Link>

          <Link href="/implementacion" className="roi-card group cursor-pointer">
            <div className="flex items-center mb-4">
              <ClockIcon className="h-10 w-10 text-finland-blue-light mr-4" />
              <h3 className="text-2xl font-semibold text-white">Roadmap de Transformación</h3>
            </div>
            <p className="text-white/70 mb-4">
              Plan estratégico de implementación por fases con cronograma, hitos y tecnología educativa
            </p>
            <div className="text-finland-blue-light font-medium group-hover:text-finland-blue-light/80 transition-colors">
              Ver Roadmap →
            </div>
          </Link>

          <Link href="/cuestionario" className="roi-card group cursor-pointer">
            <div className="flex items-center mb-4">
              <UsersIcon className="h-10 w-10 text-finland-blue-light mr-4" />
              <h3 className="text-2xl font-semibold text-white">Cuestionario de Personal</h3>
            </div>
            <p className="text-white/70 mb-4">
              Sistema de evaluación para recopilar información detallada de procesos actuales del personal
            </p>
            <div className="text-finland-blue-light font-medium group-hover:text-finland-blue-light/80 transition-colors">
              Ver Cuestionario →
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
