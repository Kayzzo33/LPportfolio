import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContentShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.showcase-row') as HTMLElement[];

    sections.forEach((section) => {
      const img = section.querySelector('.showcase-img');
      const text = section.querySelector('.showcase-text');

      gsap.fromTo(img, 
        { x: -50, opacity: 0, scale: 0.95 }, 
        {
          x: 0, opacity: 1, scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom center",
            scrub: 1,
          }
        }
      );

      gsap.fromTo(text,
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom center",
            scrub: 1
          }
        }
      );
    });

    // Draw line animation
    gsap.fromTo('.connector-line', 
      { height: 0 },
      {
        height: '100%',
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 relative px-6">
      <div className="container mx-auto max-w-6xl relative">
        {/* Central connecting line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-nexus-border to-transparent -translate-x-1/2 hidden md:block">
            <div className="connector-line w-full bg-gradient-to-b from-nexus-primary via-nexus-secondary to-nexus-accent"></div>
        </div>

        {/* Block 1 */}
        <div className="showcase-row flex flex-col md:flex-row items-center gap-12 mb-32 relative">
          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-nexus-primary to-nexus-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="showcase-img relative h-64 md:h-96 w-full rounded-2xl overflow-hidden glass-panel">
               <img 
                src="https://picsum.photos/seed/tech1/800/600" 
                alt="Dashboard" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="flex-1 w-full pl-0 md:pl-12 showcase-text">
            <h3 className="text-3xl font-display font-bold mb-4">Intelligent Analytics</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Harness the power of real-time data processing. Our dashboard gives you actionable insights instantly, powered by machine learning algorithms that predict trends before they happen.
            </p>
            <ul className="space-y-3">
              {['Predictive Modeling', 'Real-time Streams', 'Custom Reports'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-nexus-primary"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Block 2 (Inverted) */}
        <div className="showcase-row flex flex-col md:flex-row-reverse items-center gap-12 relative">
          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-nexus-secondary to-nexus-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="showcase-img relative h-64 md:h-96 w-full rounded-2xl overflow-hidden glass-panel">
               <img 
                src="https://picsum.photos/seed/tech2/800/600" 
                alt="Cloud Infrastructure" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="flex-1 w-full pr-0 md:pr-12 showcase-text">
            <h3 className="text-3xl font-display font-bold mb-4">Global Edge Network</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Deploy your applications to the edge in seconds. Our distributed network ensures low latency and high availability for users worldwide, regardless of traffic spikes.
            </p>
             <button className="text-nexus-accent hover:text-white transition-colors font-medium flex items-center gap-2">
                Explore Network Map <span className="text-lg">→</span>
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContentShowcase;