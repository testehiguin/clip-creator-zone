import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Users,
  Scissors,
  Trophy,
  CreditCard,
  Settings,
  LogOut,
  PlayCircle,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  userType: "streamer" | "clipador";
  userName: string;
  userAvatar?: string;
  rank?: number;
  credits?: number;
}

export function AppSidebar({ userType, userName, userAvatar, rank, credits }: AppSidebarProps) {
  const { state, setOpenMobile } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const streamerItems = [
    { title: "Dashboard", url: "/streamer", icon: Home },
    { title: "Perfil", url: "/streamer/profile", icon: User },
    { title: "Clipadores", url: "/streamer/clippers", icon: Users },
    { title: "Clipes", url: "/streamer/clips", icon: Scissors },
    { title: "Rankings", url: "/streamer/rankings", icon: Trophy },
    { title: "Pagamentos", url: "/streamer/payments", icon: CreditCard },
  ];

  const clipadorItems = [
    { title: "Dashboard", url: "/clipador", icon: Home },
    { title: "Perfil", url: "/clipador/profile", icon: User },
    { title: "Streamers", url: "/clipador/streamers", icon: PlayCircle },
    { title: "Novo Clipe", url: "/clipador/new-clip", icon: Scissors },
    { title: "Meus Clipes", url: "/clipador/clips", icon: Zap },
    { title: "Rankings", url: "/clipador/rankings", icon: Trophy },
    { title: "Ganhos", url: "/clipador/earnings", icon: CreditCard },
  ];

  const items = userType === "streamer" ? streamerItems : clipadorItems;

  const isActive = (path: string) => currentPath === path;

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    cn(
      "transition-all duration-200",
      isActive 
        ? "bg-primary/10 text-primary border-r-2 border-primary font-medium" 
        : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
    );

  return (
    <Sidebar
      className={cn(
        "transition-all duration-300 border-r border-border/20",
        collapsed ? "w-16" : "w-64"
      )}
      collapsible="icon"
    >
      {/* Header */}
      <SidebarHeader className="p-4 border-b border-border/20">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                   style={{ background: 'var(--gradient-primary)' }}>
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold gradient-text">ClipZone</h2>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpenMobile(false)}
            className="h-8 w-8"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </SidebarHeader>

      {/* User Info */}
      {!collapsed && (
        <div className="p-4 border-b border-border/20">
          <div className="flex items-center space-x-3 mb-3">
            <Avatar className="w-10 h-10 border-2 border-primary/30">
              <AvatarImage src={userAvatar} alt={userName} />
              <AvatarFallback>
                {userName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground truncate">{userName}</p>
              <p className="text-sm text-muted-foreground capitalize">{userType}</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-between text-sm">
            {rank && (
              <Badge className="badge-rank">
                <Trophy className="w-3 h-3 mr-1" />
                #{rank}
              </Badge>
            )}
            {credits !== undefined && (
              <span className="text-success font-semibold">
                {credits.toLocaleString('pt-BR')} pts
              </span>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <SidebarContent className="flex-1">
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings Section */}
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Configurações
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to={`/${userType}/settings`} 
                    className={getNavCls}
                  >
                    <Settings className="h-4 w-4" />
                    {!collapsed && <span>Configurações</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4 border-t border-border/20">
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:text-destructive"
          onClick={() => window.location.href = "/"}
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span className="ml-2">Sair</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}