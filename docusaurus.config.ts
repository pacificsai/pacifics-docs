import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Pacifics',
  tagline: 'Security Context + Attack Path Intelligence + Controlled AI',
  favicon: 'img/icons/app/favicon.png',

  // Inline analytics. Order matters: Amplitude (with the GA Events Forwarder)
  // must load BEFORE the Google Tag snippet so all GA events are forwarded.
  headTags: [
    // Amplitude SDK + Google Analytics Events Forwarder — inline, hardcoded API key.
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        !function(){"use strict";!function(e,t){var r=e.amplitude||{_q:[],_iq:{}};if(r.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var n=function(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}},s=function(e,t,r){return function(n){e._q.push({name:t,args:Array.prototype.slice.call(r,0),resolve:n})}},o=function(e,t,r){e[t]=function(){if(r)return{promise:new Promise(s(e,t,Array.prototype.slice.call(arguments)))}}},i=function(e){for(var t=0;t<m.length;t++)o(e,m[t],!1);for(var r=0;r<y.length;r++)o(e,y[r],!0)};r.invoked=!0;var a=t.createElement("script");a.type="text/javascript",a.crossOrigin="anonymous",a.src="https://cdn.amplitude.com/libs/plugin-ga-events-forwarder-browser-0.4.2-min.js.gz",a.onload=function(){e.gaEventsForwarder&&e.gaEventsForwarder.plugin&&e.amplitude.add(e.gaEventsForwarder.plugin())};var c=t.createElement("script");c.type="text/javascript",c.integrity="sha384-pY2pkwHaLM/6UIseFHVU3hOKr6oAvhLcdYkoRZyaMDWLjpM6B7nTxtOdE823WAOQ",c.crossOrigin="anonymous",c.async=!0,c.src="https://cdn.amplitude.com/libs/analytics-browser-2.11.0-min.js.gz",c.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var u=t.getElementsByTagName("script")[0];u.parentNode.insertBefore(a,u),u.parentNode.insertBefore(c,u);for(var p=function(){return this._q=[],this},d=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],l=0;l<d.length;l++)n(p,d[l]);r.Identify=p;for(var g=function(){return this._q=[],this},v=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],f=0;f<v.length;f++)n(g,v[f]);r.Revenue=g;var m=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset","extendSession"],y=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];i(r),r.createInstance=function(e){return r._iq[e]={_q:[]},i(r._iq[e]),r._iq[e]},e.amplitude=r}}(window,document)}();

        amplitude.init('0ba6c1c1db6c16b21ae8e877458e0071');
      `,
    },
    // Google tag (gtag.js) — inline, hardcoded measurement ID.
    {
      tagName: 'script',
      attributes: {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-959GJY4M3S',
      },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-959GJY4M3S');
      `,
    },
    // Microsoft Clarity — inline, hardcoded project ID.
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "yse39qpdrv");
      `,
    },
  ],

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
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Dynamically generate robots.txt from the site URL so it always points at
    // the correct sitemap, regardless of the deployed domain.
    function robotsTxtPlugin() {
      return {
        name: 'pacifics-robots-txt',
        async postBuild({siteConfig, outDir}) {
          const {url} = siteConfig;
          const sitemapUrl = new URL('/sitemap.xml', url).href;
          const content = [
            'User-agent: *',
            'Allow: /',
            '',
            `Sitemap: ${sitemapUrl}`,
            '',
          ].join('\n');
          const fs = await import('fs/promises');
          const path = await import('path');
          await fs.writeFile(path.join(outDir, 'robots.txt'), content, 'utf8');
        },
      };
    },
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
