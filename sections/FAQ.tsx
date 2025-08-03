import { FAQItem } from '../components/FAQItem';

const faq = [
  { q: 'Is the AI Suite suitable for small businesses?', a: 'Absolutely! Our Starter plan is perfect for small teams.' },
  { q: 'Can I cancel anytime?', a: 'Yes, you can cancel or change plans at any time.' },
  { q: 'Do you offer custom integrations?', a: 'Custom integrations are available on the Enterprise plan.' },
  { q: 'Is my data secure?', a: 'We use enterprise‑grade encryption and follow GDPR best practices.' }
];

export const FAQ = () => (
  <section id="faq" className="py-20">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      {faq.map(item => <FAQItem key={item.q} {...item} />)}
    </div>
  </section>
);
