import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  className?: string;
  gradient?: "primary" | "secondary" | "tertiary";
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon,
  className,
  gradient = "primary"
}: StatsCardProps) {
  const gradientStyles = {
    primary: "var(--gradient-primary)",
    secondary: "var(--gradient-secondary)", 
    tertiary: "var(--gradient-tertiary)"
  };

  return (
    <div className={cn("glass-card p-6 rounded-xl relative overflow-hidden group hover:scale-105 transition-all duration-300", className)}>
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ background: gradientStyles[gradient] }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg" style={{ background: gradientStyles[gradient] }}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          {change && (
            <div className={cn(
              "text-sm font-semibold px-2 py-1 rounded",
              changeType === "positive" && "text-success bg-success/10",
              changeType === "negative" && "text-destructive bg-destructive/10",
              changeType === "neutral" && "text-muted-foreground bg-muted/20"
            )}>
              {change}
            </div>
          )}
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold text-foreground">
            {typeof value === 'number' ? value.toLocaleString('pt-BR') : value}
          </p>
        </div>
      </div>
    </div>
  );
}