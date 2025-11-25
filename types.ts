export interface CotStep {
  stepName: string;
  description: string;
  icon?: string; // Optional emoji or icon identifier
}

export interface Project {
  id: string;
  title: string;
  client: string;
  thumbnailImg: string;
  heroImg: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  tools: string[];
  promptHook: string;
  strategyDesc: string;
  cotSteps: CotStep[];
  videoUrl?: string; // Optional video embed URL (YouTube/Vimeo)
  externalLink?: string; // Optional external link (e.g. live website)
}