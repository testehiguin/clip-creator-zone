import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider } from "@/components/ui/sidebar";
import { 
  Users,
  Search,
  Check,
  X,
  Eye,
  DollarSign,
  Clock,
  Star,
  UserPlus,
  Filter
} from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function StreamerClippers() {
  const streamerData = {
    name: "GamerPro",
    avatar: avatarPlaceholder,
    rank: 2,
    credits: 15673
  };

  const pendingRequests = [
    {
      id: "1",
      name: "NovaClipadora",
      avatar: avatarPlaceholder,
      views: 0,
      clipsCount: 0,
      requestDate: "2 dias atrás",
      socialProof: { followers: 1200, platform: "TikTok" }
    },
    {
      id: "2", 
      name: "EditMaster2024",
      avatar: avatarPlaceholder,
      views: 0,
      clipsCount: 0,
      requestDate: "5 horas atrás",
      socialProof: { followers: 850, platform: "YouTube" }
    }
  ];

  const activeClippers = [
    {
      id: "1",
      name: "ClipMaster",
      avatar: avatarPlaceholder,
      views: 450000,
      clipsCount: 34,
      earnings: 2475.00,
      lastClip: "3 horas atrás",
      rating: 4.8,
      joinedDate: "3 meses atrás"
    },
    {
      id: "2",
      name: "EditPro",
      avatar: avatarPlaceholder,
      views: 320000,
      clipsCount: 28,
      earnings: 1760.00,
      lastClip: "1 dia atrás",
      rating: 4.6,
      joinedDate: "2 meses atrás"
    },
    {
      id: "3",
      name: "VideoWizard",
      avatar: avatarPlaceholder,
      views: 280000,
      clipsCount: 22,
      earnings: 1540.00,
      lastClip: "2 dias atrás",
      rating: 4.9,
      joinedDate: "4 meses atrás"
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
                    Gerenciar <span className="gradient-text">Clipadores</span>
                  </h1>
                  <p className="text-muted-foreground">
                    Gerencie sua equipe de clipadores e solicitações pendentes
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtros
                  </Button>
                  <Button className="btn-gaming">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Convidar Clipador
                  </Button>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar clipadores por nome..."
                  className="pl-10"
                />
              </div>
            </div>

            <Tabs defaultValue="requests" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="requests" className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Solicitações ({pendingRequests.length})
                </TabsTrigger>
                <TabsTrigger value="active" className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Clipadores Ativos ({activeClippers.length})
                </TabsTrigger>
              </TabsList>

              {/* Solicitações Pendentes */}
              <TabsContent value="requests" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Solicitações Pendentes</h2>
                  <Badge variant="secondary" className="text-sm">
                    {pendingRequests.length} aguardando aprovação
                  </Badge>
                </div>

                {pendingRequests.length === 0 ? (
                  <Card className="glass-card p-8 text-center">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Nenhuma solicitação pendente</h3>
                    <p className="text-muted-foreground">
                      Todas as solicitações foram processadas
                    </p>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {pendingRequests.map((request) => (
                      <Card key={request.id} className="glass-card p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <img 
                              src={request.avatar} 
                              alt={request.name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div>
                              <h3 className="font-semibold">{request.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                Solicitou acesso {request.requestDate}
                              </p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {request.socialProof.followers} seguidores
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {request.socialProof.platform}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              Ver Perfil
                            </Button>
                            <Button variant="outline" size="sm">
                              <X className="w-4 h-4 mr-2" />
                              Rejeitar
                            </Button>
                            <Button className="btn-gaming" size="sm">
                              <Check className="w-4 h-4 mr-2" />
                              Aprovar
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Clipadores Ativos */}
              <TabsContent value="active" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Clipadores Ativos</h2>
                  <Badge className="badge-rank">
                    {activeClippers.length} clipadores trabalhando
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeClippers.map((clipper) => (
                    <Card key={clipper.id} className="glass-card p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <img 
                          src={clipper.avatar} 
                          alt={clipper.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{clipper.name}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-warning fill-current" />
                            <span className="text-sm text-muted-foreground">{clipper.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Total de Views</span>
                          <span className="font-semibold">{clipper.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Clipes Feitos</span>
                          <span className="font-semibold">{clipper.clipsCount}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Ganhos Totais</span>
                          <span className="font-semibold text-success">
                            R$ {clipper.earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Último Clipe</span>
                          <span className="font-semibold">{clipper.lastClip}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Clipes
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <DollarSign className="w-4 h-4 mr-2" />
                          Pagamentos
                        </Button>
                      </div>

                      <div className="mt-3 pt-3 border-t border-border/20">
                        <p className="text-xs text-muted-foreground">
                          Membro desde {clipper.joinedDate}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}