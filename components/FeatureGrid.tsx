import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Zap, Globe, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Studio Pro",
    desc: "Advanced design tools powered by generative AI for rapid prototyping.",
    icon: <Layers size={32} className="text-nexus-primary" />,
  },
  {
    title: "Creator Suite",
    desc: "Automated content generation and editing workflows.",
    icon: <Zap size={32} className="text-nexus-secondary" />,
  },
  {
    title: "Enterprise Cloud",
    desc: "Global scalability with 99.99% uptime and edge computing.",
    icon: <Globe size={32} className="text-nexus-accent" />,
  },
  {
    title: "Nexus Secure",
    desc: "Military-grade encryption and compliance built-in.",
    icon: <Shield size={32} className="text-white" />,
  }
];

const FeatureGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.feature-card');
    
    gsap.fromTo(cards, 
      { y: 100, opacity: 0, rotationX: 15 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 relative">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Ecosystem</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Everything you need to build, deploy, and scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="feature-card glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
              
              {/* Decorative corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-nexus-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl blur-xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;