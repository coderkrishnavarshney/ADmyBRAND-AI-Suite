import { PricingCard } from '../components/PricingCard';

const tiers = [
  { tier: 'Starter', price: '$29/mo', features: ['Unlimited campaigns', 'Basic AI tools', 'Email support'] },
  { tier: 'Growth', price: '$79/mo', features: ['Everything in Starter', 'Advanced AI analytics', 'A/B testing', 'Priority support'], highlighted: true },
  { tier: 'Enterprise', price: 'Contact us', features: ['Custom integrations', 'Dedicated AI models', '24/7 support'] }
];

export const Pricing = () => (
  <section id="pricing" className="py-20">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map(t => <PricingCard key={t.tier} {...t} />)}
      </div>
    </div>
  </section>
);
