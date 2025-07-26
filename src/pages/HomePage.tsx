import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ClipZoneHeader } from "@/components/ClipZoneHeader";
import { StatsCard } from "@/components/StatsCard";
import { 
  Users, 
  Zap, 
  TrendingUp, 
  Award,
  PlayCircle,
  DollarSign,
  Crown,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-clipzone.jpg";

export default function HomePage() {
  const [userType, setUserType] = useState<"streamer" | "clipador" | null>(null);

  const handleLogin = (type: "streamer" | "clipador") => {
    setUserType(type);
  };

  if (userType) {
    // Redirect to dashboard based on user type
    window.location.href = userType === "streamer" ? "/streamer" : "/clipador";
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <ClipZoneHeader onLogin={() => {}} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="ClipZone Platform"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6 animate-float">
              <Crown className="w-5 h-5 text-warning mr-2" />
              <span className="text-sm font-semibold">A revolução dos criadores de conteúdo</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">ClipZone</span>
              <br />
              <span className="text-foreground">Creator's Paradise</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A plataforma que conecta <strong className="text-primary">streamers</strong> e 
              <strong className="text-secondary"> clipadores</strong>, transformando conteúdo em recompensas reais.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg"
                className="btn-gaming w-full sm:w-auto text-lg px-8 py-4"
                onClick={() => handleLogin("streamer")}
              >
                <PlayCircle className="w-6 h-6 mr-2" />
                Sou Streamer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-4 border-2 border-secondary text-secondary hover:bg-secondary/10"
                onClick={() => handleLogin("clipador")}
              >
                <Zap className="w-6 h-6 mr-2" />
                Sou Clipador
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Números que <span className="gradient-text">impressionam</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma comunidade crescente de criadores monetizando seu talento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Streamers Ativos"
              value="2,847"
              change="+23% este mês"
              changeType="positive"
              icon={Users}
              gradient="primary"
            />
            <StatsCard
              title="Clipadores"
              value="12,943"
              change="+45% este mês"
              changeType="positive"
              icon={Zap}
              gradient="secondary"
            />
            <StatsCard
              title="Visualizações"
              value="847M"
              change="+67% este mês"
              changeType="positive"
              icon={TrendingUp}
              gradient="tertiary"
            />
            <StatsCard
              title="Pagamentos"
              value="R$ 284K"
              change="+89% este mês"
              changeType="positive"
              icon={DollarSign}
              gradient="primary"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Como <span className="gradient-text">funciona</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sistema inteligente de monetização para creators
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* For Streamers */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                     style={{ background: 'var(--gradient-primary)' }}>
                  <PlayCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold ml-4">Para Streamers</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <strong>Configure seu CPM:</strong> Defina quanto pagar por mil visualizações
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <strong>Receba clipes:</strong> Clipadores enviam conteúdo do seu canal
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <strong>Aprove e monitore:</strong> Controle total sobre o conteúdo publicado
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <strong>Crie desafios:</strong> Gamifique com rankings e prêmios
                  </div>
                </li>
              </ul>
            </div>
            
            {/* For Clippers */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                     style={{ background: 'var(--gradient-secondary)' }}>
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold ml-4">Para Clipadores</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <div>
                    <strong>Encontre streamers:</strong> Conecte-se com creators do seu nicho
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <div>
                    <strong>Crie clipes:</strong> Edite e publique conteúdo viral
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <div>
                    <strong>Ganhe por views:</strong> Receba pagamento automático baseado em CPM
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <div>
                    <strong>Compita em rankings:</strong> Ganhe prêmios extras em desafios
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card mt-20 py-12 border-t border-border/20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
                 style={{ background: 'var(--gradient-primary)' }}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">ClipZone</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            A revolução dos criadores de conteúdo chegou
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 ClipZone. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}