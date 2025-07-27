import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SidebarProvider } from "@/components/ui/sidebar";
import { 
  DollarSign,
  TrendingUp,
  Calendar,
  Download,
  CreditCard,
  Wallet,
  Eye,
  Clock,
  CheckCircle,
  Star
} from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function ClipadorEarnings() {
  const clipadorData = {
    name: "ClipMaster",
    avatar: avatarPlaceholder,
    rank: 1,
    credits: 2475
  };

  const earningsStats = {
    totalEarnings: 6875.00,
    pendingPayment: 847.20,
    thisMonth: 2475.00,
    lastPayout: 1247.80,
    nextPayoutDate: "05/Jan/2025"
  };

  const platformEarnings = [
    {
      platform: "YouTube",
      earnings: 3247.50,
      percentage: 47.2,
      views: 589000,
      cpm: 5.51
    },
    {
      platform: "TikTok",
      earnings: 2935.00,
      percentage: 42.7,
      views: 534000,
      cpm: 5.50
    },
    {
      platform: "Instagram",
      earnings: 692.50,
      percentage: 10.1,
      views: 126000,
      cpm: 5.50
    }
  ];

  const earningsHistory = [
    {
      id: "1",
      date: "15/Dez/2024",
      amount: 1247.80,
      status: "completed",
      method: "PIX",
      streamer: "GamerPro",
      views: 226912
    },
    {
      id: "2",
      date: "15/Nov/2024",
      amount: 934.50,
      status: "completed",
      method: "PIX",
      streamer: "GamerPro",
      views: 169909
    },
    {
      id: "3",
      date: "15/Out/2024",
      amount: 823.75,
      status: "completed",
      method: "PIX",
      streamer: "GamerPro",
      views: 149773
    },
    {
      id: "4",
      date: "Processando...",
      amount: 847.20,
      status: "pending",
      method: "PIX",
      streamer: "GamerPro",
      views: 154040
    }
  ];

  const topClips = [
    {
      title: "REAÇÃO HILÁRIA - Momento Épico da Live",
      views: 170000,
      earnings: 935.00,
      platform: "TikTok",
      date: "1 semana atrás"
    },
    {
      title: "JOGADA ÉPICA no Valorant - ACE Impossível!",
      views: 68000,
      earnings: 374.00,
      platform: "YouTube",
      date: "3 dias atrás"
    },
    {
      title: "RAGE ÉPICO - Streamer Perdeu a Linha",
      views: 45000,
      earnings: 247.50,
      platform: "Instagram",
      date: "2 semanas atrás"
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
                    Meus <span className="gradient-text">Ganhos</span>
                  </h1>
                  <p className="text-muted-foreground">
                    Acompanhe seus ganhos, pagamentos e performance financeira
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Extrato
                  </Button>
                  <Button className="btn-gaming">
                    <Wallet className="w-4 h-4 mr-2" />
                    Solicitar Saque
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="glass-card p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ganhos Totais</p>
                    <p className="text-2xl font-bold text-success">
                      R$ {earningsStats.totalEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-warning" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pendente</p>
                    <p className="text-2xl font-bold text-warning">
                      R$ {earningsStats.pendingPayment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Este Mês</p>
                    <p className="text-2xl font-bold">
                      R$ {earningsStats.thisMonth.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Próximo Pagamento</p>
                    <p className="text-lg font-bold">{earningsStats.nextPayoutDate}</p>
                  </div>
                </div>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview" className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Visão Geral
                </TabsTrigger>
                <TabsTrigger value="platforms" className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Por Plataforma
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Histórico
                </TabsTrigger>
                <TabsTrigger value="top-clips" className="flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  Top Clipes
                </TabsTrigger>
              </TabsList>

              {/* Visão Geral */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Próximo Pagamento */}
                  <Card className="glass-card p-6">
                    <h3 className="text-lg font-semibold mb-4">Próximo Pagamento</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Valor Pendente</span>
                        <span className="text-2xl font-bold text-warning">
                          R$ {earningsStats.pendingPayment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Data de Pagamento</span>
                        <span className="font-semibold">{earningsStats.nextPayoutDate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Método</span>
                        <span className="font-semibold">PIX</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Status</span>
                        <Badge className="bg-warning/10 text-warning">
                          <Clock className="w-3 h-3 mr-1" />
                          Processando
                        </Badge>
                      </div>
                    </div>
                  </Card>

                  {/* Performance do Mês */}
                  <Card className="glass-card p-6">
                    <h3 className="text-lg font-semibold mb-4">Performance Dezembro</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Ganhos do Mês</span>
                        <span className="text-2xl font-bold text-success">
                          R$ {earningsStats.thisMonth.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Crescimento</span>
                        <Badge className="bg-success/10 text-success">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          +28% vs Nov
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Clipes Aprovados</span>
                        <span className="font-semibold">12 clipes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">CPM Médio</span>
                        <span className="font-semibold">R$ 5,50</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Configurações de Pagamento */}
                <Card className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-4">Configurações de Pagamento</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Método de Pagamento</h4>
                      <div className="flex items-center space-x-3 p-3 border border-border/20 rounded-lg">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">PIX</p>
                          <p className="text-sm text-muted-foreground">*****@email.com</p>
                        </div>
                        <Badge className="bg-success/10 text-success ml-auto">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Ativo
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Frequência</h4>
                      <Select defaultValue="monthly">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">Semanal</SelectItem>
                          <SelectItem value="monthly">Mensal (dia 15)</SelectItem>
                          <SelectItem value="manual">Sob demanda</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground mt-2">
                        Valor mínimo para saque: R$ 50,00
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Por Plataforma */}
              <TabsContent value="platforms" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Ganhos por Plataforma</h2>
                  <Select defaultValue="all-time">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="this-month">Este Mês</SelectItem>
                      <SelectItem value="last-month">Mês Passado</SelectItem>
                      <SelectItem value="all-time">Todo Período</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {platformEarnings.map((platform, index) => (
                    <Card key={index} className="glass-card p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">{platform.platform}</h3>
                        <Badge variant="outline">
                          {platform.percentage}%
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-2xl font-bold text-success">
                            R$ {platform.earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </p>
                          <p className="text-sm text-muted-foreground">Ganhos totais</p>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Total de Views</span>
                          <span className="font-semibold">{platform.views.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">CPM Médio</span>
                          <span className="font-semibold">R$ {platform.cpm.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-muted/20 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                          style={{ width: `${platform.percentage}%` }}
                        />
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-4">Dicas de Otimização</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2 text-success" />
                      <h4 className="font-medium mb-1">YouTube</h4>
                      <p className="text-sm text-muted-foreground">
                        Foque em clipes mais longos (30s-1min) para melhor engajamento
                      </p>
                    </div>
                    <div className="text-center">
                      <Eye className="w-8 h-8 mx-auto mb-2 text-warning" />
                      <h4 className="font-medium mb-1">TikTok</h4>
                      <p className="text-sm text-muted-foreground">
                        Aproveite trends e hashtags populares para viralizar
                      </p>
                    </div>
                    <div className="text-center">
                      <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-medium mb-1">Instagram</h4>
                      <p className="text-sm text-muted-foreground">
                        Use stories e reels para amplificar o alcance
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Histórico */}
              <TabsContent value="history" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Histórico de Pagamentos</h2>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar Extrato
                  </Button>
                </div>

                <Card className="glass-card">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead>Streamer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Método</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {earningsHistory.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell>{payment.date}</TableCell>
                          <TableCell className="font-semibold">
                            R$ {payment.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </TableCell>
                          <TableCell>{payment.views.toLocaleString()}</TableCell>
                          <TableCell>{payment.streamer}</TableCell>
                          <TableCell>
                            <Badge 
                              className={
                                payment.status === "completed" 
                                  ? "bg-success/10 text-success" 
                                  : "bg-warning/10 text-warning"
                              }
                            >
                              {payment.status === "completed" ? "Pago" : "Pendente"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{payment.method}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>

              {/* Top Clipes */}
              <TabsContent value="top-clips" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Clipes Mais Lucrativos</h2>
                  <Select defaultValue="earnings">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="earnings">Por Ganhos</SelectItem>
                      <SelectItem value="views">Por Views</SelectItem>
                      <SelectItem value="recent">Mais Recentes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  {topClips.map((clip, index) => (
                    <Card key={index} className="glass-card p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-warning to-secondary flex items-center justify-center text-sm font-bold text-white">
                            #{index + 1}
                          </div>
                          <div>
                            <h3 className="font-semibold">{clip.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{clip.platform}</span>
                              <span>•</span>
                              <span>{clip.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-success">
                            R$ {clip.earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {clip.views.toLocaleString()} views
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="glass-card p-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-4 text-warning" />
                  <h3 className="text-lg font-semibold mb-2">Seu Melhor Clipe</h3>
                  <p className="text-muted-foreground mb-4">
                    "REAÇÃO HILÁRIA" foi seu clipe mais lucrativo com <span className="font-semibold text-success">R$ 935,00</span> em ganhos!
                  </p>
                  <Badge className="bg-warning/10 text-warning">
                    170K views • TikTok
                  </Badge>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}