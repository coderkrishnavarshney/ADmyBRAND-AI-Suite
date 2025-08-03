import { FeatureIcon } from '../components/FeatureIcon';
import { FaChartLine, FaMagic, FaRobot, FaBolt, FaShieldAlt, FaCloud } from 'react-icons/fa';

const features = [
  { icon: <FaChartLine />, title: 'Predictive Analytics', description: 'Forecast performance with AI-driven insights.' },
  { icon: <FaMagic />, title: 'Creative Generation', description: 'Generate ad copy and creatives in seconds.' },
  { icon: <FaRobot />, title: 'Campaign Automation', description: 'Automate optimizations 24/7 with smart rules.' },
  { icon: <FaBolt />, title: 'Real-time Reporting', description: 'Monitor metrics live across all channels.' },
  { icon: <FaShieldAlt />, title: 'Secure & Compliant', description: 'Enterprise‑grade security and data privacy.' },
  { icon: <FaCloud />, title: 'Cloud Scalability', description: 'Scale effortlessly with serverless infrastructure.' }
];

export const Features = () => (
  <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {features.map(f => <FeatureIcon key={f.title} {...f} />)}
      </div>
    </div>
  </section>
);
