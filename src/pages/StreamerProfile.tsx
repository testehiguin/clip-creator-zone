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
  DollarSign,
  Users,
  Check,
  ExternalLink
} from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function StreamerProfile() {
  const streamerData = {
    name: "GamerPro",
    avatar: avatarPlaceholder,
    rank: 2,
    credits: 15673
  };

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
              <h1 className="text-3xl font-bold mb-2">
                Perfil do <span className="gradient-text">Streamer</span>
              </h1>
              <p className="text-muted-foreground">
                Configure suas informações pessoais e preferências de pagamento
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Informações Pessoais */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-6">Informações Pessoais</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                      GP
                    </div>
                    <Button className="btn-gaming">
                      Alterar Foto
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome do Canal</Label>
                      <Input id="name" defaultValue="GamerPro" />
                    </div>
                    <div>
                      <Label htmlFor="bio">Biografia</Label>
                      <Textarea 
                        id="bio" 
                        placeholder="Conte um pouco sobre você e seu conteúdo..."
                        defaultValue="Streamer de Valorant e CS2. Apaixonado por FPS e gameplay competitivo!"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="gamerpro@email.com" />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Redes Sociais */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-6">Redes Sociais Conectadas</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-border/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Youtube className="w-5 h-5 text-red-500" />
                      <div>
                        <p className="font-medium">YouTube</p>
                        <p className="text-sm text-muted-foreground">@GamerProYT</p>
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
                      <Facebook className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Facebook</p>
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

              {/* Configurações de Pagamento */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-6">Configurações de Pagamento</h3>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="cpm">CPM - Custo Por Mil Views (R$)</Label>
                    <div className="flex items-center space-x-2 mt-2">
                      <DollarSign className="w-5 h-5 text-muted-foreground" />
                      <Input 
                        id="cpm" 
                        type="number" 
                        step="0.01"
                        defaultValue="5.50"
                        className="flex-1"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Valor que você paga para cada 1000 views geradas pelos clipadores
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Aprovação Automática</Label>
                      <p className="text-sm text-muted-foreground">
                        Permitir que clipadores publiquem sem aprovação prévia
                      </p>
                    </div>
                    <Switch defaultChecked={false} />
                  </div>

                  <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                    <h4 className="font-medium text-warning mb-2">⚠️ Importante</h4>
                    <p className="text-sm text-muted-foreground">
                      Com aprovação automática desativada, você precisará revisar cada clipe antes da publicação.
                      Clipes aprovados automaticamente podem gerar custos imediatos.
                    </p>
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
                        Receber alertas sobre novos clipes e atividades
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
                        Permitir que clipadores vejam seu perfil
                      </p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                </div>
              </Card>
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