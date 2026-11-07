export type BlogPost = {
  slug: string;
  title: string;
  desc: string;
  date: string;
  read: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "structure-10000-member-discord-server",
    title: "How to structure a 10,000 member Discord server",
    desc: "Learn the exact channel categories, role hierarchies, and moderation bots top creators use to manage massive communities.",
    date: "Oct 22, 2026",
    read: "5 min read",
    content: [
      "A 10,000 member server fails or thrives on structure. New members should understand where everything lives within ten seconds of joining, so keep your top level simple: an Info category with announcements, rules, roles and support tickets, a Chat category for everyday conversation, and clearly separated Media, Voice and Staff categories.",
      "Start with a lean role hierarchy. Owner, Admin and Moderator cover trust and safety, then add opt-in roles for interests, games and notifications instead of dozens of permission roles. Every extra role is something your team has to maintain, audit and explain to confused members.",
      "Moderation has to scale before you need it. Turn on logging for joins, deletes and edits, set up slowmode on your busiest channels, and use context-aware AI moderation to catch toxicity and spam in real time instead of after a report. Snnlies generates this whole structure — categories, channels and role hierarchy — from a single template, so you can deploy it in seconds and adjust it as your community grows.",
      "Finally, review your structure monthly. Archive dead channels, merge overlapping ones, and watch where conversations actually happen. The best large servers feel small because every channel has one clear job.",
    ],
  },
  {
    slug: "rise-of-ai-in-discord-moderation",
    title: "The rise of AI in Discord moderation",
    desc: "Why traditional auto-mod is dead, and how context-aware AI models are preventing toxicity before it happens.",
    date: "Oct 18, 2026",
    read: "4 min read",
    content: [
      "Traditional auto-mod works from blocklists: a message either contains a banned word or it does not. That breaks constantly in real communities, where the same word can be a joke between friends, a quote, or genuine harassment depending on context — and where bad actors dodge filters with spelling tricks in seconds.",
      "Context-aware AI moderation reads tone and intent, not just keywords. It can tell the difference between friendly banter and targeted abuse, spot spam patterns across channels, and flag borderline messages for human moderators instead of punishing members automatically.",
      "That human-in-the-loop design matters. The goal is not to replace moderators but to give them superpowers: instant context, a full history of similar incidents, and enforcement that happens while a problem is still small. Snnlies uses this approach with zero data retention for AI processing, so your community's conversations are never used to train models.",
      "Communities that switch from keyword filters to context-aware moderation typically see fewer false bans, faster response times, and moderators who spend their time helping members instead of deleting spam.",
    ],
  },
  {
    slug: "building-custom-economy-system-with-snnlies",
    title: "Building a custom economy system with Snnlies",
    desc: "A step-by-step guide to setting up virtual credits, shops, and leveling systems to keep your members engaged.",
    date: "Oct 10, 2026",
    read: "7 min read",
    content: [
      "A good server economy gives members a reason to show up every day. Start with one currency — credits — and one reliable way to earn it, such as daily activity. Snnlies allocates credits daily and resets them every 24 hours, which keeps the economy predictable and prevents a handful of power users from inflating it.",
      "Next, give credits somewhere to go. A small shop beats a big one: a custom role colour, a shout-out channel, or entry to a giveaway are cheap to fulfil and feel valuable. Price your first items so an active member can afford one within a week — early wins are what turn a gimmick into a habit.",
      "Layer in levels once the basics work. Reward consistent participation rather than raw message count, or you will train your members to spam. Announce milestones publicly so progress feels social, not just numeric.",
      "Finally, protect the system. Cap earnings, log large transfers, and treat alt-account farming as the exploit it is — Snnlies enforces its credit limits strictly for exactly this reason. A fair economy stays fun; a broken one quietly kills engagement.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
