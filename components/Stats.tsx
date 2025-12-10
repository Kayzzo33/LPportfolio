import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Server, Globe, Clock } from 'lucide-react';
import { Stat } from '../types';

gsap.registerPlugin(ScrollTrigger);

const statsData: Stat[] = [
  { label: 'Active Users', value: 10000, suffix: '+' },
  { label: 'Uptime', value: 99.9, suffix: '%' },
  { label: 'Countries', value: 50, suffix: '+' },
  { label: 'Support', value: 24, suffix: '/7' },
];

const icons = [<Users key={1}/>, <Server key={2}/>, <Globe key={3}/>, <Clock key={4}/>];

const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const statNumbers = gsap.utils.toArray('.stat-value');
    
    statNumbers.forEach((el: any) => {
      const endValue = parseFloat(el.getAttribute('data-value'));
      gsap.fromTo(el, 
        { innerText: 0 },
        {
          innerText: endValue,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: endValue % 1 === 0 ? 1 : 0.1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          onUpdate: function() {
            el.innerText = Math.ceil(this.targets()[0].innerText * 10) / 10;
          }
        }
      );
    });

    gsap.from('.stat-item', {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 border-y border-nexus-border bg-black/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-item flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-nexus-primary/10 text-nexus-primary">
                {icons[idx]}
              </div>
              <div className="text-4xl md:text-5xl font-bold font-display mb-2 flex items-baseline">
                <span className="stat-value" data-value={stat.value}>0</span>
                <span className="text-nexus-primary ml-1">{stat.suffix}</span>
              </div>
              <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;