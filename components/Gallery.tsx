import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: 'Neon Interface', category: 'UI Design', img: 'https://picsum.photos/seed/g1/600/400' },
  { id: 2, title: 'Cyber Security', category: 'Infrastructure', img: 'https://picsum.photos/seed/g2/600/400' },
  { id: 3, title: 'AI Processing', category: 'Backend', img: 'https://picsum.photos/seed/g3/600/400' },
  { id: 4, title: 'Global Network', category: 'Operations', img: 'https://picsum.photos/seed/g4/600/400' },
  { id: 5, title: 'Mobile Stack', category: 'Development', img: 'https://picsum.photos/seed/g5/600/400' },
];

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const scrollWidth = section.scrollWidth;
    const windowWidth = window.innerWidth;

    gsap.to(section, {
      x: -(scrollWidth - windowWidth),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        // The duration of the scroll is based on how much width needs to be traversed
        end: () => `+=${scrollWidth - windowWidth}`,
        invalidateOnRefresh: true,
      }
    });

  }, { scope: triggerRef });

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div className="pt-20 pb-10 px-6 container mx-auto">
          <h2 className="text-4xl font-display font-bold">Built with Nexus</h2>
          <p className="text-gray-400 mt-2">See what our community is creating.</p>
        </div>
        
        <div 
          ref={sectionRef} 
          className="flex gap-8 px-6 pb-20 w-fit"
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative w-[80vw] md:w-[400px] h-[300px] md:h-[500px] shrink-0 rounded-2xl overflow-hidden group border border-nexus-border"
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-nexus-primary text-sm font-bold uppercase tracking-wider mb-1">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;