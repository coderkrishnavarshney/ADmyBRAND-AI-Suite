import React from 'react';

export const FeatureIcon = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex space-x-4">
    <div className="text-primary text-3xl">{icon}</div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);
