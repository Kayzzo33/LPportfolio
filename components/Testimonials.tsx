import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO",
    company: "TechNova",
    content: "NexusFlow transformed how we handle peak loads. The generative AI features cut our dev time by 40%.",
    avatarUrl: "https://picsum.photos/seed/p1/100/100"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Product Lead",
    company: "CreativeStudios",
    content: "The most beautiful and functional dashboard I've ever used. It's not just a tool; it's a superpower.",
    avatarUrl: "https://picsum.photos/seed/p2/100/100"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder",
    company: "StreamLine",
    content: "Enterprise-grade security with consumer-grade UX. Simply outstanding execution.",
    avatarUrl: "https://picsum.photos/seed/p3/100/100"
  }
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.testimonial-card', {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-gradient-to-b from-transparent to-nexus-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Trusted by Visionaries</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-nexus-primary to-nexus-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card glass-panel p-8 rounded-2xl relative group">
              <Quote className="absolute top-6 right-6 text-white/10 group-hover:text-nexus-primary/30 transition-colors" size={40} />
              
              <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">"{t.content}"</p>
              
              <div className="flex items-center gap-4">
                <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full border-2 border-nexus-primary/50" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;