export interface SiteConfig {
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lang: string;
  base: string;
  website: string;
  social: Record<string, string>;
  googleAnalyticsId?: string;
  homeHeroDescription: string;
  blogDescription: string;
  projectsDescription: string;

  // Homepage post counts
  featuredPostsCount: number;
  latestPostsCount: number;

  // Homepage projects
  homeProjects: {
    enabled: boolean;
    count: number;
  };

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: boolean;
    filePath: string; // Path to markdown file with CTA content
  };

  // Homepage Hero block
  hero: {
    enabled: boolean;
    filePath: string;
  };

  // Giscus comments configuration
  comments: {
    enabled: boolean;
    repo: string; // e.g., 'username/repo'
    repoId: string;
    category: string;
    categoryId: string;
    mapping: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
    reactionsEnabled: boolean;
    emitMetadata: boolean;
    inputPosition: 'top' | 'bottom';
    theme: string; // e.g., 'preferred_color_scheme', 'light', 'dark'
    lang: string;
  };
}

export const SITE: SiteConfig = {
  author: 'A Foolish Man',
  desc: "Musings on movies, books, video games, technology, and life's peculiar adventures.",
  title: "A Foolish Man's musings",
  ogImage: 'og.png',
  lang: 'en-US',
  base: '/',
  website: 'https://afoolishman.com',
  social: {
    x: 'https://x.com/yourhandle',
    github: 'https://github.com/the-coder-kishor',
    telegram: 'https://t.me/yourhandle',
    facebook: 'https://facebook.com/yourhandle',
  },
  googleAnalyticsId: '', // Example: 'G-XXXXXXXXXX'
  homeHeroDescription:
    'A collection of thoughts on movies, books, video games, and technology. Sometimes insightful, often foolish, always honest. Join me as I explore the stories, games, and ideas that shape our world.',
  blogDescription:
    'Reviews, reflections, and rambling thoughts on movies, books, games, tech, and everything in between.',
  projectsDescription: 'Personal projects and creative experiments worth sharing.',

  // Homepage post counts
  featuredPostsCount: 3,
  latestPostsCount: 3,

  // Homepage projects
  homeProjects: {
    enabled: true,
    count: 4,
  },

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: true,
    filePath: 'site/cta.md',
  },

  hero: {
    enabled: true,
    filePath: 'site/hero.md',
  },

  // Giscus comments configuration
  // Get your configuration from https://giscus.app
  comments: {
    enabled: false, // Set to true after filling in the IDs below
    repo: 'alec-c4/spaceship', // Your GitHub repository
    repoId: '', // Get from https://giscus.app - enter repo above and copy the value
    category: 'General', // GitHub Discussions category name
    categoryId: '', // Get from https://giscus.app - select category and copy the value
    mapping: 'pathname',
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme', // Automatically matches your site theme
    lang: 'en',
  },
};
