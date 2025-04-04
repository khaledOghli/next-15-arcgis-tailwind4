// lib/sidebar-config.ts

export interface SidebarConfig {
  // Sidebar dimensions
  width: string; // e.g. '16rem'
  widthMobile: string; // e.g. '18rem'
  iconWidth: string; // e.g. '3rem'

  // Height offset from the top (in px)
  heightOffset: number;
  paddingTop: number; // e.g. '0.75rem'
  // Position settings
  position: {
    top: string; // e.g. 'auto' or '65px'
    left?: string; // e.g. '1rem'
    right?: string;
  };

  // Animation settings
  animation: {
    duration: number; // in ms
    cubicBezier: string;
  };

  // Visual settings
  visual: {
    borderRadius: string;
    shadow: string; // e.g. 'lg' (use the corresponding Tailwind shadow class)
    border: boolean;
  };
}

// Default configuration
export const defaultSidebarConfig: SidebarConfig = {
  width: '20rem',
  widthMobile: '18rem',
  iconWidth: '3rem',
  heightOffset: 65,
  paddingTop: 21,
  position: {
    top: 'auto', // You can also use a fixed value like '65px' if you want the sidebar offset from the top
    left: '1rem',
  },
  animation: {
    duration: 300,
    cubicBezier: '0.34, 1.56, 0.64, 1', // Modern "overshoot" effect
  },
  visual: {
    borderRadius: '0.75rem',
    shadow: 'lg',
    border: true,
  },
};

// Preset configurations
export const sidebarPresets = {
  default: defaultSidebarConfig,
  minimal: {
    ...defaultSidebarConfig,
    visual: {
      borderRadius: '0.5rem',
      shadow: 'sm',
      border: false,
    },
  },
  dramatic: {
    ...defaultSidebarConfig,
    animation: {
      duration: 500,
      cubicBezier: '0.18, 0.89, 0.32, 1.28', // More dramatic overshoot
    },
    visual: {
      borderRadius: '1rem',
      shadow: 'xl',
      border: true,
    },
  },
};
