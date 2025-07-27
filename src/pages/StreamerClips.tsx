import { AppSidebar } from "@/components/AppSidebar";
import { ClipCard } from "@/components/ClipCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider } from "@/components/ui/sidebar";
import { 
  Video,
  Search,
  Filter,
  Download,
  Clock,
  Check,
  X,
  Eye,
  TrendingUp
} from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function StreamerClips() {
  const streamerData = {
    name: "GamerPro",
    avatar: avatarPlaceholder,
    rank: 2,
    credits: 15673
  };

  const pendingClips = [
    {
      id: "1",
      title: "JOGADA ÉPICA no Valorant - ACE Impossível!",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
      views: { youtube: 0, tiktok: 0 },
      totalViews: 0,
      earnings: 0,
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
      views: { tiktok: 0, instagram: 0 },
      totalViews: 0,
      earnings: 0,
      status: "pending" as const,
      clipperName: "EditPro",
      clipperAvatar: avatarPlaceholder,
      platform: "tiktok" as const,
      createdAt: "4h atrás"
    }
  ];

  const approvedClips = [
    {
      id: "3",
      title: "CLUTCH INSANO - 1v5 no CS2",
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
      id: "4",
      title: "RAGE ÉPICO - Streamer Perdeu a Linha",
      thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400",
      views: { tiktok: 125000, instagram: 45000 },
      totalViews: 170000,
      earnings: 935.00,
      status: "approved" as const,
      clipperName: "EditPro",
      clipperAvatar: avatarPlaceholder,
      platform: "tiktok" as const,
      createdAt: "1 semana atrás"
    }
  ];

  const rejectedClips = [
    {
      id: "5",
      title: "Momento Random da Live",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
      views: {},
      totalViews: 0,
      earnings: 0,
      status: "rejected" as const,
      clipperName: "VideoWizard",
      clipperAvatar: avatarPlaceholder,
      platform: "youtube" as const,
      createdAt: "5 dias atrás"
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
                    Gerenciar <span className="gradient-text">Clipes</span>
                  </h1>
                  <p className="text-muted-foreground">
                    Aprove, rejeite e acompanhe o desempenho dos seus clipes
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtros
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </Button>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar clipes por título, clipador ou plataforma..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="glass-card p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-warning" />
                  <div>
                    <p className="text-sm text-muted-foreground">Pendentes</p>
                    <p className="text-2xl font-bold">{pendingClips.length}</p>
                  </div>
                </div>
              </Card>
              <Card className="glass-card p-4">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-success" />
                  <div>
                    <p className="text-sm text-muted-foreground">Aprovados</p>
                    <p className="text-2xl font-bold">{approvedClips.length}</p>
                  </div>
                </div>
              </Card>
              <Card className="glass-card p-4">
                <div className="flex items-center space-x-2">
                  <X className="w-5 h-5 text-destructive" />
                  <div>
                    <p className="text-sm text-muted-foreground">Rejeitados</p>
                    <p className="text-2xl font-bold">{rejectedClips.length}</p>
                  </div>
                </div>
              </Card>
              <Card className="glass-card p-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total Views</p>
                    <p className="text-2xl font-bold">238K</p>
                  </div>
                </div>
              </Card>
            </div>

            <Tabs defaultValue="pending" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="pending" className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Pendentes ({pendingClips.length})
                </TabsTrigger>
                <TabsTrigger value="approved" className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  Aprovados ({approvedClips.length})
                </TabsTrigger>
                <TabsTrigger value="rejected" className="flex items-center">
                  <X className="w-4 h-4 mr-2" />
                  Rejeitados ({rejectedClips.length})
                </TabsTrigger>
              </TabsList>

              {/* Clipes Pendentes */}
              <TabsContent value="pending" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Clipes Aguardando Aprovação</h2>
                  <Badge className="bg-warning/10 text-warning">
                    {pendingClips.length} precisam de revisão
                  </Badge>
                </div>

                {pendingClips.length === 0 ? (
                  <Card className="glass-card p-8 text-center">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Nenhum clipe pendente</h3>
                    <p className="text-muted-foreground">
                      Todos os clipes foram revisados
                    </p>
                  </Card>
                ) : (
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
                )}
              </TabsContent>

              {/* Clipes Aprovados */}
              <TabsContent value="approved" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Clipes Aprovados</h2>
                  <Badge className="bg-success/10 text-success">
                    {approvedClips.length} ativos
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {approvedClips.map((clip) => (
                    <ClipCard key={clip.id} {...clip} />
                  ))}
                </div>
              </TabsContent>

              {/* Clipes Rejeitados */}
              <TabsContent value="rejected" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Clipes Rejeitados</h2>
                  <Badge variant="secondary">
                    {rejectedClips.length} rejeitados
                  </Badge>
                </div>

                {rejectedClips.length === 0 ? (
                  <Card className="glass-card p-8 text-center">
                    <Check className="w-12 h-12 mx-auto mb-4 text-success" />
                    <h3 className="text-lg font-semibold mb-2">Nenhum clipe rejeitado</h3>
                    <p className="text-muted-foreground">
                      Todos os clipes enviados foram aprovados
                    </p>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rejectedClips.map((clip) => (
                      <ClipCard key={clip.id} {...clip} />
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}