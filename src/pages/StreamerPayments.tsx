import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider } from "@/components/ui/sidebar";
import { 
  DollarSign,
  Download,
  Calendar,
  Check,
  Clock,
  AlertCircle,
  CreditCard,
  TrendingUp,
  Users
} from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function StreamerPayments() {
  const streamerData = {
    name: "GamerPro",
    avatar: avatarPlaceholder,
    rank: 2,
    credits: 15673
  };

  const pendingPayments = [
    {
      id: "1",
      clipperName: "ClipMaster",
      avatar: avatarPlaceholder,
      amount: 847.20,
      views: 154000,
      clipsCount: 12,
      dueDate: "05/Jan/2025",
      paymentMethod: "PIX"
    },
    {
      id: "2",
      clipperName: "EditPro", 
      avatar: avatarPlaceholder,
      amount: 623.50,
      views: 113400,
      clipsCount: 9,
      dueDate: "05/Jan/2025",
      paymentMethod: "PIX"
    },
    {
      id: "3",
      clipperName: "VideoWizard",
      avatar: avatarPlaceholder,
      amount: 412.80,
      views: 75060,
      clipsCount: 7,
      dueDate: "05/Jan/2025",
      paymentMethod: "PIX"
    }
  ];

  const paymentHistory = [
    {
      id: "1",
      clipperName: "ClipMaster",
      amount: 1247.80,
      date: "15/Dez/2024",
      status: "completed",
      method: "PIX",
      transactionId: "TXN123456"
    },
    {
      id: "2",
      clipperName: "EditPro",
      amount: 892.50,
      date: "15/Dez/2024", 
      status: "completed",
      method: "PIX",
      transactionId: "TXN123457"
    },
    {
      id: "3",
      clipperName: "VideoWizard",
      amount: 654.20,
      date: "15/Dez/2024",
      status: "completed",
      method: "PIX",
      transactionId: "TXN123458"
    },
    {
      id: "4",
      clipperName: "ClipGenius",
      amount: 423.75,
      date: "15/Dez/2024",
      status: "pending",
      method: "PIX",
      transactionId: "TXN123459"
    }
  ];

  const monthlyStats = {
    totalPaid: 3218.25,
    totalPending: 1883.50,
    totalClippers: 8,
    averagePerClipper: 402.28
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
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    <span className="gradient-text">Pagamentos</span> dos Clipadores
                  </h1>
                  <p className="text-muted-foreground">
                    Gerencie os pagamentos e acompanhe o histórico financeiro
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Relatório
                  </Button>
                  <Button className="btn-gaming">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Processar Pagamentos
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
                    <p className="text-sm text-muted-foreground">Pagos este Mês</p>
                    <p className="text-2xl font-bold text-success">
                      R$ {monthlyStats.totalPaid.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
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
                    <p className="text-sm text-muted-foreground">Pendentes</p>
                    <p className="text-2xl font-bold text-warning">
                      R$ {monthlyStats.totalPending.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Clipadores Ativos</p>
                    <p className="text-2xl font-bold">{monthlyStats.totalClippers}</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Média por Clipador</p>
                    <p className="text-2xl font-bold">
                      R$ {monthlyStats.averagePerClipper.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Tabs defaultValue="pending" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="pending" className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Pagamentos Pendentes ({pendingPayments.length})
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Histórico
                </TabsTrigger>
              </TabsList>

              {/* Pagamentos Pendentes */}
              <TabsContent value="pending" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Pagamentos Pendentes</h2>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-warning/10 text-warning">
                      {pendingPayments.length} clipadores
                    </Badge>
                    <Badge variant="secondary">
                      Vencimento: 05/Jan/2025
                    </Badge>
                  </div>
                </div>

                {pendingPayments.length === 0 ? (
                  <Card className="glass-card p-8 text-center">
                    <Check className="w-12 h-12 mx-auto mb-4 text-success" />
                    <h3 className="text-lg font-semibold mb-2">Todos os pagamentos em dia!</h3>
                    <p className="text-muted-foreground">
                      Não há pagamentos pendentes no momento
                    </p>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {pendingPayments.map((payment) => (
                      <Card key={payment.id} className="glass-card p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <img 
                              src={payment.avatar} 
                              alt={payment.clipperName}
                              className="w-12 h-12 rounded-full"
                            />
                            <div>
                              <h3 className="font-semibold">{payment.clipperName}</h3>
                              <p className="text-sm text-muted-foreground">
                                {payment.clipsCount} clipes • {payment.views.toLocaleString()} views
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-warning">
                              R$ {payment.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Vence em {payment.dueDate}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">
                              {payment.paymentMethod}
                            </Badge>
                            <Button className="btn-gaming" size="sm">
                              <Check className="w-4 h-4 mr-2" />
                              Pagar
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                    
                    <Card className="glass-card p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="w-5 h-5 text-warning" />
                          <span className="font-semibold">Total Pendente:</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-bold text-warning">
                            R$ {pendingPayments.reduce((sum, p) => sum + p.amount, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </span>
                          <Button className="btn-gaming">
                            <CreditCard className="w-4 h-4 mr-2" />
                            Pagar Todos
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                )}
              </TabsContent>

              {/* Histórico */}
              <TabsContent value="history" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Histórico de Pagamentos</h2>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </Button>
                </div>

                <Card className="glass-card">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Clipador</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Método</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>ID Transação</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paymentHistory.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <img 
                                src={avatarPlaceholder} 
                                alt={payment.clipperName}
                                className="w-8 h-8 rounded-full"
                              />
                              <span className="font-medium">{payment.clipperName}</span>
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold">
                            R$ {payment.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </TableCell>
                          <TableCell>{payment.date}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{payment.method}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              className={
                                payment.status === "completed" 
                                  ? "bg-success/10 text-success" 
                                  : "bg-warning/10 text-warning"
                              }
                            >
                              {payment.status === "completed" ? "Concluído" : "Pendente"}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-mono text-sm">
                            {payment.transactionId}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}