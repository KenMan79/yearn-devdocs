/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Yearn.finance',
  tagline: 'DeFi made simple',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/yearn-devdocs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yearn', // Usually your GitHub org/user name.
  projectName: 'yearn-devdocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Yearn Finance',
      logo: {
        alt: 'YFI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'smart-contracts/vault',
          label: "Smart Contracts"
        },
        {
          to: 'partners/introduction',
          label: "Partners"
        },
        {
          to: 'contributing/index',
          label: "Contributing"
        },
        {
          to: 'resources/index',
          label: "Resources"
        },
        {
          to: 'securityResearchers/index',
          label: "Security researchers"
        }, 
        {
          type: 'docsVersionDropdown',
          dropdownItemsBefore: [],
          position: 'right',
          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
          docsPluginId: 'default',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discourse',
              href: 'https://gov.yearn.finance/',
            },
            {
              label: 'Discord',
              href: 'https://discord.yearn.finance/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/iearnfinance',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yearn/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} yearn.finance. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: "docs/developers/v2",
          routeBasePath: "v2",
          sidebarPath: require.resolve('./sidebars/sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/yearn/yearn-devdocs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'v_one',
        path: 'docs/developers/v1',
        editCurrentVersion: true,
        routeBasePath: 'v1',
        sidebarPath: require.resolve('./sidebars/sidebarsV1.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'getting-started',
        path: 'docs/getting-started',
        editCurrentVersion: true,
        routeBasePath: 'getting-started',
        sidebarPath: require.resolve('./sidebars/sidebarsGettingStarted.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'partners',
        path: 'docs/partners',
        editCurrentVersion: true,
        routeBasePath: 'partners',
        sidebarPath: require.resolve('./sidebars/sidebarsPartners.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contributing',
        path: 'docs/contributing',
        editCurrentVersion: true,
        routeBasePath: 'contributing',
        sidebarPath: require.resolve('./sidebars/sidebarsContributing.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'resources',
        path: 'docs/resources',
        editCurrentVersion: true,
        routeBasePath: 'resources',
        sidebarPath: require.resolve('./sidebars/sidebarsResources.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'securityResearchers',
        path: 'docs/securityResearchers',
        editCurrentVersion: true,
        routeBasePath: 'securityResearchers',
        sidebarPath: require.resolve('./sidebars/sidebarsSecurityResearchers.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ]
};
