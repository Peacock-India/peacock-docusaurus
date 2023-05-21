const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

const theme = require("shiki/themes/material-ocean.json");
const { remarkCodeHike } = require("@code-hike/mdx");

const organizationName = "peacock-india";
const projectName = "peacock-docusaurus";
const title = "Peacock Doc";

const config = {
  title,
  tagline: title,
  favicon: "img/favicon.ico",

  // Set the production URL of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub Pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub Pages deployment config.
  // If you aren't using GitHub Pages, you don't need these.
  organizationName: organizationName, // Usually your GitHub org/user name.
  projectName: projectName, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          beforeDefaultRemarkPlugins: [[remarkCodeHike, 
            {
              lineNumbers: true,
              showCopyButton: true,
              theme,
              skipLanguages: ["mermaid"],
              staticMediaQuery: "not screen, (max-width: 768px)",
              autoImport: true,
            },
          ]],
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: [
            require.resolve("@code-hike/mdx/styles.css"),
            require.resolve("./src/css/custom.css"),
          ],
        },
      },
    ],
  ],

  themes: ["mdx-v2"],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: title,
      logo: {
        alt: "Peacock India Doc Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Backend",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    codehike: {
      tutorialDir: path.join(__dirname, "path/to/codehike/tutorials"),
      playerTheme: {
        theme: require("shiki/themes/material-palenight.json"),
        lineNumbers: false,
        fontSize: 16,
      },
    },
  },
};

module.exports = config;
