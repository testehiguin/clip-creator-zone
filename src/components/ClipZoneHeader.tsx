import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, User, Trophy, Zap, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClipZoneHeaderProps {
  userType?: "streamer" | "clipador" | null;
  userName?: string;
  userAvatar?: string;
  rank?: number;
  credits?: number;
  onLogin?: () => void;
  onNotifications?: () => void;
}

export function ClipZoneHeader({ 
  userType, 
  userName, 
  userAvatar, 
  rank, 
  credits,
  onLogin,
  onNotifications 
}: ClipZoneHeaderProps) {
  const [hasNotifications] = useState(true);

  return (
    <header className="glass-card border-b border-border/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg glow-primary flex items-center justify-center" 
                 style={{ background: 'var(--gradient-primary)' }}>
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">ClipZone</h1>
              <p className="text-xs text-muted-foreground">Creator's Paradise</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Dashboard
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Rankings
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Clipes
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Ganhos
            </Button>
          </nav>

          {/* User Area */}
          <div className="flex items-center space-x-4">
            {userType ? (
              <>
                {/* Credits/Stats */}
                {credits !== undefined && (
                  <div className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg glass-card">
                    <Crown className="w-4 h-4 text-warning" />
                    <span className="text-sm font-semibold text-warning">
                      {credits.toLocaleString('pt-BR')} pts
                    </span>
                  </div>
                )}

                {/* Rank Badge */}
                {rank && (
                  <Badge className={cn(
                    "badge-rank",
                    rank <= 3 && "rank-gold",
                    rank > 3 && rank <= 10 && "rank-silver",
                    rank > 10 && "rank-bronze"
                  )}>
                    <Trophy className="w-3 h-3 mr-1" />
                    #{rank}
                  </Badge>
                )}

                {/* Notifications */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  onClick={onNotifications}
                >
                  <Bell className="w-5 h-5" />
                  {hasNotifications && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse" />
                  )}
                </Button>

                {/* User Profile */}
                <div className="flex items-center space-x-3">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-semibold text-foreground">{userName}</p>
                    <p className="text-xs text-muted-foreground capitalize">
                      {userType}
                    </p>
                  </div>
                  <Avatar className="w-10 h-10 border-2 border-primary/50 glow-primary">
                    <AvatarImage src={userAvatar} alt={userName} />
                    <AvatarFallback>
                      <User className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </>
            ) : (
              /* Login Button */
              <Button 
                onClick={onLogin}
                className="btn-gaming text-primary-foreground"
              >
                Entrar
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}