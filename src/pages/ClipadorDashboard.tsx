import { ClipZoneHeader } from "@/components/ClipZoneHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { StatsCard } from "@/components/StatsCard";
import { ClipCard } from "@/components/ClipCard";
import { RankingCard } from "@/components/RankingCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider } from "@/components/ui/sidebar";
import { 
  Eye, 
  DollarSign, 
  Upload, 
  TrendingUp,
  Plus,
  Trophy,
  Link as LinkIcon,
  Clock,
  Target
} from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function ClipadorDashboard() {
  // Mock data
  const clipadorData = {
    name: "ClipMaster",
    avatar: avatarPlaceholder,
    rank: 1,
    credits: 2475
  };

  const stats = {
    totalViews: 450000,
    totalEarnings: 2475.00,
    clipsApproved: 34,
    successRate: 91
  };

  const myClips = [
    {
      id: "1",
      title: "JOGADA ÉPICA no Valorant - ACE Impossível!",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
      views: { youtube: 45000, tiktok: 23000 },
      totalViews: 68000,
      earnings: 374.00,
      status: "approved" as const,
      clipperName: "ClipMaster",
      clipperAvatar: avatarPlaceholder,
      platform: "youtube" as const,
      createdAt: "3 dias atrás"
    },
    {
      id: "2",
      title: "REAÇÃO HILÁRIA - Momento Épico da Live",
      thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400",
      views: { tiktok: 125000, instagram: 45000 },
      totalViews: 170000,
      earnings: 935.00,
      status: "approved" as const,
      clipperName: "ClipMaster",
      clipperAvatar: avatarPlaceholder,
      platform: "tiktok" as const,
      createdAt: "1 semana atrás"
    },
    {
      id: "3",
      title: "CLUTCH INSANO - 1v5 no CS2",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
      views: {},
      totalViews: 0,
      earnings: 0,
      status: "pending" as const,
      clipperName: "ClipMaster",
      clipperAvatar: avatarPlaceholder,
      platform: "youtube" as const,
      createdAt: "2h atrás"
    }
  ];

  const currentRanking = [
    {
      position: 1,
      name: "ClipMaster",
      avatar: avatarPlaceholder,
      views: 450000,
      earnings: 2475.00,
      isCurrentUser: true
    },
    {
      position: 2,
      name: "EditPro",
      avatar: avatarPlaceholder,
      views: 320000,
      earnings: 1760.00
    },
    {
      position: 3,
      name: "VideoWizard",
      avatar: avatarPlaceholder,
      views: 280000,
      earnings: 1540.00
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
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                E aí, <span className="gradient-text">{clipadorData.name}</span>! ✂️
              </h1>
              <p className="text-muted-foreground">
                Continue criando conteúdo viral e escalando no ranking
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button className="btn-gaming">
                <Plus className="w-4 h-4 mr-2" />
                Novo Clipe
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="glass-card p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Envio Rápido de Clipe</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Cole o link do seu clipe (YouTube, TikTok, Instagram...)"
                className="w-full"
              />
            </div>
            <Button className="btn-gaming w-full md:w-auto">
              <Upload className="w-4 h-4 mr-2" />
              Enviar Clipe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            💡 Dica: Clipes com thumbnails chamativos têm 3x mais chances de aprovação!
          </p>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total de Views"
            value={stats.totalViews}
            change="+34% este mês"
            changeType="positive"
            icon={Eye}
            gradient="primary"
          />
          <StatsCard
            title="Ganhos Totais"
            value={`R$ ${stats.totalEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            change="+28% este mês"
            changeType="positive"
            icon={DollarSign}
            gradient="secondary"
          />
          <StatsCard
            title="Clipes Aprovados"
            value={stats.clipsApproved}
            change="+12 este mês"
            changeType="positive"
            icon={Upload}
            gradient="tertiary"
          />
          <StatsCard
            title="Taxa de Sucesso"
            value={`${stats.successRate}%`}
            change="+7% este mês"
            changeType="positive"
            icon={Target}
            gradient="primary"
          />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="clips" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="clips" className="flex items-center">
              <LinkIcon className="w-4 h-4 mr-2" />
              Meus Clipes ({myClips.length})
            </TabsTrigger>
            <TabsTrigger value="ranking" className="flex items-center">
              <Trophy className="w-4 h-4 mr-2" />
              Ranking Atual
            </TabsTrigger>
            <TabsTrigger value="earnings" className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2" />
              Ganhos
            </TabsTrigger>
          </TabsList>

          {/* Meus Clipes */}
          <TabsContent value="clips" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Histórico de Clipes</h2>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-sm">
                  {myClips.filter(c => c.status === "approved").length} aprovados
                </Badge>
                <Badge className="text-sm bg-warning/10 text-warning">
                  {myClips.filter(c => c.status === "pending").length} pendentes
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myClips.map((clip) => (
                <ClipCard key={clip.id} {...clip} />
              ))}
            </div>
          </TabsContent>

          {/* Ranking */}
          <TabsContent value="ranking" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Ranking do Mês</h2>
              <Badge className="badge-rank rank-gold">
                <Trophy className="w-3 h-3 mr-1" />
                🥇 1º Lugar
              </Badge>
            </div>

            {/* Challenge Info */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Desafio Dezembro 2024 - GamerPro</h3>
                <Badge className="badge-rank">
                  <Clock className="w-3 h-3 mr-1" />
                  15 dias restantes
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="glass-card p-4 rounded-lg">
                  <p className="text-2xl font-bold text-warning">R$ 500</p>
                  <p className="text-sm text-muted-foreground">1º Lugar</p>
                  <p className="text-xs text-success font-semibold mt-1">🎯 Você está aqui!</p>
                </div>
                <div className="glass-card p-4 rounded-lg opacity-60">
                  <p className="text-2xl font-bold text-muted-foreground">R$ 300</p>
                  <p className="text-sm text-muted-foreground">2º Lugar</p>
                  <p className="text-xs text-muted-foreground mt-1">130K views para alcançar</p>
                </div>
                <div className="glass-card p-4 rounded-lg opacity-60">
                  <p className="text-2xl font-bold text-amber-600">R$ 150</p>
                  <p className="text-sm text-muted-foreground">3º Lugar</p>
                  <p className="text-xs text-muted-foreground mt-1">170K views para alcançar</p>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              {currentRanking.map((clipper) => (
                <RankingCard key={clipper.position} {...clipper} />
              ))}
            </div>
          </TabsContent>

          {/* Ganhos */}
          <TabsContent value="earnings" className="space-y-6">
            <h2 className="text-2xl font-bold">Análise de Ganhos</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Earnings Breakdown */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Ganhos por Plataforma</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">YouTube</span>
                    <span className="font-semibold">R$ 1.247,50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">TikTok</span>
                    <span className="font-semibold">R$ 935,00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Instagram</span>
                    <span className="font-semibold">R$ 292,50</span>
                  </div>
                  <div className="border-t border-border/20 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="text-2xl font-bold text-success">
                        R$ {stats.totalEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Payment Info */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Próximo Pagamento</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Valor Pendente</span>
                    <span className="text-2xl font-bold text-warning">R$ 847,20</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Data de Pagamento</span>
                    <span className="font-semibold">05/Jan/2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Método</span>
                    <span className="font-semibold">PIX</span>
                  </div>
                  <Button className="w-full btn-gaming">
                    Configurar Pagamento
                  </Button>
                </div>
              </Card>
            </div>

            {/* Top Performing Clips */}
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Clipes Mais Lucrativos</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">REAÇÃO HILÁRIA - Momento Épico da Live</p>
                    <p className="text-sm text-muted-foreground">170K views • TikTok</p>
                  </div>
                  <span className="font-bold text-success">R$ 935,00</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">JOGADA ÉPICA no Valorant - ACE Impossível!</p>
                    <p className="text-sm text-muted-foreground">68K views • YouTube</p>
                  </div>
                  <span className="font-bold text-success">R$ 374,00</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">RAGE ÉPICO - Streamer Perdeu a Linha</p>
                    <p className="text-sm text-muted-foreground">45K views • Instagram</p>
                  </div>
                  <span className="font-bold text-success">R$ 247,50</span>
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