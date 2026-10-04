import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Pacifics',
  tagline: 'Security Context + Attack Path Intelligence + Controlled AI',
  favicon: 'img/icons/app/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.pacifics.in',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pacificsai', // GitHub org/user name.
  projectName: 'pacifics-docs', // Repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pacificsai/pacifics-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/icons/app/favicon.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Pacifics',
      logo: {
        alt: 'Pacifics Logo',
        src: 'img/icons/app/dark.png',
        srcDark: 'img/icons/app/light.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://app.pacifics.in',
          label: 'App',
          position: 'right',
        },
        {
          href: 'https://github.com/pacificsai/pacifics-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/getting-started/introduction',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Website',
              href: 'https://pacifics.in',
            },
            {
              label: 'App',
              href: 'https://app.pacifics.in',
            },
            {
              label: 'Blog',
              href: 'https://pacifics.in/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/pacificsai/',
            },
            {
              label: 'X',
              href: 'https://x.com/pacificshq',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pacificsai/pacifics-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pacifics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
