import { AppSidebar } from "@/components/AppSidebar";
import { RankingCard } from "@/components/RankingCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SidebarProvider } from "@/components/ui/sidebar";
import { 
  Trophy,
  Plus,
  Calendar,
  DollarSign,
  Users,
  Clock,
  Gift,
  Target,
  Edit
} from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function StreamerRanking() {
  const streamerData = {
    name: "GamerPro",
    avatar: avatarPlaceholder,
    rank: 2,
    credits: 15673
  };

  const currentChallenge = {
    title: "Desafio Dezembro 2024",
    description: "Competição de views para clipes de Valorant e CS2",
    startDate: "01/12/2024",
    endDate: "31/12/2024",
    daysLeft: 15,
    totalPrize: 950,
    participants: 8,
    prizes: [
      { position: 1, amount: 500, description: "1º Lugar" },
      { position: 2, amount: 300, description: "2º Lugar" },
      { position: 3, amount: 150, description: "3º Lugar" }
    ]
  };

  const ranking = [
    {
      position: 1,
      name: "ClipMaster",
      avatar: avatarPlaceholder,
      views: 450000,
      earnings: 2475.00,
      clipsCount: 34,
      trend: "up"
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
    }
  ];

  const previousChallenges = [
    {
      title: "Desafio Novembro 2024",
      period: "01/11 - 30/11",
      winner: "ClipMaster",
      totalViews: 1200000,
      totalPrize: 800
    },
    {
      title: "Desafio Outubro 2024", 
      period: "01/10 - 31/10",
      winner: "EditPro",
      totalViews: 980000,
      totalPrize: 750
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar 
          userType="streamer"
          userName={streamerData.name}
          userAvatar={streamerData.avatar}
          rank={streamerData.rank}
          credits={streamerData.credits}
        />
        
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-8">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    Ranking e <span className="gradient-text">Desafios</span>
                  </h1>
                  <p className="text-muted-foreground">
                    Crie desafios com prêmios e acompanhe o ranking dos seus clipadores
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="btn-gaming">
                      <Plus className="w-4 h-4 mr-2" />
                      Novo Desafio
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Criar Novo Desafio</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="title">Título do Desafio</Label>
                          <Input id="title" placeholder="Ex: Desafio Janeiro 2025" />
                        </div>
                        <div>
                          <Label htmlFor="duration">Duração</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1week">1 Semana</SelectItem>
                              <SelectItem value="2weeks">2 Semanas</SelectItem>
                              <SelectItem value="1month">1 Mês</SelectItem>
                              <SelectItem value="custom">Personalizado</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="description">Descrição</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Descreva as regras e objetivos do desafio..."
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="prize1">1º Lugar (R$)</Label>
                          <Input id="prize1" type="number" placeholder="500" />
                        </div>
                        <div>
                          <Label htmlFor="prize2">2º Lugar (R$)</Label>
                          <Input id="prize2" type="number" placeholder="300" />
                        </div>
                        <div>
                          <Label htmlFor="prize3">3º Lugar (R$)</Label>
                          <Input id="prize3" type="number" placeholder="150" />
                        </div>
                      </div>
                      <Button className="btn-gaming">
                        <Gift className="w-4 h-4 mr-2" />
                        Criar Desafio
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Desafio Atual */}
            <Card className="glass-card p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-warning" />
                  <div>
                    <h3 className="text-xl font-semibold">{currentChallenge.title}</h3>
                    <p className="text-muted-foreground">{currentChallenge.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="badge-rank">
                    <Clock className="w-3 h-3 mr-1" />
                    {currentChallenge.daysLeft} dias restantes
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground">Período</p>
                  <p className="font-semibold">{currentChallenge.startDate} - {currentChallenge.endDate}</p>
                </div>
                <div className="text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-success" />
                  <p className="text-sm text-muted-foreground">Prêmio Total</p>
                  <p className="font-semibold">R$ {currentChallenge.totalPrize}</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-warning" />
                  <p className="text-sm text-muted-foreground">Participantes</p>
                  <p className="font-semibold">{currentChallenge.participants} clipadores</p>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 mx-auto mb-2 text-destructive" />
                  <p className="text-sm text-muted-foreground">Meta</p>
                  <p className="font-semibold">1M+ views</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentChallenge.prizes.map((prize) => (
                  <div key={prize.position} className="glass-card p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">
                      {prize.position === 1 ? "🥇" : prize.position === 2 ? "🥈" : "🥉"}
                    </div>
                    <p className="text-2xl font-bold text-warning">R$ {prize.amount}</p>
                    <p className="text-sm text-muted-foreground">{prize.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Ranking Atual */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Ranking Atual</h2>
                  <Badge className="badge-rank rank-gold">
                    <Trophy className="w-3 h-3 mr-1" />
                    Desafio Ativo
                  </Badge>
                </div>

                <div className="space-y-4">
                  {ranking.map((clipper) => (
                <RankingCard 
                  key={clipper.position} 
                  {...clipper}
                />
                  ))}
                </div>
              </div>

              <div>
                {/* Estatísticas do Desafio */}
                <Card className="glass-card p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">Estatísticas do Desafio</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Views Totais</span>
                      <span className="font-semibold">1.245.000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Clipes Enviados</span>
                      <span className="font-semibold">102</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Taxa de Aprovação</span>
                      <span className="font-semibold">87%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Investimento Total</span>
                      <span className="font-semibold text-warning">R$ 6.847,50</span>
                    </div>
                  </div>
                </Card>

                {/* Desafios Anteriores */}
                <Card className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-4">Desafios Anteriores</h3>
                  <div className="space-y-4">
                    {previousChallenges.map((challenge, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4">
                        <h4 className="font-medium">{challenge.title}</h4>
                        <p className="text-sm text-muted-foreground">{challenge.period}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm">Vencedor: <span className="font-medium">{challenge.winner}</span></span>
                          <Badge variant="outline" className="text-xs">
                            R$ {challenge.totalPrize}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}