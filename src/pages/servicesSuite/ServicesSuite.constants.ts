type SERVICES_LIST_TYPE = {
  title: string;
  descriptions: string[];
  email: string;
  available: boolean;
  //   apply css: `filter: blur() | brightness()` for unavailable options
  popular: boolean;
};

const SERVICES_LIST: SERVICES_LIST_TYPE[] = [
  {
    title: 'Website Review',
    descriptions: [
      `Seeking a professional analysis of your website? Look no further!`,
      ` Get personalized insights and recommendations from a web design/development expert. Quotes for this service vary based on the size and depth of your website.`,
    ],
    email: `mailto:dan_riley7@outlook.com?subject=Website Review`,
    available: true,
    popular: true,
  },
  {
    title: 'Website Construction (Content only)',
    descriptions: [
      `Creating an online presence for your business?`,
      `Whether you're just starting or looking to enhance your existing footprint, let me help you build a tailored solution. Expect a collaborative process to understand your goals, vibes, and products. Having designs in mind will speed up the development process.`,
    ],
    email: `mailto:dan_riley7@outlook.com?subject=Website Construction (Content only)`,
    available: true,
    popular: false,
  },
  {
    title: 'Website Construction (E-Commerce)',
    descriptions: [
      `Ready to take your business online?`,
      ` This service is designed for e-commerce, offering comprehensive management of your shop, login, and orders. Take your website to the next level with added complexity beyond content presentation. If you have specific designs in mind, it will expedite the process.`,
    ],
    email: `mailto:dan_riley7@outlook.com?subject=Website Construction (E-Commerce)`,
    available: false,
    popular: false,
  },
  {
    title: 'Website Repairs (BYO website)',
    descriptions: [
      `Need updates, additions, or a refurbishment for your existing website? I'm here to help.`,
      `Provide explicit details and visuals, and let's work together to enhance your website. This service pairs well with the "Website Review" for deeper counsel and analysis.`,
    ],
    email: `mailto:dan_riley7@outlook.com?subject=Website Repairs (BYO website)`,
    available: true,
    popular: false,
  },
  {
    title: 'Website Rebuild (BYO website)',
    descriptions: [
      `Elevate your existing website to a more professional environment!`,
      `If you want to move away from platforms like Wix, Wordpress, or Squarespace, this service is tailored for you. Experience a rebuild using cutting-edge technologies for both frontend and backend, along with scalable hosting options like AWS.`,
    ],
    email: `mailto:dan_riley7@outlook.com?subject=Website Rebuild (BYO website)`,
    available: true,
    popular: false,
  },
  {
    title: 'Website Support',
    descriptions: [
      `Uncertain about your website's behavior? Experiencing issues or slow loading times?`,
      ` I'm here to investigate and resolve any problems. If I can't identify the root cause or provide a solution, rest assured, you get your money back guaranteed.`,
    ],
    email: `mailto:dan_riley7@outlook.com?subject=Website Support`,
    available: true,
    popular: false,
  },
  {
    title: 'Website Maintenance/Updates',
    descriptions: [
      `Are you a returning customer?`,
      ` If I've previously worked on your website, and you're looking to add something new, update an old feature, or make any changes, then this is the service for you. Enjoy a special discount as a valued return customer.`,
    ],
    email: `mailto:dan_riley7@outlook.com?subject=Website Maintenance/Updates`,
    available: true,
    popular: false,
  },
];

export default SERVICES_LIST;
