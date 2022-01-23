// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reglas de Warmachine & Hordes',
  tagline: 'Traducción de código abierto de las reglas de Warmachine & Hordes',
  url: 'https://reglas-warmahordes.web.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'isorna',
  projectName: 'reglas-warmahordes',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/isorna/reglas-warmahordes/blob/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/isorna/reglas-warmahordes/blob/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Reglas Warmahordes',
        logo: {
          alt: 'Logo Reglas Warmahordes',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial',
            position: 'left',
            label: 'Tutorial',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/isorna/reglas-warmahordes',
            label: 'GitHub',
            position: 'right',
          },
					// {
					// 	type: 'docsVersionDropdown',
					// },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Reglas de Warmachine & Hordes',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/tutorial',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Alvaro Isorna. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

	plugins: [
		[
			'@docusaurus/plugin-pwa',
			{
				debug: true,
				offlineModeActivationStrategies: [
					'appInstalled',
					'standalone',
					'queryString',
				],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/img/logo.png',
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/manifest.json', // your PWA manifest
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: '#25c2a0',
					},
					{
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#25c2a0',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/apple-touch-icon.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: '#25c2a0',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/mstile-310x310.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#25c2a0',
          },
				],
			},
		],
	],
};

module.exports = config;
