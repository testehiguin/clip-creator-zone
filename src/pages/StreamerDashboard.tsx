import { ClipZoneHeader } from "@/components/ClipZoneHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { StatsCard } from "@/components/StatsCard";
import { ClipCard } from "@/components/ClipCard";
import { RankingCard } from "@/components/RankingCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider } from "@/components/ui/sidebar";
import { 
  Eye, 
  DollarSign, 
  Users, 
  TrendingUp,
  Settings,
  Plus,
  Trophy,
  Clock,
  CheckCircle
} from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function StreamerDashboard() {
  // Mock data
  const streamerData = {
    name: "GamerPro",
    avatar: avatarPlaceholder,
    rank: 2,
    cpm: 5.50
  };

  const stats = {
    totalViews: 2847639,
    totalEarnings: 15673.45,
    activeClippers: 23,
    approvalRate: 89
  };

  const pendingClips = [
    {
      id: "1",
      title: "JOGADA ÉPICA no Valorant - ACE Impossível!",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
      views: { youtube: 12500, tiktok: 8300 },
      totalViews: 20800,
      earnings: 114.40,
      status: "pending" as const,
      clipperName: "ClipMaster",
      clipperAvatar: avatarPlaceholder,
      platform: "youtube" as const,
      createdAt: "2h atrás"
    },
    {
      id: "2", 
      title: "REAÇÃO HILÁRIA do Chat - Moments Engraçados",
      thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400",
      views: { tiktok: 45000, instagram: 15000 },
      totalViews: 60000,
      earnings: 330.00,
      status: "pending" as const,
      clipperName: "EditPro",
      clipperAvatar: avatarPlaceholder,
      platform: "tiktok" as const,
      createdAt: "4h atrás"
    }
  ];

  const topClippers = [
    {
      position: 1,
      name: "ClipMaster",
      avatar: avatarPlaceholder,
      views: 450000,
      earnings: 2475.00
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
          userType="streamer"
          userName={streamerData.name}
          userAvatar={streamerData.avatar}
          rank={streamerData.rank}
          credits={Math.floor(stats.totalEarnings)}
        />
        
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Bem-vindo, <span className="gradient-text">{streamerData.name}</span>! 🎮
              </h1>
              <p className="text-muted-foreground">
                Gerencie seus clipes, clipadores e ganhos em um só lugar
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
              <Button className="btn-gaming">
                <Plus className="w-4 h-4 mr-2" />
                Novo Desafio
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total de Views"
            value={stats.totalViews}
            change="+23% este mês"
            changeType="positive"
            icon={Eye}
            gradient="primary"
          />
          <StatsCard
            title="Ganhos Totais"
            value={`R$ ${stats.totalEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            change="+15% este mês"
            changeType="positive"
            icon={DollarSign}
            gradient="secondary"
          />
          <StatsCard
            title="Clipadores Ativos"
            value={stats.activeClippers}
            change="+3 este mês"
            changeType="positive"
            icon={Users}
            gradient="tertiary"
          />
          <StatsCard
            title="Taxa de Aprovação"
            value={`${stats.approvalRate}%`}
            change="+5% este mês"
            changeType="positive"
            icon={CheckCircle}
            gradient="primary"
          />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="clips" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="clips" className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Clipes Pendentes ({pendingClips.length})
            </TabsTrigger>
            <TabsTrigger value="ranking" className="flex items-center">
              <Trophy className="w-4 h-4 mr-2" />
              Ranking Clipadores
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Performance
            </TabsTrigger>
          </TabsList>

          {/* Clipes Pendentes */}
          <TabsContent value="clips" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Clipes Aguardando Aprovação</h2>
              <Badge variant="secondary" className="text-sm">
                {pendingClips.length} pendentes
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingClips.map((clip) => (
                <ClipCard
                  key={clip.id}
                  {...clip}
                  isStreamerView
                  onApprove={() => console.log("Aprovado:", clip.id)}
                  onReject={() => console.log("Rejeitado:", clip.id)}
                />
              ))}
            </div>
          </TabsContent>

          {/* Ranking */}
          <TabsContent value="ranking" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Top Clipadores do Mês</h2>
              <Button className="btn-gaming">
                <Trophy className="w-4 h-4 mr-2" />
                Criar Novo Desafio
              </Button>
            </div>

            {/* Challenge Info */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Desafio Dezembro 2024</h3>
                <Badge className="badge-rank">
                  <Clock className="w-3 h-3 mr-1" />
                  15 dias restantes
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-warning">R$ 500</p>
                  <p className="text-sm text-muted-foreground">1º Lugar</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-muted-foreground">R$ 300</p>
                  <p className="text-sm text-muted-foreground">2º Lugar</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-600">R$ 150</p>
                  <p className="text-sm text-muted-foreground">3º Lugar</p>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              {topClippers.map((clipper) => (
                <RankingCard key={clipper.position} {...clipper} />
              ))}
            </div>
          </TabsContent>

          {/* Performance */}
          <TabsContent value="performance" className="space-y-6">
            <h2 className="text-2xl font-bold">Análise de Performance</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* CPM Settings */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Configurações de CPM</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">CPM Atual</span>
                    <span className="text-2xl font-bold text-success">
                      R$ {streamerData.cpm.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Pagamentos Pendentes</span>
                    <span className="font-semibold">R$ 1.247,80</span>
                  </div>
                  <Button className="w-full btn-gaming">
                    Ajustar CPM
                  </Button>
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Atividade Recente</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>ClipMaster enviou novo clipe</span>
                    <span className="text-muted-foreground">2h atrás</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Clipe aprovado - 15K views</span>
                    <span className="text-muted-foreground">4h atrás</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>EditPro alcançou #2 no ranking</span>
                    <span className="text-muted-foreground">1d atrás</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Pagamento processado</span>
                    <span className="text-muted-foreground">2d atrás</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}