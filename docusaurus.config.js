const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

const theme = require("shiki/themes/material-ocean.json");
const { remarkCodeHike } = require("@code-hike/mdx");

const organizationName = "peacock-india";
const projectName = "peacock-docusaurus";
const title = "Peacock Doc";
const tagline = "Peacock India Documentation";

const config = {
  title,
  tagline: tagline,
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

  plugins: [
    // path.resolve(__dirname, "./node_modules/remark-admonitions"),
    // path.resolve(__dirname, './node_modules/docusaurus-lunr-search'),
    require.resolve("docusaurus-plugin-image-zoom"),
    // require.resolve("docusaurus-lunr-search"),

    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          beforeDefaultRemarkPlugins: [
            [
              remarkCodeHike,
              {
                lineNumbers: true,
                showCopyButton: true,
                theme,
                skipLanguages: ["mermaid"],
                staticMediaQuery: "not screen, (max-width: 768px)",
                autoImport: true,
              },
            ],
          ],
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
        // {
        //   type: "doc",
        //   docId: "intro",
        //   position: "left",
        //   label: "Backend",
        // },
        {
          to: "/backend",
          label: "Backend",
          position: "left",
        },
        // {
        //   to: "/frontend/intro",
        //   label: "Frontend",
        //   position: "left",
        // },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Backend",
          items: [
            {
              label: "start",
              to: "/docs/intro",
            },
          ],
        },
        // {
        //   title: "Frontend",
        //   items: [
        //     {
        //       label: "start",
        //       to: "/docs/intro",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: `https://github.com/${organizationName}/${projectName}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Peacock India.`,
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
    zoom: {
      selector: ".markdown :not(em) > img",
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
      },
    },
  },
};

module.exports = config;
