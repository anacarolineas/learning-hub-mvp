"use client"

import { useEffect, useState } from "react"
import { Search, MapPin, Users, Building2, Star, Lock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { UserStorage } from "@/types/User"
import { empresasParceiras } from "@/lib/data"



export default function EmpresasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSetor, setSelectedSetor] = useState("todos")
  const [userData, setUserData] = useState<UserStorage | null>(null)

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

  const setores = [...new Set(empresasParceiras.map((empresa) => empresa.setor))]

  const empresasFiltradas = empresasParceiras.filter((empresa) => {
    const matchNome = empresa.nome.toLowerCase().includes(searchTerm.toLowerCase())
    const matchSetor = selectedSetor === "todos" || empresa.setor === selectedSetor
    return matchNome && matchSetor
  })

  const totalVagas = empresasFiltradas.reduce((acc, empresa) => acc + empresa.totalVagas, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Empresas Parceiras</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecte-se diretamente com as melhores empresas do mercado. Clique em uma empresa para ver vagas disponíveis.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">{empresasFiltradas.length} Empresas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">{totalVagas} Vagas Abertas</span>
            </div>
          </div>
        </div>

        {userData?.signature === "premium" && (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar empresa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="w-full md:w-48">
            <Select value={selectedSetor} onValueChange={setSelectedSetor}>
              <SelectTrigger>
                <SelectValue placeholder="Todos os setores" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os setores</SelectItem>
                {setores.map((setor) => (
                  <SelectItem key={setor} value={setor}>
                    {setor}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {empresasFiltradas.map((empresa, index) => {
          const disabled = userData?.signature === "free" && index >= 2;

          const card = (
            <Card
              className={`h-full transition-all duration-200 relative ${
                disabled ? "" : "hover:shadow-lg hover:scale-105 cursor-pointer"
              }`}
            >
              <CardContent className={`p-6 ${disabled ? "blur-[2px] opacity-70" : ""}`}>
                <div className="text-center">
                  <img
                    src={empresa.logo || "/placeholder.svg"}
                    alt={`Logo ${empresa.nome}`}
                    className="w-20 h-20 rounded-lg object-cover border mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{empresa.nome}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{empresa.descricao}</p>

                  <div className="space-y-2 mb-4">
                    <Badge variant="secondary" className="text-xs">{empresa.setor}</Badge>
                    <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{empresa.localizacao}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                      <Users className="w-3 h-3" />
                      <span>{empresa.funcionarios} funcionários</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{empresa.rating}</span>
                    </div>
                  </div>

                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {empresa.totalVagas} vaga{empresa.totalVagas !== 1 ? "s" : ""} disponível{empresa.totalVagas !== 1 ? "is" : ""}
                  </Badge>
                </div>
              </CardContent>
              {disabled && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-[0.5px] rounded-lg">
                  <Lock className="w-10 h-10 text-gray-500" />
                </div>
              )}
            </Card>
          );

          return disabled ? (
            <div key={empresa.id}>{card}</div>
          ) : (
            <Link key={empresa.id} href={`/empresas/${empresa.slug}`}>{card}</Link>
          );
        })}
        </div>

        {empresasFiltradas.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhuma empresa encontrada</h3>
            <p className="text-gray-600">Tente ajustar os filtros para encontrar mais resultados.</p>
          </div>
        )}
      </div>
    </div>
  )
}
