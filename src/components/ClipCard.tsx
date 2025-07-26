import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Eye, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  XCircle, 
  Clock3,
  Youtube,
  Instagram,
  Facebook
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ClipCardProps {
  id: string;
  title: string;
  thumbnail: string;
  views: { youtube?: number; tiktok?: number; instagram?: number; facebook?: number };
  totalViews: number;
  earnings: number;
  status: "pending" | "approved" | "rejected";
  clipperName: string;
  clipperAvatar?: string;
  platform: "youtube" | "tiktok" | "instagram" | "facebook";
  createdAt: string;
  isStreamerView?: boolean;
  onApprove?: () => void;
  onReject?: () => void;
}

export function ClipCard({
  title,
  thumbnail,
  views,
  totalViews,
  earnings,
  status,
  clipperName,
  clipperAvatar,
  platform,
  createdAt,
  isStreamerView = false,
  onApprove,
  onReject
}: ClipCardProps) {
  const [imageError, setImageError] = useState(false);

  const statusConfig = {
    pending: { 
      color: "text-warning bg-warning/10", 
      icon: Clock3, 
      text: "Pendente" 
    },
    approved: { 
      color: "text-success bg-success/10", 
      icon: CheckCircle, 
      text: "Aprovado" 
    },
    rejected: { 
      color: "text-destructive bg-destructive/10", 
      icon: XCircle, 
      text: "Rejeitado" 
    }
  };

  const platformIcons = {
    youtube: Youtube,
    tiktok: () => <div className="w-4 h-4 bg-foreground rounded" />,
    instagram: Instagram,
    facebook: Facebook
  };

  const PlatformIcon = platformIcons[platform];
  const StatusIcon = statusConfig[status].icon;

  return (
    <div className="glass-card rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative h-48 bg-muted/20 overflow-hidden">
        {!imageError ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <Eye className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Thumbnail indisponível</p>
            </div>
          </div>
        )}
        
        {/* Platform badge */}
        <div className="absolute top-3 left-3">
          <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur">
            <PlatformIcon className="w-4 h-4 text-white" />
            <span className="text-xs text-white font-medium capitalize">{platform}</span>
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <Badge className={cn("text-xs", statusConfig[status].color)}>
            <StatusIcon className="w-3 h-3 mr-1" />
            {statusConfig[status].text}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Clipper info */}
        <div className="flex items-center space-x-2 mb-3">
          <Avatar className="w-6 h-6">
            <AvatarImage src={clipperAvatar} alt={clipperName} />
            <AvatarFallback className="text-xs">
              {clipperName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{clipperName}</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {createdAt}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Views</p>
              <p className="text-sm font-semibold text-foreground">
                {totalViews.toLocaleString('pt-BR')}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-success" />
            <div>
              <p className="text-xs text-muted-foreground">Ganhos</p>
              <p className="text-sm font-semibold text-success">
                R$ {earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>

        {/* Platform breakdown */}
        {status === "approved" && (
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
            {Object.entries(views).map(([plat, count]) => (
              count ? (
                <div key={plat} className="flex items-center justify-between">
                  <span className="capitalize">{plat}:</span>
                  <span>{count.toLocaleString('pt-BR')}</span>
                </div>
              ) : null
            ))}
          </div>
        )}

        {/* Actions (for streamer view) */}
        {isStreamerView && status === "pending" && (
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              className="flex-1 bg-success hover:bg-success/80"
              onClick={onApprove}
            >
              <CheckCircle className="w-4 h-4 mr-1" />
              Aprovar
            </Button>
            <Button 
              size="sm" 
              variant="destructive" 
              className="flex-1"
              onClick={onReject}
            >
              <XCircle className="w-4 h-4 mr-1" />
              Rejeitar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}