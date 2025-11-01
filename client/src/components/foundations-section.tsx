import { Network, KeyRound, ShieldAlert, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FoundationsSection() {
  return (
    <section id="foundations" className="py-20 bg-cyber-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-cyber-gold">Security Foundations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master these core concepts before diving into advanced security practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Blockchain Basics */}
          <div className="bg-cyber-slate p-8 rounded-xl border border-cyber-gold/20 hover:border-cyber-gold/40 transition-all duration-300 shadow-none">
            <div className="text-center mb-6">
              <Network className="w-12 h-12 text-cyber-gold mb-4 mx-auto" />
              <h3 className="font-orbitron text-xl font-bold text-white">Blockchain Basics</h3>
            </div>
            <div className="mb-4">
              <svg className="w-full h-16 text-cyber-gold opacity-60" viewBox="0 0 200 40" fill="currentColor">
                <rect x="10" y="15" width="15" height="10" rx="2" />
                <rect x="45" y="15" width="15" height="10" rx="2" />
                <rect x="80" y="15" width="15" height="10" rx="2" />
                <rect x="115" y="15" width="15" height="10" rx="2" />
                <rect x="150" y="15" width="15" height="10" rx="2" />
                <line x1="25" y1="20" x2="45" y2="20" stroke="currentColor" strokeWidth="2" />
                <line x1="60" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="2" />
                <line x1="95" y1="20" x2="115" y2="20" stroke="currentColor" strokeWidth="2" />
                <line x1="130" y1="20" x2="150" y2="20" stroke="currentColor" strokeWidth="2" />
                <text x="17" y="35" fontSize="6" fill="currentColor">Block</text>
                <text x="52" y="35" fontSize="6" fill="currentColor">Block</text>
                <text x="87" y="35" fontSize="6" fill="currentColor">Block</text>
              </svg>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Understand distributed ledgers, consensus mechanisms, and why decentralization 
              matters for your financial sovereignty.
            </p>
          </div>
          
          {/* Wallets & Keys */}
          <div className="bg-cyber-slate p-8 rounded-xl border border-cyber-gold/20 hover:border-cyber-gold/40 transition-all duration-300 shadow-none">
            <div className="text-center mb-6">
              <KeyRound className="w-12 h-12 text-cyber-gold mb-4 mx-auto" />
              <h3 className="font-orbitron text-xl font-bold text-white">Wallets & Keys</h3>
            </div>
            <div className="mb-4">
              <svg className="w-full h-16 text-cyber-gold opacity-60" viewBox="0 0 200 40" fill="none">
                <rect x="20" y="10" width="60" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
                <rect x="120" y="10" width="60" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="20" r="3" fill="currentColor" />
                <circle cx="150" cy="20" r="3" fill="currentColor" />
                <path d="M80 20 L120 20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="30" y="38" fontSize="8" fill="currentColor">Private Key</text>
                <text x="135" y="38" fontSize="8" fill="currentColor">Public Key</text>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Learn the difference between public/private keys, seed phrases, and why 
              "not your keys, not your crypto" is the golden rule.
            </p>
          </div>
          
          {/* Threat Landscape */}
          <div className="bg-cyber-slate p-8 rounded-xl border border-cyber-gold/20 hover:border-cyber-gold/40 transition-all duration-300 shadow-none">
            <div className="text-center mb-6">
              <ShieldAlert className="w-12 h-12 text-cyber-gold mb-4 mx-auto" />
              <h3 className="font-orbitron text-xl font-bold text-white">Threat Landscape</h3>
            </div>
            <div className="mb-4">
              <svg className="w-full h-16 text-red-400 opacity-70" viewBox="0 0 200 40" fill="none">
                <circle cx="50" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
                <circle cx="100" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
                <circle cx="150" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="M46 16 L54 24 M54 16 L46 24" stroke="currentColor" strokeWidth="2" />
                <path d="M96 16 L104 24 M104 16 L96 24" stroke="currentColor" strokeWidth="2" />
                <path d="M146 16 L154 24 M154 16 L146 24" stroke="currentColor" strokeWidth="2" />
                <text x="35" y="35" fontSize="6" fill="currentColor">Phishing</text>
                <text x="88" y="35" fontSize="6" fill="currentColor">Malware</text>
                <text x="140" y="35" fontSize="6" fill="currentColor">Scams</text>
              </svg>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Identify common attack vectors: phishing, SIM swaps, clipboard malware, 
              social engineering, and smart contract vulnerabilities.
            </p>
          </div>
        </div>
        
        {/* Core Concepts Guide Download */}
        <div className="mt-16 text-center">
          <Button asChild className="bg-cyber-gold hover:bg-cyber-gold-dark text-cyber-dark font-semibold px-8 py-4 rounded-lg shadow-none">
            <a href="/downloads/CryptoOPSEC_Crypto_Fundamentals_Guide.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download Core Concepts Guide
            </a>
          </Button>
          <p className="text-gray-400 text-sm mt-2">Essential foundations for crypto security (PDF, 42 KB)</p>
        </div>
      </div>
    </section>
  );
}
