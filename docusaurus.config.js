// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Александр Алёхин',
  tagline: 'MERN stack Developer',
  url: 'https://alyokhin22.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'alyokhin22',
  projectName: 'alyokhin22.github.io',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
        },
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
        title: 'Александр Алёхин',
        logo: {
          alt: 'Александр Алёхин',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Новости', position: 'left'},
          {to: '/skills', label: 'Навыки', position: 'left'},
          {to: '/services', label: 'Услуги', position: 'left'},
          {to: '/blog/tags/портфолио', label: 'Портфолио', position: 'left'},
          {to: '/faq', label: 'FAQ', position: 'left'},
          {
            href: 'https://github.com/alyokhin22',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://t.me/alyokhin22',
            label: 'Telegram',
            position: 'right',
          },
          {
            href: 'https://vk.com/alyokhin22',
            label: 'VK',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Ресурсы',
            items: [
              {
                label: 'Навыки ',
                to: '/skills',
              },
              {
                label: 'Услуги',
                to: '/services',
              },
              {
                label: 'Портфолио',
                to: '/blog/tags/портфолио',
              },
              {
                label: 'FAQ',
                to: '/faq',
              },
            ],
          },
          {
            title: 'Соц. сети',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/alyokhin22',
              },
              {
                label: 'ВКонтакте',
                href: 'https://vk.com/alyokhin22',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/alyokhin22',
              },
            ],
          },
          {
            title: 'Ещё',
            items: [
              {
                label: 'Hoolie Projects',
                to: 'https://hoolie.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Александр Алёхин`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
