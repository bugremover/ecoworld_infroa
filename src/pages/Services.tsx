import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Ruler, PenTool, Lightbulb, Layout, Wand2 } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Interior Design',
    description: 'Full-service interior design solutions tailored to your style and needs.',
    features: ['Space Planning', 'Color Consultation', 'Furniture Selection']
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: 'Architectural Planning',
    description: 'Detailed architectural planning and space optimization services.',
    features: ['3D Modeling', 'Technical Drawings', 'Space Optimization']
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Custom Furniture',
    description: 'Bespoke furniture design and manufacturing services.',
    features: ['Custom Design', 'Material Selection', 'Quality Craftsmanship']
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Lighting Design',
    description: 'Strategic lighting solutions to enhance your space.',
    features: ['Ambient Lighting', 'Task Lighting', 'Accent Lighting']
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Space Planning',
    description: 'Optimal space utilization and layout planning services.',
    features: ['Flow Analysis', 'Furniture Layout', 'Storage Solutions']
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: 'Styling & Decoration',
    description: 'Final touches and styling to perfect your space.',
    features: ['Accessory Selection', 'Art Curation', 'Seasonal Updates']
  }
];

const Services = () => {
  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4 py-16 bg-primary-50"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive interior design solutions tailored to transform your space
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-primary-300 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary-300 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;