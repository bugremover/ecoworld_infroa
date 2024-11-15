import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star, Users, Home as HomeIcon, Palette, CheckCircle2, ArrowUpRight } from 'lucide-react';
import RoomScene from '../components/3d/RoomScene';
import FloatingShape from '../components/3d/FloatingShape';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom center',
        },
      });

      // Features Animation
      gsap.from('.feature-card', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top center+=100',
          end: 'bottom center',
        },
      });

      // Stats Animation
      gsap.from('.stat-item', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top center+=100',
        },
      });

      // Process Animation
      gsap.from('.process-item', {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top center+=100',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "InteriorCraft transformed our space beyond our wildest dreams. Their attention to detail and creative vision brought our home to life.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      content: "Working with InteriorCraft was a game-changer for our restaurant. They created an atmosphere that our customers absolutely love.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "Emily Williams",
      role: "Office Manager",
      content: "The team's professionalism and innovative designs have completely revolutionized our workspace. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  const projects = [
    {
      title: "Modern Loft Renovation",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
    },
    {
      title: "Luxury Restaurant Design",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80"
    },
    {
      title: "Urban Apartment Makeover",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Space Into
              <span className="text-primary-300"> Living Art</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Create stunning interiors that reflect your personality with our expert design services
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center"
            >
              <a href="/contact" className="bg-primary-300 text-white px-8 py-4 rounded-full font-medium flex items-center space-x-2 hover:bg-primary-200 transition-colors">
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* 3D Room Scene */}
          <div className="mt-16 relative">
            <RoomScene />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "12+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "25+", label: "Design Awards" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item text-center"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-4xl font-bold text-primary-300 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-secondary-50 relative">
        <div className="absolute top-0 right-0 w-1/4 h-full pointer-events-none">
          <FloatingShape />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring your vision to life with expertise, creativity, and attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-primary-300" />,
                title: 'Expert Design',
                description: 'Award-winning designers crafting unique spaces',
              },
              {
                icon: <Users className="h-8 w-8 text-primary-300" />,
                title: 'Client-Focused',
                description: 'Your vision and satisfaction are our top priorities',
              },
              {
                icon: <HomeIcon className="h-8 w-8 text-primary-300" />,
                title: 'Full Service',
                description: 'From concept to completion, we handle everything',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -10 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to bringing your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Consultation", description: "Initial meeting to discuss your vision and requirements" },
              { number: "02", title: "Design Concept", description: "Creating detailed design proposals and mood boards" },
              { number: "03", title: "Development", description: "Refining the design and selecting materials" },
              { number: "04", title: "Implementation", description: "Bringing the design to life in your space" }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="process-item relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-primary-50 p-8 rounded-xl">
                  <span className="text-4xl font-bold text-primary-300 mb-4 block">{step.number}</span>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="text-primary-300" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What our clients say about their experience with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
              <p className="text-gray-600 max-w-2xl">
                Explore our latest interior design transformations
              </p>
            </div>
            <motion.a
              href="/portfolio"
              whileHover={{ x: 5 }}
              className="text-primary-300 font-medium flex items-center"
            >
              View All Projects <ArrowUpRight size={20} className="ml-2" />
            </motion.a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary-300 text-sm mb-2">{project.category}</p>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-primary-100 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none opacity-50">
              <FloatingShape />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's create something beautiful together. Schedule a consultation today.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-primary-300 text-white px-8 py-4 rounded-full font-medium inline-flex items-center space-x-2 hover:bg-primary-200 transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;