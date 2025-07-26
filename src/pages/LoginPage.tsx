import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { ClipZoneHeader } from "@/components/ClipZoneHeader";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  PlayCircle, 
  Zap,
  ArrowRight,
  Youtube,
  Instagram,
  Facebook
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"streamer" | "clipador">("streamer");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to appropriate dashboard
    window.location.href = userType === "streamer" ? "/streamer" : "/clipador";
  };

  return (
    <div className="min-h-screen bg-background">
      <ClipZoneHeader />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {isLogin ? "Bem-vindo de volta!" : "Junte-se à revolução"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin 
                ? "Acesse sua conta e continue criando" 
                : "Crie sua conta e comece a monetizar"
              }
            </p>
          </div>

          {/* User Type Selection */}
          <div className="flex gap-3 mb-6">
            <Button
              variant={userType === "streamer" ? "default" : "outline"}
              className={cn(
                "flex-1 h-20 flex-col",
                userType === "streamer" && "btn-gaming"
              )}
              onClick={() => setUserType("streamer")}
            >
              <PlayCircle className="w-6 h-6 mb-1" />
              <span>Streamer</span>
            </Button>
            <Button
              variant={userType === "clipador" ? "default" : "outline"}
              className={cn(
                "flex-1 h-20 flex-col",
                userType === "clipador" && "btn-gaming"
              )}
              onClick={() => setUserType("clipador")}
            >
              <Zap className="w-6 h-6 mb-1" />
              <span>Clipador</span>
            </Button>
          </div>

          {/* Form */}
          <Card className="glass-card p-6">
            <Tabs value={isLogin ? "login" : "register"} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger 
                  value="login" 
                  onClick={() => setIsLogin(true)}
                >
                  Entrar
                </TabsTrigger>
                <TabsTrigger 
                  value="register"
                  onClick={() => setIsLogin(false)}
                >
                  Cadastrar
                </TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent value="login">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">
                      Lembrar de mim
                    </Label>
                  </div>

                  <Button type="submit" className="w-full btn-gaming">
                    Entrar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </TabsContent>

              {/* Register Form */}
              <TabsContent value="register">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome {userType === "streamer" ? "do Canal" : "de Usuário"}</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder={userType === "streamer" ? "GamerPro" : "ClipMaster"}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="seu@email.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      Aceito os <button type="button" className="text-primary underline">termos de uso</button>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full btn-gaming">
                    Criar Conta
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Social Login */}
            <div className="mt-6 pt-6 border-t border-border/20">
              <p className="text-center text-sm text-muted-foreground mb-4">
                Ou continue com
              </p>
              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" size="sm" className="h-10">
                  <Youtube className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-10">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-10">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Footer */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
            <button
              type="button"
              className="text-primary underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Cadastre-se" : "Faça login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}