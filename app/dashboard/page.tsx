"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  MessageCircle, 
  TrendingUp, 
  Clock, 
  Star, 
  Play,
  Target,
  Users,
  ArrowRight,
  Trophy,
  Lightbulb,
  Search,
  Sparkles,
  Crown,
  Filter} from "lucide-react"
import { recentMentorias, sugestoesTrilhas, trilhasData, trilhasEmAndamento } from "@/lib/data"
import AuthGuard from "@/components/auth-guard"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserStorage } from "@/types/User"

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserStorage | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [aiFormData, setAiFormData] = useState({
    interests: "",
    experience: "",
    goals: "",
    timeCommitment: ""
  })
  const [generatedTrilha, setGeneratedTrilha] = useState<any>(null)

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData')
    if (storedUserData) {
      try {
        const user = JSON.parse(storedUserData)
        setUserData(user)
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error)
      }
    }
  }, [])

  

  const availableTrilhas = Object.values(trilhasData).map(trilha => ({
    ...trilha,
    free: Math.random() > 0.5
  }))

  const getFilteredTrilhas = () => {
    const filtered = availableTrilhas.filter(trilha => {
      const matchesSearch = trilha.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           trilha.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      if (userData?.signature === "premium") {
        return matchesSearch 
      } else {
        return matchesSearch && trilha.free
      }
    })

    return filtered.slice(0, 6)
  }

  const handleGenerateCustomTrilha = async () => {
    if (!aiFormData.interests || !aiFormData.goals) return

    setIsGenerating(true)

    setTimeout(() => {
      const generatedTrilha = {
        id: "ai-generated-" + Date.now(),
        title: `Trilha Personalizada: ${aiFormData.interests}`,
        description: `Trilha customizada baseada em ${aiFormData.interests} para alcançar ${aiFormData.goals}`,
        image: "/ai-robot-coding.png",
        level: aiFormData.experience || "Iniciante",
        duration: aiFormData.timeCommitment || "6 meses",
        modules: [
          {
            id: "1",
            title: "Fundamentos",
            description: `Conceitos básicos de ${aiFormData.interests}`,
            contents: [],
            completed: false
          },
          {
            id: "2", 
            title: "Prática Intermediária",
            description: `Aplicação prática de ${aiFormData.interests}`,
            contents: [],
            completed: false
          },
          {
            id: "3",
            title: "Projeto Final",
            description: `Desenvolvendo projeto para ${aiFormData.goals}`,
            contents: [],
            completed: false
          }
        ],
        skills: aiFormData.interests.split(",").map(s => s.trim()),
        salary: "R$ 4.000 - R$ 10.000",
        rating: 4.8,
        students: "100+",
        free: false
      }

      setGeneratedTrilha(generatedTrilha)
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <AuthGuard>
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold">Dashboard</h1>
              </div>
              <Badge variant={userData?.signature === "premium" ? "default" : "secondary"}>
                {userData?.signature === "premium" ? "Premium" : "Free"}
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Olá, {userData?.email}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Trilhas Ativas</p>
                  <p className="text-2xl font-bold">{trilhasEmAndamento.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Mentorias Realizadas</p>
                  <p className="text-2xl font-bold">{recentMentorias.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Horas de Estudo</p>
                  <p className="text-2xl font-bold">24h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex-col p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Trophy className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Conquistas</p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                </div>
              </div>
              <Link href="/ranking">
                  <Button variant="outline" size="sm" className="cursor-pointer text-purple-600 border-purple-200 hover:bg-purple-400">
                    Ver TrilhaXP
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trilhas em Andamento */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Trilhas em Andamento</span>
                </CardTitle>
                <CardDescription>
                  Continue de onde parou nas suas trilhas de aprendizado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trilhasEmAndamento.map((trilha) => (
                  <div key={trilha.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <img 
                        src={trilha.image} 
                        alt={trilha.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{trilha.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Próximo módulo: {trilha.nextModule}
                      </p>
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground">
                          Última atividade: {trilha.lastActivity}
                        </p>
                      </div>
                    </div>
                    <Button size="sm" asChild>
                      <Link href={`/trilhas/${trilha.id}/progresso`}>
                        <Play className="w-4 h-4 mr-1" />
                        Continuar
                      </Link>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Últimas Mentorias */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Últimas Mentorias</span>
                </CardTitle>
                <CardDescription>
                  Suas sessões de mentoria recentes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentMentorias.map((mentoria) => (
                  <div key={mentoria.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{mentoria.topic}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{mentoria.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {mentoria.mentor}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{mentoria.duration}</span>
                      <span>{new Date(mentoria.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/mentoria">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Agendar Mentoria
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Buscar Nova Trilha</span>
              </CardTitle>
              <CardDescription>
                Encontre a trilha perfeita para seus objetivos
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Barra de Pesquisa */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por área, tecnologia ou cargo..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Geração Personalizada para Premium */}
              {userData?.signature === "premium" && (
                <div className="mb-8 p-6 border rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                  <div className="flex items-center space-x-2 mb-4">
                    <Crown className="w-5 h-5 text-purple-600" />
                    <h3 className="text-lg font-semibold">Trilha Personalizada com IA</h3>
                    <Badge variant="default" className="bg-purple-600">Premium</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Gere uma trilha totalmente personalizada com base nos seus objetivos e experiência
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="interests">Áreas de Interesse</Label>
                      <Input
                        id="interests"
                        placeholder="Ex: React, Python, UX Design..."
                        value={aiFormData.interests}
                        onChange={(e) => setAiFormData({...aiFormData, interests: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="experience">Nível de Experiência</Label>
                      <Input
                        id="experience"
                        placeholder="Ex: Iniciante, Intermediário, Avançado"
                        value={aiFormData.experience}
                        onChange={(e) => setAiFormData({...aiFormData, experience: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="goals">Objetivos Profissionais</Label>
                      <Input
                        id="goals"
                        placeholder="Ex: Conseguir primeiro emprego, mudar de área..."
                        value={aiFormData.goals}
                        onChange={(e) => setAiFormData({...aiFormData, goals: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="timeCommitment">Tempo Disponível</Label>
                      <Input
                        id="timeCommitment"
                        placeholder="Ex: 2 horas/dia, fins de semana..."
                        value={aiFormData.timeCommitment}
                        onChange={(e) => setAiFormData({...aiFormData, timeCommitment: e.target.value})}
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={handleGenerateCustomTrilha}
                    disabled={isGenerating || !aiFormData.interests || !aiFormData.goals}
                    className="w-full md:w-auto"
                  >
                    {isGenerating ? (
                      <>
                        <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                        Gerando trilha personalizada...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Gerar Trilha Personalizada
                      </>
                    )}
                  </Button>

                  {/* Trilha Gerada */}
                  {generatedTrilha && (
                    <div className="mt-6 p-4 border rounded-lg bg-white dark:bg-gray-800">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-600 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{generatedTrilha.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {generatedTrilha.description}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {generatedTrilha.duration}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-3 h-3 mr-1" />
                              {generatedTrilha.students}
                            </span>
                            <span className="flex items-center">
                              <Star className="w-3 h-3 mr-1" />
                              {generatedTrilha.rating}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-green-600 mb-3">
                            {generatedTrilha.salary}
                          </p>
                          <Button size="sm">
                            <Play className="w-4 h-4 mr-1" />
                            Iniciar Trilha
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Lista de Trilhas Disponíveis */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">
                    Todas as Trilhas
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getFilteredTrilhas().map((trilha) => (
                    <div key={trilha.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <img 
                            src={trilha.image} 
                            alt={trilha.title}
                            className="w-8 h-8 object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{trilha.title}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={trilha.free ? "yellow" : "secondary"} className="text-xs">
                              {trilha.free ? "Gratuita" : "Premium"}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{trilha.level}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {trilha.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {trilha.duration}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          {trilha.rating}
                        </span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full" asChild>
                        <Link href={`/trilhas/${trilha.id}`}>
                          <ArrowRight className="w-4 h-4 mr-1" />
                          Ver Trilha
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>

                {getFilteredTrilhas().length === 0 && (
                  <div className="text-center py-8">
                    <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Nenhuma trilha encontrada</h3>
                    <p className="text-muted-foreground">
                      Tente ajustar sua pesquisa
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sugestões de Próximas Trilhas */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5" />
                <span>Sugestões para Você</span>
              </CardTitle>
              <CardDescription>
                Trilhas recomendadas baseadas no seu perfil e mercado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sugestoesTrilhas.map((trilha) => (
                  <div key={trilha.id} className="flex space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                      <img 
                        src={trilha.image} 
                        alt={trilha.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{trilha.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {trilha.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {trilha.demandLevel}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {trilha.duration}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-green-600 mb-3">
                        {trilha.salary}
                      </p>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/trilhas/${trilha.id}`}>
                          <ArrowRight className="w-4 h-4 mr-1" />
                          Ver Trilha
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>      
      </div>
      </div>
    </AuthGuard>
  )
}
