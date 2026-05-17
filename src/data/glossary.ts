export type Term = { term: string; def: string };

export const glossaryTerms: Term[] = [
  { term: 'AIO', def: 'Short for All-In-One. A type of automated checkout software designed to support purchasing across multiple retailer websites from a single application, rather than being limited to one store.' },
  { term: 'Module', def: 'A retailer-specific component inside an AIO bot that contains the logic needed to add to cart and check out on a single website. A bot may ship many modules, one per supported retailer.' },
  { term: 'Task', def: 'A single configured purchase attempt inside an AIO bot. A task usually combines a product link or keywords, a profile, an account, and a proxy, and runs until it checks out, fails, or is stopped.' },
  { term: 'Profile', def: 'A reusable container of shipping address, billing address, and payment details used to populate checkout forms. Bots typically support multiple profiles to spread orders across addresses and cards.' },
  { term: 'Proxy', def: 'An intermediary server that routes web requests through a different IP address. AIO bots use proxies to distribute traffic across many IPs, which helps avoid retailer rate limits and IP bans.' },
  { term: 'Captcha', def: 'A challenge-response test used by websites to distinguish human users from automated traffic. Bot users typically pair their AIO with a captcha-solver service that returns valid tokens.' },
  { term: 'Monitor', def: "A component or external service that watches a retailer's product pages and APIs for stock changes, then notifies the user or triggers tasks. Monitors can be built into the bot or sourced separately." },
  { term: 'Restock', def: 'When a retailer makes a previously sold-out product available for purchase again. AIO bots aim to detect restocks within seconds and automate the checkout process before the inventory sells out.' },
  { term: 'Lifetime License', def: 'A one-time payment plan that grants ongoing access to the bot for as long as the product is supported by the developer. Often a multiple of the recurring price, aimed at users who plan to bot for years.' },
  { term: 'Webhook', def: 'A user-supplied URL that the bot pings when a meaningful event happens, such as a successful checkout or a failed task. Most AIO users send webhooks to a private Discord channel for live alerts.' },
  { term: 'Drop', def: 'A scheduled or sudden release of inventory for a limited-edition product. Drops can be planned (a launch time on a Saturday morning) or surprise (a midweek restock with no announcement).' },
  { term: 'Cook', def: 'Community slang for successfully checking out one or more units. To cook is to win on a drop. A cook session is a single drop where the user landed multiple units.' },
  { term: 'L', def: 'Short for loss. The opposite of a cook. An L means a task ran but did not result in a checkout, usually because of stock running out, a captcha block, or a payment failure.' },
  { term: 'Banned IP', def: 'An IP address the retailer has flagged and blocked from purchasing. Quality residential or ISP proxies reduce the risk of bans, but no setup is fully immune on hostile sites.' },
  { term: 'Queue', def: 'A waiting line a retailer puts shoppers into during a high-traffic drop. Queue logic in a bot module is the code that joins, holds, and clears the queue while preserving the cart slot.' },
];
