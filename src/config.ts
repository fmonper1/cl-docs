export const SITE = {
  title: "Documentation",
  description: "Your website description.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export const SIDEBAR = {
  en: [
    { text: "", header: true },
    { text: "Section Header", header: true },
    { text: "Introduction", link: "en/introduction" },
    { text: "Page 2", link: "en/page-2" },
    { text: "Page 3", link: "en/page-3" },

    { text: "Another Section", header: true },
    { text: "Page 4", link: "en/page-4" },
  ],
  gettingStarted: [
    {
      text: "Getting Started",
      header: true,
    },
    {
      title: "Overview",
      url: "/docs/conceptual-overview/",
    },
    {
      title: "Deploy Your First Contract",
      url: "/docs/deploy-your-first-contract/",
    },
    {
      title: "Consuming Data Feeds",
      url: "/docs/consuming-data-feeds/",
    },
    {
      title: "Get Random Numbers",
      url: "/docs/intermediates-tutorial/",
    },
    {
      title: "API Calls",
      url: "/docs/advanced-tutorial/",
    },
    {
      text: "Resources",
      header: true,
    },
    {
      title: "Videos and Tutorials",
      url: "/docs/other-tutorials/",
    },
    {
      text: "Next Steps",
      header: true,
    },
    {
      title: "Chainlink Architecture",
      url: "/docs/architecture-overview/",
    },
    {
      title: "Data Feeds",
      url: "/docs/using-chainlink-reference-contracts/",
    },
    {
      title: "Chainlink VRF",
      url: "/docs/chainlink-vrf/",
    },
    {
      title: "Chainlink Keepers",
      url: "/docs/chainlink-keepers/introduction/",
    },
    {
      title: "Connect to Public API Data",
      url: "/docs/request-and-receive-data/",
    },
    {
      title: "Run a Chainlink Node",
      url: "/chainlink-nodes/",
    },
  ],
  ethereum: [
    {
      section: "Overview",
    },
    {
      title: "Chainlink Architecture",
      url: "/docs/architecture-overview/",
      children: [
        {
          title: "Basic Request Model",
          url: "/docs/architecture-request-model/",
        },
        {
          title: "Decentralized Data Model",
          url: "/docs/architecture-decentralized-model/",
        },
        {
          title: "Off-Chain Reporting",
          url: "/docs/off-chain-reporting/",
        },
      ],
    },
  ],
};

export const MENU = {
  en: [
    { text: "Getting Started", link: "/docs/conceptual-overview/" },
    { text: "EVM Chains", link: "/en/page-2" },
    { text: "Solana", link: "/en/page-3" },
    { text: "Node Operators", link: "/en/page-2" },
  ],
};
