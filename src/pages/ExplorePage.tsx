import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  PlayCircle, 
  Eye, 
  DollarSign, 
  Users, 
  TrendingUp,
  Youtube,
  Instagram,
  Facebook,
  CheckCircle,
  Clock,
  Star,
  Filter
} from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "open" | "approval">("all");

  // Mock data
  const clipadorData = {
    name: "ClipMaster",
    avatar: avatarPlaceholder,
    rank: 1,
    credits: 2475
  };

  const streamers = [
    {
      id: "1",
      name: "GamerPro",
      avatar: avatarPlaceholder,
      followers: 125000,
      cpm: 5.50,
      totalViews: 2847639,
      platforms: ["youtube", "tiktok", "instagram"],
      requiresApproval: false,
      isActive: true,
      category: "Gaming",
      description: "Streamer de Valorant e CS2 com foco em gameplay competitivo",
      badges: ["Top Streamer", "Verificado"]
    },
    {
      id: "2", 
      name: "ReactQueen",
      avatar: avatarPlaceholder,
      followers: 89000,
      cpm: 4.25,
      totalViews: 1543789,
      platforms: ["tiktok", "instagram", "facebook"],
      requiresApproval: true,
      isActive: true,
      category: "React Content",
      description: "Reações autênticas a vídeos virais e tendências",
      badges: ["Viral Creator"]
    },
    {
      id: "3",
      name: "TechGuru",
      avatar: avatarPlaceholder,
      followers: 67000,
      cpm: 3.80,
      totalViews: 987456,
      platforms: ["youtube", "instagram"],
      requiresApproval: false,
      isActive: true,
      category: "Tech Reviews",
      description: "Reviews de hardware e análises tecnológicas",
      badges: ["Tech Expert"]
    },
    {
      id: "4",
      name: "Comedy Central",
      avatar: avatarPlaceholder,
      followers: 156000,
      cpm: 6.20,
      totalViews: 3241567,
      platforms: ["tiktok", "youtube", "instagram", "facebook"],
      requiresApproval: true,
      isActive: false,
      category: "Comedy",
      description: "Conteúdo de comédia e stand-up",
      badges: ["Comedy King", "Verificado"]
    }
  ];

  const filteredStreamers = streamers.filter(streamer => {
    const matchesSearch = streamer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         streamer.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === "all" || 
                         (filter === "open" && !streamer.requiresApproval) ||
                         (filter === "approval" && streamer.requiresApproval);

    return matchesSearch && matchesFilter && streamer.isActive;
  });

  const getPlatformIcon = (platform: string) => {
    switch(platform) {
      case "youtube": return <Youtube className="w-4 h-4 text-red-500" />;
      case "instagram": return <Instagram className="w-4 h-4 text-pink-500" />;
      case "facebook": return <Facebook className="w-4 h-4 text-blue-500" />;
      case "tiktok": return <div className="w-4 h-4 bg-foreground rounded" />;
      default: return null;
    }
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
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Explorar <span className="gradient-text">Streamers</span>
              </h1>
              <p className="text-muted-foreground">
                Encontre creators perfeitos para criar clipes virais
              </p>
            </div>

            {/* Search and Filters */}
            <Card className="glass-card p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por nome ou categoria..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={filter === "all" ? "default" : "outline"}
                    onClick={() => setFilter("all")}
                    size="sm"
                  >
                    Todos
                  </Button>
                  <Button
                    variant={filter === "open" ? "default" : "outline"}
                    onClick={() => setFilter("open")}
                    size="sm"
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Acesso Livre
                  </Button>
                  <Button
                    variant={filter === "approval" ? "default" : "outline"}
                    onClick={() => setFilter("approval")}
                    size="sm"
                  >
                    <Clock className="w-4 h-4 mr-1" />
                    Precisa Aprovação
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/20">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{streamers.filter(s => s.isActive).length}</p>
                  <p className="text-sm text-muted-foreground">Streamers Ativos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-success">{streamers.filter(s => !s.requiresApproval && s.isActive).length}</p>
                  <p className="text-sm text-muted-foreground">Acesso Livre</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-warning">R$ {(streamers.reduce((acc, s) => acc + s.cpm, 0) / streamers.length).toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">CPM Médio</p>
                </div>
              </div>
            </Card>

            {/* Streamers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStreamers.map((streamer) => (
                <Card key={streamer.id} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-16 h-16 border-2 border-primary/30">
                      <AvatarImage src={streamer.avatar} alt={streamer.name} />
                      <AvatarFallback>
                        {streamer.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-bold text-lg">{streamer.name}</h3>
                        {streamer.badges.includes("Verificado") && (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{streamer.category}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {streamer.badges.map((badge, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {streamer.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 rounded-lg bg-muted/20">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm font-semibold">{(streamer.followers / 1000).toFixed(0)}K</p>
                      <p className="text-xs text-muted-foreground">Seguidores</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/20">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <DollarSign className="w-4 h-4 text-success" />
                      </div>
                      <p className="text-sm font-semibold text-success">R$ {streamer.cpm.toFixed(2)}</p>
                      <p className="text-xs text-muted-foreground">CPM</p>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Plataformas:</p>
                    <div className="flex items-center space-x-2">
                      {streamer.platforms.map((platform, index) => (
                        <div key={index} className="p-2 rounded-lg bg-muted/20">
                          {getPlatformIcon(platform)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    className={
                      streamer.requiresApproval 
                        ? "w-full bg-warning hover:bg-warning/80" 
                        : "w-full btn-gaming"
                    }
                  >
                    {streamer.requiresApproval ? (
                      <>
                        <Clock className="w-4 h-4 mr-2" />
                        Solicitar Acesso
                      </>
                    ) : (
                      <>
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Começar a Clipear
                      </>
                    )}
                  </Button>

                  {/* Performance Indicator */}
                  <div className="mt-4 pt-4 border-t border-border/20">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Performance</span>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3 text-success" />
                        <span className="text-success font-semibold">
                          {(streamer.totalViews / 1000000).toFixed(1)}M views
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {filteredStreamers.length === 0 && (
              <Card className="glass-card p-12 text-center">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nenhum streamer encontrado</h3>
                <p className="text-muted-foreground mb-4">
                  Tente ajustar seus filtros ou termo de busca
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setFilter("all");
                  }}
                >
                  Limpar Filtros
                </Button>
              </Card>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}