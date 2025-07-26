import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Crown, Medal, Award, Eye, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface RankingCardProps {
  position: number;
  name: string;
  avatar?: string;
  views: number;
  earnings: number;
  isCurrentUser?: boolean;
  className?: string;
}

export function RankingCard({ 
  position, 
  name, 
  avatar, 
  views, 
  earnings, 
  isCurrentUser = false,
  className 
}: RankingCardProps) {
  const getRankIcon = () => {
    switch(position) {
      case 1: return <Crown className="w-5 h-5 text-warning" />;
      case 2: return <Trophy className="w-5 h-5 text-muted-foreground" />;
      case 3: return <Medal className="w-5 h-5 text-amber-600" />;
      default: return <Award className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getRankStyle = () => {
    if (position === 1) return "rank-gold animate-glow";
    if (position === 2) return "rank-silver";
    if (position === 3) return "rank-bronze";
    return "bg-muted/20 text-muted-foreground";
  };

  return (
    <div className={cn(
      "glass-card p-4 rounded-xl transition-all duration-300 hover:scale-105",
      isCurrentUser && "ring-2 ring-primary/50 glow-primary",
      position <= 3 && "border-2",
      position === 1 && "border-warning/50",
      position === 2 && "border-muted-foreground/30", 
      position === 3 && "border-amber-600/30",
      className
    )}>
      <div className="flex items-center space-x-4">
        {/* Position Badge */}
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg", getRankStyle())}>
          {position <= 3 ? getRankIcon() : position}
        </div>

        {/* User Info */}
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-foreground">{name}</h3>
              {isCurrentUser && (
                <Badge variant="secondary" className="text-xs">
                  Você
                </Badge>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span>{views.toLocaleString('pt-BR')}</span>
            </div>
            <div className="flex items-center space-x-1 text-success">
              <DollarSign className="w-4 h-4" />
              <span>R$ {earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>

        {/* Prize Indicator */}
        {position <= 3 && (
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Prêmio</p>
            <p className="text-sm font-bold text-warning">
              R$ {position === 1 ? '500' : position === 2 ? '300' : '150'}
            </p>
          </div>
        )}
      </div>

      {/* Progress to next position (for current user) */}
      {isCurrentUser && position > 1 && (
        <div className="mt-4 pt-4 border-t border-border/20">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Para #{position - 1}</span>
            <span>+{Math.floor(Math.random() * 1000)} views</span>
          </div>
          <div className="w-full bg-muted/20 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${Math.floor(Math.random() * 80) + 20}%`,
                background: 'var(--gradient-primary)'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}