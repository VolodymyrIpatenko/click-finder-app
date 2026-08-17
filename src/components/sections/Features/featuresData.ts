export interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: 'Clean Design',
    description: 'Increase sales by showing true dynamics of your website.',
    image: '/images/first.png',
  },
  {
    id: 2,
    title: 'Secure Data',
    description: "Build your online store's trust using Social Proof & Urgency.",
    image: '/images/second.png',
  },
  {
    id: 3,
    title: 'Retina Ready',
    description: "Realize importance of social proof in customer's purchase decision.",
    image: '/images/third.png',
  },
];


