import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, Star, Clock, TrendingUp, Check, Crown, Zap, Target, AlertTriangle, BarChart3, Brain } from "lucide-react"
import React from "react"
import Image from "next/image"

export default function LearningHub() {
  return (
    <div className="min-h-screen bg-background">

    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
        <Image
          src="/images/logo-hub-2.png"
          alt="UpTrail Background"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
        
      <div className="container mx-auto text-center max-w-5xl relative z-10">
                 <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 border border-green-200 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
           <AlertTriangle className="w-4 h-4 text-green-600" />
           92% das habilidades essenciais vão mudar até 2030
         </div>

        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
          O futuro do trabalho já começou. <span className="text-primary">Você está pronto?</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto text-pretty">
          Prepare-se para as profissões que mais crescem com trilhas práticas e mentoria especializada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8 py-6 rounded-xl">
            <Target className="w-5 h-5 mr-2" />
            <a href="/login">Comece seu treinamento agora</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl bg-transparent">
            <MessageCircle className="w-5 h-5 mr-2" />
            <a href="/mentoria">Fale com IA Mentora</a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-0 bg-primary/5 hover:bg-primary/10 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">+64%</div>
              <div className="text-sm text-muted-foreground font-medium">
                Crescimento para especialistas em IA até 2030
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-primary/5 hover:bg-primary/10 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">93%</div>
              <div className="text-sm text-muted-foreground font-medium">
                Das empresas investirão em Big Data e IA
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-primary/5 hover:bg-primary/10 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <div className="text-sm text-muted-foreground font-medium">
                Das empresas buscam resiliência em seus times
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Por que treinar agora?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O mercado de trabalho está mudando rapidamente. Veja as tendências que definem o futuro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Linha do tempo */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-6">Evolução do Mercado 2025 → 2030</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">2025: Mais Humano</div>
                    <div className="text-sm text-muted-foreground">Criatividade e pensamento crítico em alta</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">2027: Mais IA</div>
                    <div className="text-sm text-muted-foreground">Automação e análise de dados dominam</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">2030: Colaboração Híbrida</div>
                    <div className="text-sm text-muted-foreground">Humanos + IA trabalhando juntos</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-foreground mb-4">Profissões em Transformação</h3>
              </div>

              <Card className="border-0 bg-primary/5">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Em Alta Demanda
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Especialista em IA</span>
                    <Badge className="bg-primary text-primary-foreground">+64%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Cientista de Dados</span>
                    <Badge className="bg-primary text-primary-foreground">+58%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Desenvolvedor Full-Stack</span>
                    <Badge className="bg-primary text-primary-foreground">+45%</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-muted-foreground" />
                    Em Declínio
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Funções Administrativas</span>
                    <Badge className="bg-primary text-primary-foreground">-23%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Secretariado Tradicional</span>
                    <Badge className="bg-primary text-primary-foreground">-18%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Operações Manuais</span>
                    <Badge className="bg-primary text-primary-foreground">-31%</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="mentoria" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Conecte-se com Mentores</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Receba orientação de profissionais experientes em sua área de interesse. Nossa comunidade de mentores está
            pronta para acelerar sua jornada de aprendizado.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">500+ Mentores</h3>
              <p className="text-sm text-muted-foreground">Profissionais experientes de grandes empresas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Chat Direto</h3>
              <p className="text-sm text-muted-foreground">Converse diretamente com seu mentor</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Crescimento Real</h3>
              <p className="text-sm text-muted-foreground">89% dos mentorados conseguem nova posição</p>
            </div>
          </div>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <a href="/mentoria">Encontre um Mentor</a>
          </Button>
        </div>
      </section>

      <section id="trilhas" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trilhas em Destaque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha sua jornada de transformação profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <a href="/trilhas/frontend-developer" className="block">
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=center"
                      alt="Desenvolvedor Frontend"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      Iniciante
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />6 meses
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Desenvolvedor Front-end Jr.
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Domine React, TypeScript e Next.js para criar interfaces modernas e responsivas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">                  
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        1.2k alunos
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                        4.8
                      </div>
                    </div>
                  </div>
                </CardContent>
              </a>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <a href="/trilhas/data-scientist" className="block">
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg mb-4 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center"
                      alt="Cientista de Dados"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-0">
                      Intermediário
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />8 meses
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Cientista de Dados
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Aprenda Python, Machine Learning e análise de dados para tomar decisões estratégicas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        856 alunos
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                        4.9
                      </div>
                    </div>
                  </div>
                </CardContent>
              </a>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <a href="/trilhas/ux-ui-designer" className="block">
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop&crop=center"
                      alt="Designer UX/UI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      Iniciante
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />5 meses
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Designer UX/UI</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Crie experiências digitais incríveis com Figma, prototipagem e pesquisa de usuário.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        2.1k alunos
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                        4.7
                      </div>
                    </div>
                  </div>
                </CardContent>
              </a>
            </Card>
          </div>
        </div>
      </section>

      <section id="planos" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transforme sua Carreira Hoje</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comece grátis e acelere seu crescimento profissional com planos que se adaptam ao seu ritmo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Plano Gratuito</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Perfeito para começar sua jornada
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">R$ 0</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Trilhas gratuitas</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">1 mentoria gratuita</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Mentoria por IA ilimitada</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Acesso limitado a 2 empresas que oferecem oportunidades de emprego</span>
                  </div>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-primary hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1 rounded-full flex items-center">
                  <Crown className="w-4 h-4 mr-1" />
                  Mais Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Plano Premium</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Para quem quer acelerar o crescimento
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">R$ 39</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">Trilhas personalizadas ilimitadas</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">Trilhas gratuitas</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">5 mentorias mensais</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">Descontos para mentorias avulsas</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">Acesso ilimitado às empresas que oferecem oportunidades de emprego</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">Recomendação de trilhas de acordo com as vagas.</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">Mentoria por IA ilimitada</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Assinar Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
