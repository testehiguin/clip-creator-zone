import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Link as LinkIcon, 
  Youtube,
  Instagram,
  Facebook,
  CheckCircle,
  Clock,
  AlertCircle,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

export default function NewClipPage() {
  const [step, setStep] = useState(1);
  const [selectedStreamer, setSelectedStreamer] = useState("");
  const [clipUrl, setClipUrl] = useState("");
  const [clipTitle, setClipTitle] = useState("");
  const [clipDescription, setClipDescription] = useState("");
  const [platform, setPlatform] = useState("");

  // Mock data
  const clipadorData = {
    name: "ClipMaster",
    avatar: avatarPlaceholder,
    rank: 1,
    credits: 2475
  };

  const availableStreamers = [
    {
      id: "1",
      name: "GamerPro", 
      avatar: avatarPlaceholder,
      cpm: 5.50,
      requiresApproval: false,
      category: "Gaming"
    },
    {
      id: "2",
      name: "ReactQueen",
      avatar: avatarPlaceholder,
      cpm: 4.25,
      requiresApproval: true,
      category: "React Content"
    },
    {
      id: "3",
      name: "TechGuru",
      avatar: avatarPlaceholder,
      cpm: 3.80,
      requiresApproval: false,
      category: "Tech Reviews"
    }
  ];

  const detectPlatform = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('tiktok.com')) return 'tiktok';
    if (url.includes('instagram.com')) return 'instagram';
    if (url.includes('facebook.com')) return 'facebook';
    return '';
  };

  const handleUrlChange = (url: string) => {
    setClipUrl(url);
    const detectedPlatform = detectPlatform(url);
    if (detectedPlatform) {
      setPlatform(detectedPlatform);
    }
  };

  const handleSubmit = () => {
    // Here would be the submission logic
    console.log({
      streamer: selectedStreamer,
      url: clipUrl,
      title: clipTitle,
      description: clipDescription,
      platform
    });
    
    // Show success and redirect
    alert("Clipe enviado com sucesso!");
    window.location.href = "/clipador/clips";
  };

  const getPlatformIcon = (platformName: string) => {
    switch(platformName) {
      case "youtube": return <Youtube className="w-4 h-4 text-red-500" />;
      case "instagram": return <Instagram className="w-4 h-4 text-pink-500" />;
      case "facebook": return <Facebook className="w-4 h-4 text-blue-500" />;
      case "tiktok": return <div className="w-4 h-4 bg-foreground rounded" />;
      default: return <LinkIcon className="w-4 h-4" />;
    }
  };

  const selectedStreamerData = availableStreamers.find(s => s.id === selectedStreamer);

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
          <div className="container mx-auto px-6 py-8 max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Novo <span className="gradient-text">Clipe</span>
              </h1>
              <p className="text-muted-foreground">
                Transforme momentos épicos em conteúdo viral
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                  step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  1
                </div>
                <div className={cn(
                  "w-16 h-1 rounded",
                  step >= 2 ? "bg-primary" : "bg-muted"
                )} />
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                  step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  2
                </div>
                <div className={cn(
                  "w-16 h-1 rounded",
                  step >= 3 ? "bg-primary" : "bg-muted"
                )} />
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                  step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  3
                </div>
              </div>
            </div>

            {/* Step 1: Select Streamer */}
            {step === 1 && (
              <Card className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Escolha o Streamer</h3>
                <p className="text-muted-foreground mb-6">
                  Selecione para qual streamer você quer enviar este clipe
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableStreamers.map((streamer) => (
                    <Card 
                      key={streamer.id}
                      className={cn(
                        "p-4 cursor-pointer transition-all duration-200 hover:scale-105",
                        selectedStreamer === streamer.id 
                          ? "ring-2 ring-primary bg-primary/5" 
                          : "hover:bg-muted/20"
                      )}
                      onClick={() => setSelectedStreamer(streamer.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={streamer.avatar} alt={streamer.name} />
                          <AvatarFallback>
                            {streamer.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold">{streamer.name}</h4>
                            {streamer.requiresApproval ? (
                              <Clock className="w-4 h-4 text-warning" />
                            ) : (
                              <CheckCircle className="w-4 h-4 text-success" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{streamer.category}</p>
                          <p className="text-sm font-semibold text-success">
                            CPM: R$ {streamer.cpm.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 flex justify-end">
                  <Button 
                    className="btn-gaming"
                    disabled={!selectedStreamer}
                    onClick={() => setStep(2)}
                  >
                    Continuar
                  </Button>
                </div>
              </Card>
            )}

            {/* Step 2: Clip URL */}
            {step === 2 && (
              <Card className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Link do Clipe</h3>
                <p className="text-muted-foreground mb-6">
                  Cole o link do seu clipe das redes sociais
                </p>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="clip-url">URL do Clipe</Label>
                    <div className="relative mt-2">
                      <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="clip-url"
                        placeholder="https://youtube.com/watch?v=..."
                        value={clipUrl}
                        onChange={(e) => handleUrlChange(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {platform && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">Plataforma detectada:</span>
                      <div className="flex items-center space-x-1">
                        {getPlatformIcon(platform)}
                        <span className="text-sm font-semibold capitalize">{platform}</span>
                      </div>
                    </div>
                  )}

                  {clipUrl && !platform && (
                    <div className="flex items-center space-x-2 text-warning">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">URL não reconhecida. Verifique se é de uma plataforma suportada.</span>
                    </div>
                  )}
                </div>

                {/* Platform Selection Override */}
                <div className="mt-6">
                  <Label>Ou selecione a plataforma manualmente:</Label>
                  <Select value={platform} onValueChange={setPlatform}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Escolha a plataforma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="youtube">
                        <div className="flex items-center space-x-2">
                          <Youtube className="w-4 h-4 text-red-500" />
                          <span>YouTube</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="tiktok">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-foreground rounded" />
                          <span>TikTok</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="instagram">
                        <div className="flex items-center space-x-2">
                          <Instagram className="w-4 h-4 text-pink-500" />
                          <span>Instagram</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="facebook">
                        <div className="flex items-center space-x-2">
                          <Facebook className="w-4 h-4 text-blue-500" />
                          <span>Facebook</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Voltar
                  </Button>
                  <Button 
                    className="btn-gaming"
                    disabled={!clipUrl || !platform}
                    onClick={() => setStep(3)}
                  >
                    Continuar
                  </Button>
                </div>
              </Card>
            )}

            {/* Step 3: Details & Submit */}
            {step === 3 && (
              <Card className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Detalhes do Clipe</h3>
                <p className="text-muted-foreground mb-6">
                  Adicione informações que ajudem na aprovação
                </p>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="clip-title">Título do Clipe</Label>
                    <Input
                      id="clip-title"
                      placeholder="Ex: JOGADA ÉPICA - ACE Impossível no Valorant!"
                      value={clipTitle}
                      onChange={(e) => setClipTitle(e.target.value)}
                      className="mt-2"
                      maxLength={100}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {clipTitle.length}/100 caracteres
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="clip-description">Descrição (Opcional)</Label>
                    <Textarea
                      id="clip-description"
                      placeholder="Descreva o momento destacado no clipe..."
                      value={clipDescription}
                      onChange={(e) => setClipDescription(e.target.value)}
                      className="mt-2"
                      rows={3}
                      maxLength={500}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {clipDescription.length}/500 caracteres
                    </p>
                  </div>

                  {/* Summary */}
                  <Card className="p-4 bg-muted/20">
                    <h4 className="font-semibold mb-3">Resumo do Envio</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Streamer:</span>
                        <span className="font-semibold">{selectedStreamerData?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Plataforma:</span>
                        <div className="flex items-center space-x-1">
                          {getPlatformIcon(platform)}
                          <span className="font-semibold capitalize">{platform}</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">CPM:</span>
                        <span className="font-semibold text-success">R$ {selectedStreamerData?.cpm.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Aprovação:</span>
                        <span className={cn(
                          "font-semibold",
                          selectedStreamerData?.requiresApproval ? "text-warning" : "text-success"
                        )}>
                          {selectedStreamerData?.requiresApproval ? "Manual" : "Automática"}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Voltar
                  </Button>
                  <Button 
                    className="btn-gaming"
                    disabled={!clipTitle.trim()}
                    onClick={handleSubmit}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Enviar Clipe
                  </Button>
                </div>
              </Card>
            )}

            {/* Tips */}
            <Card className="glass-card p-6 mt-8 border-l-4 border-l-warning">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-5 h-5 text-warning mt-0.5" />
                <div>
                  <h4 className="font-semibold text-warning mb-2">Dicas para Aprovação</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use títulos chamativos e descritivos</li>
                    <li>• Destaque momentos únicos e virais</li>
                    <li>• Verifique se o clipe tem boa qualidade</li>
                    <li>• Evite conteúdo repetitivo ou muito longo</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}