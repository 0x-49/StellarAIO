export type Video = {
  id: string;
  title: string;
  channel: string;
  summary: string;
};

export const videos: Video[] = [
  {
    id: 'Cq615aMTcU8',
    title: 'The ULTIMATE Stellar AIO Beginner Guide',
    channel: 'Soflo Sneakers',
    summary: 'A start-to-finish walkthrough of installing Stellar AIO, importing profiles, configuring proxies and a captcha solver, and running a first task. Best starting point if you have never opened the bot before.',
  },
  {
    id: 'n1suXXPS9DI',
    title: 'How to Bot Pokemon Center on Stellar AIO',
    channel: 'Soflo Sneakers',
    summary: 'Module-specific tutorial for the Pokemon Center site. Covers task setup, account warmups, proxy choice for PkC, and how to handle queue logic on TCG drops.',
  },
  {
    id: '_ozwdem3wKc',
    title: 'Stellar AIO Walmart Setup Guide',
    channel: 'Shermio Flips',
    summary: 'Walks through the Walmart module configuration. Demonstrates monitor links, profile pairing, and live task execution on a Pokemon TCG drop.',
  },
  {
    id: '4rBUOshNoG4',
    title: "StellarAIO Beginner's Guide for EVERYTHING (Walmart, BestBuy, Target)",
    channel: 'YouTube tutorial',
    summary: 'Cross-site tutorial that covers the three biggest retail modules in one video. Useful when you want to see how task structure stays consistent between modules.',
  },
  {
    id: '4Fm11u1ouns',
    title: 'Stellar AIO 3.0 Best Buy Guide',
    channel: 'YouTube tutorial',
    summary: 'Best Buy module deep-dive on the 3.0 release. Goes through queue mechanics, account requirements, and the proxy types that tend to perform best on Best Buy drops.',
  },
  {
    id: '5u9KolfAwAg',
    title: 'Stellar AIO Target Guide | Target Consoles',
    channel: 'YouTube tutorial',
    summary: 'Target module setup focused on console restocks. Includes monitor configuration and how to chain multiple tasks across profiles to maximize hit chance.',
  },
  {
    id: 'z8Mx5da5mTU',
    title: 'Stellar AIO AMD Guide - How to Set Up AMD on Stellar AIO',
    channel: 'YouTube tutorial',
    summary: 'AMD.com module walkthrough for GPU drops. Demonstrates how Stellar AIO handles AMD queue tokens and the captcha flow specific to that retailer.',
  },
  {
    id: 'Vywxzvw4VEw',
    title: 'Stellar AIO Review and Tutorial',
    channel: 'YouTube reviewer',
    summary: 'A third-party review of Stellar AIO with live task demos. Covers UI tour, supported sites at the time of recording, and an honest take on strengths and limits.',
  },
];
