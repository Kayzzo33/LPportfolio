import React from 'react';
import { Twitter, Github, Linkedin, Disc } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-nexus-border bg-[#050505] pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-display font-bold tracking-tighter mb-4">
              Nexus<span className="text-nexus-primary">Flow</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering the next generation of digital experiences through intelligent infrastructure and design.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-nexus-primary cursor-pointer transition-colors">Studio Pro</li>
              <li className="hover:text-nexus-primary cursor-pointer transition-colors">Creator Suite</li>
              <li className="hover:text-nexus-primary cursor-pointer transition-colors">Enterprise Cloud</li>
              <li className="hover:text-nexus-primary cursor-pointer transition-colors">AI Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-nexus-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-nexus-primary cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-nexus-primary cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-nexus-primary cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-4 text-white">Connect</h4>
             <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                    <Twitter size={18} />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                    <Github size={18} />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                    <Linkedin size={18} />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                    <Disc size={18} />
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>© 2024 NexusFlow Inc. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                <a href="#" className="hover:text-gray-400">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;