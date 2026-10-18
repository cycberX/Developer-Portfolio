import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Send,
  MessageSquare,
} from "lucide-react";

export interface SocialAccount {
  id: string;
  name: string;
  url: string;
  enabled: boolean;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

/**
 * Centralized Social Media Configuration.
 * 
 * Rules:
 * 1. Only accounts with valid, verified URLs and enabled: true will be rendered.
 * 2. Unverified accounts have enabled: false and empty url, and will NOT be displayed.
 * 3. To activate a platform, set its real URL and enabled: true.
 */
export const socialAccounts: SocialAccount[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/mrsanskar19/",
    enabled: true,
    icon: Github,
    description: "Explore open-source repositories and code contributions",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sanskar-bandgar-719bb336a/",
    enabled: true,
    icon: Linkedin,
    description: "Connect professionally and view career milestones",
  },
  {
    id: "x",
    name: "X (Twitter)",
    url: "", // Add verified X URL here to enable (e.g. "https://x.com/username")
    enabled: false,
    icon: Twitter,
    description: "Follow technical posts and software discussions",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/officialsanskarbandgar/", // Add verified Instagram URL here to enable
    enabled: true,
    icon: Instagram,
    description: "Personal and student life updates",
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/p/Sanskar-Bandgar-100068488796065/", // Add verified Facebook URL here to enable
    enabled: false,
    icon: Facebook,
    description: "Social updates and community posts",
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "", // Add verified YouTube URL here to enable
    enabled: false,
    icon: Youtube,
    description: "Technical tutorials and project walkthroughs",
  },
  {
    id: "discord",
    name: "Discord",
    url: "", // Add verified Discord server or profile link here to enable
    enabled: false,
    icon: MessageSquare,
    description: "Chat and collaborate on programming projects",
  },
  {
    id: "telegram",
    name: "Telegram",
    url: "", // Add verified Telegram channel or username link here to enable
    enabled: false,
    icon: Send,
    description: "Direct messaging and developer channel",
  },
];

/**
 * Returns only verified, active social media accounts.
 * Prevents placeholder links (#) or unverified platforms from ever rendering.
 */
export function getActiveSocials(): SocialAccount[] {
  return socialAccounts.filter(
    (account) =>
      account.enabled &&
      Boolean(account.url) &&
      account.url.trim() !== "" &&
      account.url.trim() !== "#"
  );
}
