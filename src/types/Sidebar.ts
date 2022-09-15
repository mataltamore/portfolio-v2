export interface SidebarCardProps {
  name: string;
  description: string;
  range?: string;
  site?: {
    name: string;
    link: string;
  };
}

export interface SidebarButtonProps {
  site: {
    name: string;
    link: string;
  };
}
