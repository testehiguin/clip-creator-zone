import { AppSidebar } from "@/components/AppSidebar";
import { RankingCard } from "@/components/RankingCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider } from "@/components/ui/sidebar";
import { 
  Trophy,
  Crown,
  Target,
  Clock,
  TrendingUp,
  Users,
  Gift,
  Zap
} from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function ClipadorRanking() {
  const clipadorData = {
    name: "ClipMaster",
    avatar: avatarPlaceholder,
    rank: 1,
    credits: 2475
  };

  const currentRanking = [
    {
      position: 1,
      name: "ClipMaster",
      avatar: avatarPlaceholder,
      views: 450000,
      earnings: 2475.00,
      clipsCount: 34,
      trend: "up",
      isCurrentUser: true
    },
    {
      position: 2,
      name: "EditPro",
      avatar: avatarPlaceholder,
      views: 320000,
      earnings: 1760.00,
      clipsCount: 28,
      trend: "down"
    },
    {
      position: 3,
      name: "VideoWizard",
      avatar: avatarPlaceholder,
      views: 280000,
      earnings: 1540.00,
      clipsCount: 22,
      trend: "up"
    },
    {
      position: 4,
      name: "ClipGenius",
      avatar: avatarPlaceholder,
      views: 195000,
      earnings: 1072.50,
      clipsCount: 18,
      trend: "same"
    },
    {
      position: 5,
      name: "EditMaster",
      avatar: avatarPlaceholder,
      views: 156000,
      earnings: 858.00,
      clipsCount: 15,
      trend: "up"
    }
  ];

  const activeChallenge = {
    title: "Desafio Dezembro 2024 - GamerPro",
    description: "Competição de views para clipes de Valorant e CS2",
    daysLeft: 15,
    myPosition: 1,
    viewsToNext: 0,
    prizes: [
      { position: 1, amount: 500, description: "1º Lugar", current: true },
      { position: 2, amount: 300, description: "2º Lugar", viewsToReach: 130000 },
      { position: 3, amount: 150, description: "3º Lugar", viewsToReach: 170000 }
    ]
  };

  const otherChallenges = [
    {
      streamer: "StreamerX",
      title: "Desafio Stream Wars",
      myPosition: 3,
      daysLeft: 8,
      topPrize: 300,
      participants: 12
    },
    {
      streamer: "ProGamer",
      title: "FPS Masters",
      myPosition: 2,
      daysLeft: 22,
      topPrize: 750,
      participants: 18
    }
  ];

  const globalRanking = [
    {
      position: 1,
      name: "ClipMaster",
      avatar: avatarPlaceholder,
      views: 1250000,
      earnings: 6875.00,
      streamersCount: 8,
      isCurrentUser: true
    },
    {
      position: 2,
      name: "EditPro",
      avatar: avatarPlaceholder,
      views: 980000,
      earnings: 5390.00,
      streamersCount: 6
    },
    {
      position: 3,
      name: "VideoWizard",
      avatar: avatarPlaceholder,
      views: 820000,
      earnings: 4510.00,
      streamersCount: 5
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar 
          userType="clipador"
          userName={clipadorData.name}
          userAvatar={clipadorData.avatar}
          rank={clipadorData.rank}
          credits={clipadorData.credits}
        />
        
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-8">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    <span className="gradient-text">Rankings</span> e Desafios
                  </h1>
                  <p className="text-muted-foreground">
                    Acompanhe sua posição e participe dos desafios ativos
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="badge-rank rank-gold">
                    <Crown className="w-3 h-3 mr-1" />
                    🥇 Líder Global
                  </Badge>
                </div>
              </div>
            </div>

            {/* Desafio Principal */}
            <Card className="glass-card p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-warning" />
                  <div>
                    <h3 className="text-xl font-semibold">{activeChallenge.title}</h3>
                    <p className="text-muted-foreground">{activeChallenge.description}</p>
                  </div>
                </div>
                <Badge className="badge-rank">
                  <Clock className="w-3 h-3 mr-1" />
                  {activeChallenge.daysLeft} dias restantes
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {activeChallenge.prizes.map((prize) => (
                  <div 
                    key={prize.position} 
                    className={`glass-card p-4 rounded-lg text-center ${prize.current ? 'ring-2 ring-warning' : 'opacity-60'}`}
                  >
                    <div className="text-2xl mb-2">
                      {prize.position === 1 ? "🥇" : prize.position === 2 ? "🥈" : "🥉"}
                    </div>
                    <p className="text-2xl font-bold text-warning">R$ {prize.amount}</p>
                    <p className="text-sm text-muted-foreground">{prize.description}</p>
                    {prize.current && (
                      <p className="text-xs text-success font-semibold mt-1">🎯 Você está aqui!</p>
                    )}
                    {prize.viewsToReach && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {prize.viewsToReach.toLocaleString()} views para alcançar
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <Badge className="bg-success/10 text-success px-4 py-2">
                  <Target className="w-4 h-4 mr-2" />
                  Posição Atual: 1º Lugar • Mantendo a liderança!
                </Badge>
              </div>
            </Card>

            <Tabs defaultValue="current" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="current" className="flex items-center">
                  <Trophy className="w-4 h-4 mr-2" />
                  Desafio Atual
                </TabsTrigger>
                <TabsTrigger value="others" className="flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Outros Desafios
                </TabsTrigger>
                <TabsTrigger value="global" className="flex items-center">
                  <Crown className="w-4 h-4 mr-2" />
                  Ranking Global
                </TabsTrigger>
              </TabsList>

              {/* Ranking do Desafio Atual */}
              <TabsContent value="current" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Ranking - Desafio GamerPro</h2>
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="views">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="views">Por Views</SelectItem>
                        <SelectItem value="earnings">Por Ganhos</SelectItem>
                        <SelectItem value="clips">Por Clipes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  {currentRanking.map((clipper) => (
                    <RankingCard 
                      key={clipper.position} 
                      {...clipper}
                    />
                  ))}
                </div>

                {/* Próximos Passos */}
                <Card className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-4">🎯 Estratégia para Manter a Liderança</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2 text-success" />
                      <p className="font-semibold text-success">Mantenha o Ritmo</p>
                      <p className="text-sm text-muted-foreground">Continue enviando clipes de qualidade</p>
                    </div>
                    <div className="text-center">
                      <Target className="w-8 h-8 mx-auto mb-2 text-warning" />
                      <p className="font-semibold text-warning">Diversifique</p>
                      <p className="text-sm text-muted-foreground">Explore diferentes plataformas</p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="font-semibold text-primary">Timing</p>
                      <p className="text-sm text-muted-foreground">Poste nos horários de pico</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Outros Desafios */}
              <TabsContent value="others" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Outros Desafios Ativos</h2>
                  <Badge variant="secondary">
                    {otherChallenges.length} desafios disponíveis
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherChallenges.map((challenge, index) => (
                    <Card key={index} className="glass-card p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold">{challenge.title}</h3>
                          <p className="text-sm text-muted-foreground">Por: {challenge.streamer}</p>
                        </div>
                        <Badge className="badge-rank">
                          #{challenge.myPosition}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Prêmio Máximo</span>
                          <span className="font-semibold text-warning">R$ {challenge.topPrize}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Participantes</span>
                          <span className="font-semibold">{challenge.participants} clipadores</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Tempo Restante</span>
                          <span className="font-semibold">{challenge.daysLeft} dias</span>
                        </div>
                      </div>

                      <Button className="w-full mt-4 btn-gaming">
                        <Target className="w-4 h-4 mr-2" />
                        Ver Ranking
                      </Button>
                    </Card>
                  ))}
                </div>

                <Card className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-4">💡 Dica Pro</h3>
                  <p className="text-muted-foreground">
                    Participe de múltiplos desafios simultaneamente para maximizar seus ganhos! 
                    Cada streamer tem sua própria audiência e estilo de conteúdo.
                  </p>
                </Card>
              </TabsContent>

              {/* Ranking Global */}
              <TabsContent value="global" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Ranking Global ClipZone</h2>
                  <Badge className="badge-rank rank-gold">
                    <Crown className="w-3 h-3 mr-1" />
                    Posição #1
                  </Badge>
                </div>

                <div className="space-y-4">
                  {globalRanking.map((clipper) => (
                    <Card key={clipper.position} className="glass-card p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-warning to-secondary flex items-center justify-center text-sm font-bold text-white">
                              #{clipper.position}
                            </div>
                            <img 
                              src={clipper.avatar} 
                              alt={clipper.name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div>
                              <h3 className="font-semibold flex items-center space-x-2">
                                <span>{clipper.name}</span>
                                {clipper.isCurrentUser && (
                                  <Badge className="bg-primary/10 text-primary text-xs">Você</Badge>
                                )}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {clipper.streamersCount} streamers
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-success">
                            R$ {clipper.earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {clipper.views.toLocaleString()} views
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="glass-card p-6 text-center">
                  <Crown className="w-16 h-16 mx-auto mb-4 text-warning" />
                  <h3 className="text-xl font-semibold mb-2">Parabéns, Campeão!</h3>
                  <p className="text-muted-foreground mb-4">
                    Você é o clipador #1 da ClipZone! Continue assim e mantenha sua posição no topo.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-primary">1.25M</p>
                      <p className="text-sm text-muted-foreground">Views Totais</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-success">R$ 6.875</p>
                      <p className="text-sm text-muted-foreground">Ganhos Totais</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-warning">8</p>
                      <p className="text-sm text-muted-foreground">Streamers</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}