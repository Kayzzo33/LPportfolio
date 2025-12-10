import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.6')
    .from(btnRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, '-=0.6');

    // Subtle floating background elements
    gsap.to('.hero-floater', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
      ease: 'sine.inOut'
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nexus-primary/20 rounded-full blur-[100px] hero-floater"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-nexus-secondary/20 rounded-full blur-[100px] hero-floater"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
          <Sparkles size={14} className="text-nexus-accent" />
          <span className="text-xs font-semibold tracking-wider uppercase text-gray-300">Powered by Gemini AI</span>
        </div>

        <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tighter mb-6">
          Transform Your <br />
          <span className="gradient-text">Vision to Reality</span>
        </h1>

        <p ref={subtitleRef} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
          NexusFlow provides the ultimate infrastructure for next-generation digital experiences. Scale effortlessly, design beautifully.
        </p>

        <button 
          ref={btnRef}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
        >
          Start Building
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;