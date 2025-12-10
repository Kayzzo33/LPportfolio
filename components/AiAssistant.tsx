import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Bot } from 'lucide-react';
import { generateStrategy } from '../services/geminiService';
import { AiState } from '../types';

const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<AiState>(AiState.IDLE);

  const handleConsult = async () => {
    if (!input.trim()) return;
    
    setStatus(AiState.LOADING);
    setResponse(null);

    try {
      const result = await generateStrategy(input);
      setResponse(result);
      setStatus(AiState.SUCCESS);
    } catch (error) {
      console.error(error);
      setResponse("Our AI systems are currently under high load. Please try again later.");
      setStatus(AiState.ERROR);
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-nexus-secondary/5 blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl">
            <div className="glass-panel rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent">
                <div className="bg-[#0f0f12] rounded-[22px] p-8 md:p-12 border border-nexus-border">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-nexus-primary/20 rounded-xl text-nexus-primary">
                            <Bot size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold">Nexus AI Consultant</h2>
                            <p className="text-gray-400">Describe your business goal. Gemini will optimize your stack.</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="e.g., I need to scale my e-commerce platform to handle 1 million concurrent users during Black Friday..."
                                className="w-full bg-black/50 border border-nexus-border rounded-xl p-4 text-gray-200 focus:outline-none focus:border-nexus-primary focus:ring-1 focus:ring-nexus-primary transition-all h-32 resize-none"
                            />
                            <button 
                                onClick={handleConsult}
                                disabled={status === AiState.LOADING || !input}
                                className="absolute bottom-4 right-4 p-2 bg-nexus-primary rounded-lg text-white hover:bg-nexus-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === AiState.LOADING ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                            </button>
                        </div>

                        {status !== AiState.IDLE && (
                            <div className={`p-6 rounded-xl border ${
                                status === AiState.ERROR ? 'bg-red-900/10 border-red-500/20' : 'bg-nexus-primary/5 border-nexus-primary/10'
                            } animate-in fade-in slide-in-from-bottom-2`}>
                                <div className="flex items-start gap-3">
                                    <Sparkles className={`shrink-0 mt-1 ${status === AiState.ERROR ? 'text-red-400' : 'text-nexus-accent'}`} size={20} />
                                    <div className="prose prose-invert prose-sm max-w-none">
                                        {status === AiState.LOADING && <p className="text-gray-400 animate-pulse">Analyzing infrastructure requirements...</p>}
                                        {response && (
                                            <div className="whitespace-pre-wrap font-light leading-relaxed text-gray-200">
                                                {response}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AiAssistant;