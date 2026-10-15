import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// TODO: set these to your GitHub account/org and repository name.
const GITHUB_ORG = 'Coding-Studio-Myanmar';
const GITHUB_REPO = 'helpsite';

const config: Config = {
  title: 'Coding Studio Knowledge Base',
  tagline: 'How-to guides, technical documentation and training for our products',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  // GitHub Pages: https://<org>.github.io/<repo>/
  // If you use a custom domain (e.g. help.codingstudio.net), set url to it and baseUrl to '/'.
  url: `https://${GITHUB_ORG}.github.io`,
  baseUrl: `/${GITHUB_REPO}/`,
  organizationName: GITHUB_ORG,
  projectName: GITHUB_REPO,
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          // Needs git history, so only enabled in CI (or set SHOW_LAST_UPDATE=1 locally after your first commit).
          showLastUpdateTime: !!(process.env.CI || process.env.SHOW_LAST_UPDATE),
          editUrl: `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}/tree/main/site/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Coding Studio',
      logo: {
        alt: 'Coding Studio logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/docs/training', label: 'Training', position: 'left'},
        {to: '/docs/getting-started', label: 'Getting Started', position: 'left'},
        {
          href: 'https://codingstudio.net',
          label: 'codingstudio.net',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Getting Started', to: '/docs/getting-started'},
            {label: 'Training Guides', to: '/docs/training'},
          ],
        },
        {
          title: 'Company',
          items: [{label: 'Coding Studio', href: 'https://codingstudio.net'}],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Coding Studio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'powershell', 'json', 'csharp', 'sql'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
