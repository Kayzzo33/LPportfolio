import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CallToAction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(circleRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 relative overflow-hidden flex items-center justify-center">
        {/* Background Decorative Circle */}
        <div ref={circleRef} className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-nexus-primary via-nexus-secondary to-nexus-accent blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
                Ready to <span className="text-white">Ascend?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
                Join thousands of developers and creators building the future with NexusFlow.
            </p>
            
            <button className="group px-10 py-5 bg-white text-black text-xl font-bold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-3 mx-auto">
                Get Started Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    </section>
  );
};

export default CallToAction;