import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider } from "@/components/ui/sidebar";
import { 
  Settings,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Trophy,
  Star,
  Eye,
  DollarSign,
  Calendar,
  Check,
  ExternalLink
} from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function ClipadorProfile() {
  const clipadorData = {
    name: "ClipMaster",
    avatar: avatarPlaceholder,
    rank: 1,
    credits: 2475
  };

  const achievements = [
    {
      title: "Top 1 Dezembro",
      description: "1º lugar no ranking mensal",
      icon: "🥇",
      date: "Dez 2024"
    },
    {
      title: "Viral Master", 
      description: "Clipe com +100K views",
      icon: "🔥",
      date: "Nov 2024"
    },
    {
      title: "Consistência Pro",
      description: "30 dias seguidos com clipes",
      icon: "📈",
      date: "Out 2024"
    },
    {
      title: "First Blood",
      description: "Primeiro clipe aprovado",
      icon: "⚡",
      date: "Set 2024"
    }
  ];

  const stats = {
    totalViews: 450000,
    totalEarnings: 2475.00,
    clipsApproved: 34,
    averageViews: 13235,
    bestClip: "REAÇÃO HILÁRIA - 170K views"
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
              <h1 className="text-3xl font-bold mb-2">
                Perfil do <span className="gradient-text">Clipador</span>
              </h1>
              <p className="text-muted-foreground">
                Configure suas informações pessoais e acompanhe suas conquistas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Informações Pessoais */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-6">Informações Pessoais</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                        CM
                      </div>
                      <div className="space-y-2">
                        <Button className="btn-gaming">
                          Alterar Foto
                        </Button>
                        <div className="flex items-center space-x-2">
                          <Badge className="badge-rank rank-gold">
                            <Trophy className="w-3 h-3 mr-1" />
                            Rank #{clipadorData.rank}
                          </Badge>
                          <Badge className="bg-warning/10 text-warning">
                            <Star className="w-3 h-3 mr-1" />
                            Premium
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nome/Username</Label>
                        <Input id="name" defaultValue="ClipMaster" />
                      </div>
                      <div>
                        <Label htmlFor="bio">Biografia</Label>
                        <Textarea 
                          id="bio" 
                          placeholder="Conte um pouco sobre você..."
                          defaultValue="Clipador especializado em momentos épicos de FPS. Criando conteúdo viral há 4 meses!"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="clipmaster@email.com" />
                      </div>
                      <div>
                        <Label htmlFor="pixKey">Chave PIX</Label>
                        <Input id="pixKey" placeholder="Sua chave PIX para recebimentos" />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Redes Sociais */}
                <Card className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-6">Redes Sociais (Opcional)</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-border/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Youtube className="w-5 h-5 text-red-500" />
                        <div>
                          <p className="font-medium">YouTube</p>
                          <p className="text-sm text-muted-foreground">@ClipMasterYT</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-success/10 text-success">
                          <Check className="w-3 h-3 mr-1" />
                          Conectado
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Instagram className="w-5 h-5 text-pink-500" />
                        <div>
                          <p className="font-medium">Instagram</p>
                          <p className="text-sm text-muted-foreground">Não conectado</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Conectar
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-border/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Twitter className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="font-medium">Twitter/X</p>
                          <p className="text-sm text-muted-foreground">Não conectado</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Conectar
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Preferências */}
                <Card className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-6">Preferências</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Notificações por Email</Label>
                        <p className="text-sm text-muted-foreground">
                          Receber alertas sobre aprovações e rankings
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Notificações Push</Label>
                        <p className="text-sm text-muted-foreground">
                          Alertas em tempo real no navegador
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Perfil Público</Label>
                        <p className="text-sm text-muted-foreground">
                          Permitir que streamers vejam seu perfil
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Auto-aplicar para Novos Streamers</Label>
                        <p className="text-sm text-muted-foreground">
                          Solicitar acesso automaticamente para novos streamers
                        </p>
                      </div>
                      <Switch defaultChecked={false} />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Sidebar - Estatísticas e Conquistas */}
              <div className="space-y-6">
                {/* Estatísticas Rápidas */}
                <Card className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-4">Estatísticas</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Total Views</span>
                      </div>
                      <span className="font-semibold">{stats.totalViews.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-success" />
                        <span className="text-sm text-muted-foreground">Ganhos</span>
                      </div>
                      <span className="font-semibold text-success">
                        R$ {stats.totalEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-warning" />
                        <span className="text-sm text-muted-foreground">Aprovados</span>
                      </div>
                      <span className="font-semibold">{stats.clipsApproved}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-muted-foreground">Média Views</span>
                      </div>
                      <span className="font-semibold">{stats.averageViews.toLocaleString()}</span>
                    </div>
                  </div>
                </Card>

                {/* Conquistas */}
                <Card className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-4">Conquistas Recentes</h3>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-muted/5 rounded-lg">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {achievement.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Melhor Clipe */}
                <Card className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-4">Melhor Performance</h3>
                  <div className="text-center">
                    <Trophy className="w-12 h-12 mx-auto mb-3 text-warning" />
                    <h4 className="font-semibold mb-1">REAÇÃO HILÁRIA</h4>
                    <p className="text-sm text-muted-foreground mb-2">Momento Épico da Live</p>
                    <Badge className="bg-warning/10 text-warning">
                      170K views
                    </Badge>
                  </div>
                </Card>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <Button className="btn-gaming">
                <Settings className="w-4 h-4 mr-2" />
                Salvar Alterações
              </Button>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}