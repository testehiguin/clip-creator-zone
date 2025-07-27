import { AppSidebar } from "@/components/AppSidebar";
import { ClipCard } from "@/components/ClipCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider } from "@/components/ui/sidebar";
import { 
  Video,
  Search,
  Filter,
  Plus,
  Clock,
  Check,
  X,
  TrendingUp,
  Eye,
  DollarSign
} from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function ClipadorClips() {
  const clipadorData = {
    name: "ClipMaster",
    avatar: avatarPlaceholder,
    rank: 1,
    credits: 2475
  };

  const allClips = [
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
      createdAt: "3 dias atrás",
      streamerName: "GamerPro"
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
      createdAt: "1 semana atrás",
      streamerName: "GamerPro"
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
      createdAt: "2h atrás",
      streamerName: "GamerPro"
    },
    {
      id: "4",
      title: "Momento Aleatório",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
      views: {},
      totalViews: 0,
      earnings: 0,
      status: "rejected" as const,
      clipperName: "ClipMaster",
      clipperAvatar: avatarPlaceholder,
      platform: "youtube" as const,
      createdAt: "5 dias atrás",
      streamerName: "StreamerX"
    }
  ];

  const approvedClips = allClips.filter(clip => clip.status === "approved");
  const pendingClips = allClips.filter(clip => clip.status === "pending");
  const rejectedClips = allClips.filter(clip => clip.status === "rejected");

  const stats = {
    totalClips: allClips.length,
    approved: approvedClips.length,
    pending: pendingClips.length,
    rejected: rejectedClips.length,
    totalViews: approvedClips.reduce((sum, clip) => sum + clip.totalViews, 0),
    totalEarnings: approvedClips.reduce((sum, clip) => sum + clip.earnings, 0)
  };

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
                    Meus <span className="gradient-text">Clipes</span>
                  </h1>
                  <p className="text-muted-foreground">
                    Acompanhe o status e performance dos seus clipes enviados
                  </p>
                </div>
                <Button className="btn-gaming">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Clipe
                </Button>
              </div>
            </div>

            {/* Filtros */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar clipes por título ou streamer..."
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Plataforma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Streamer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="gamerpro">GamerPro</SelectItem>
                  <SelectItem value="streamerx">StreamerX</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
              <Card className="glass-card p-4">
                <div className="text-center">
                  <Video className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">{stats.totalClips}</p>
                  <p className="text-xs text-muted-foreground">Total</p>
                </div>
              </Card>
              <Card className="glass-card p-4">
                <div className="text-center">
                  <Check className="w-6 h-6 mx-auto mb-2 text-success" />
                  <p className="text-2xl font-bold">{stats.approved}</p>
                  <p className="text-xs text-muted-foreground">Aprovados</p>
                </div>
              </Card>
              <Card className="glass-card p-4">
                <div className="text-center">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-warning" />
                  <p className="text-2xl font-bold">{stats.pending}</p>
                  <p className="text-xs text-muted-foreground">Pendentes</p>
                </div>
              </Card>
              <Card className="glass-card p-4">
                <div className="text-center">
                  <X className="w-6 h-6 mx-auto mb-2 text-destructive" />
                  <p className="text-2xl font-bold">{stats.rejected}</p>
                  <p className="text-xs text-muted-foreground">Rejeitados</p>
                </div>
              </Card>
              <Card className="glass-card p-4">
                <div className="text-center">
                  <Eye className="w-6 h-6 mx-auto mb-2 text-secondary" />
                  <p className="text-2xl font-bold">{(stats.totalViews / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-muted-foreground">Views</p>
                </div>
              </Card>
              <Card className="glass-card p-4">
                <div className="text-center">
                  <DollarSign className="w-6 h-6 mx-auto mb-2 text-tertiary" />
                  <p className="text-2xl font-bold">R$ {stats.totalEarnings.toFixed(0)}</p>
                  <p className="text-xs text-muted-foreground">Ganhos</p>
                </div>
              </Card>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all" className="flex items-center">
                  <Video className="w-4 h-4 mr-2" />
                  Todos ({stats.totalClips})
                </TabsTrigger>
                <TabsTrigger value="approved" className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  Aprovados ({stats.approved})
                </TabsTrigger>
                <TabsTrigger value="pending" className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Pendentes ({stats.pending})
                </TabsTrigger>
                <TabsTrigger value="rejected" className="flex items-center">
                  <X className="w-4 h-4 mr-2" />
                  Rejeitados ({stats.rejected})
                </TabsTrigger>
              </TabsList>

              {/* Todos os Clipes */}
              <TabsContent value="all" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Todos os Clipes</h2>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">
                      {stats.totalClips} clipes
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filtros
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allClips.map((clip) => (
                    <div key={clip.id} className="relative">
                      <ClipCard {...clip} />
                      <div className="absolute top-2 right-2">
                        <Badge 
                          variant="secondary" 
                          className="text-xs bg-background/80 backdrop-blur-sm"
                        >
                          {clip.streamerName}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Clipes Aprovados */}
              <TabsContent value="approved" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Clipes Aprovados</h2>
                  <Badge className="bg-success/10 text-success">
                    {stats.approved} gerando views
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {approvedClips.map((clip) => (
                    <ClipCard key={clip.id} {...clip} />
                  ))}
                </div>
              </TabsContent>

              {/* Clipes Pendentes */}
              <TabsContent value="pending" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Clipes Pendentes</h2>
                  <Badge className="bg-warning/10 text-warning">
                    {stats.pending} aguardando aprovação
                  </Badge>
                </div>

                {pendingClips.length === 0 ? (
                  <Card className="glass-card p-8 text-center">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Nenhum clipe pendente</h3>
                    <p className="text-muted-foreground mb-4">
                      Todos os seus clipes foram processados
                    </p>
                    <Button className="btn-gaming">
                      <Plus className="w-4 h-4 mr-2" />
                      Enviar Novo Clipe
                    </Button>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pendingClips.map((clip) => (
                      <ClipCard key={clip.id} {...clip} />
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Clipes Rejeitados */}
              <TabsContent value="rejected" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Clipes Rejeitados</h2>
                  <Badge variant="secondary">
                    {stats.rejected} rejeitados
                  </Badge>
                </div>

                {rejectedClips.length === 0 ? (
                  <Card className="glass-card p-8 text-center">
                    <Check className="w-12 h-12 mx-auto mb-4 text-success" />
                    <h3 className="text-lg font-semibold mb-2">Nenhum clipe rejeitado!</h3>
                    <p className="text-muted-foreground">
                      Parabéns! Todos os seus clipes foram aprovados
                    </p>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                      <h4 className="font-medium text-destructive mb-2">💡 Dicas para Evitar Rejeições</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Use thumbnails chamativas e de alta qualidade</li>
                        <li>• Escolha momentos realmente épicos ou engraçados</li>
                        <li>• Verifique se o áudio está bem sincronizado</li>
                        <li>• Evite clipes muito longos ou repetitivos</li>
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {rejectedClips.map((clip) => (
                        <ClipCard key={clip.id} {...clip} />
                      ))}
                    </div>
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