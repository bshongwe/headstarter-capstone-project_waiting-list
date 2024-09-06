import { env } from "./env.mjs";

export interface SubscriptionPlan {
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    monthly: number;
    yearly: number;
  };
  stripeIds: {
    monthly: string | null;
    yearly: string | null;
  };
}

export const pricingData: SubscriptionPlan[] = [
  {
    title: "Free",
    description: "For Beginners",
    benefits: [
      "Up to 50 monthly posts",
      "No analytics and reporting",
      "Access to standard prompts",
    ],
    limitations: [
      "No priority access to new features.",
      "Limited customer support",
      "No custom branding",
      "Limited access to business resources.",
    ],
    prices: {
      monthly: 0,
      yearly: 0,
    },
    stripeIds: {
      monthly: null,
      yearly: null,
    },
  },
  {
    title: "Bunny-Ai Lite",
    description: "Unlock Advanced Features",
    benefits: [
      "Up to 500 monthly posts",
      "Basic analytics and reporting",
      "Limited access to advanced prompts",
      "Basic customer support",
      "Limited access to exclusive webinars and training.",
    ],
    limitations: [
      "No custom branding",
      "Limited access to business resources.",
    ],
    prices: {
      monthly: 15,
      yearly: 144,
    },
    stripeIds: {
      // @ts-ignore
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
      // @ts-ignore
      yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID,
    },
  },
  {
    title: "Bunny-Ai Premium",
    description: "For Power Users",
    benefits: [
      "Up to 5 000 monthly posts",
      "Advanced analytics and reporting",
      "Access to 100 advanced prompts",
      "24/7 business customer support",
      "Personalized onboarding and account management.",
    ],
    limitations: [],
    prices: {
      monthly: 30,
      yearly: 300,
    },
    stripeIds: {
      // @ts-ignore
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
      // @ts-ignore
      yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PRICE_ID,
    },
  },
  {
    title: "Bunny-Ai Platinum",
    description: "For Elite & Exclusive Users",
    benefits: [
      "Unlimited monthly posts",
      "Unlimited real-time analytics and reporting webinars",
      "Unlimited analytics and reporting",
      "24/7 business customer support",
      "Personalized onboarding and account management.",
    ],
    limitations: [],
    prices: {
      monthly: 300,
      yearly: 3000,
    },
    stripeIds: {
      // @ts-ignore
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
      // @ts-ignore
      yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PRICE_ID,
    },
  },
];
