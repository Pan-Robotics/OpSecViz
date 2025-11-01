import { SiX, SiTelegram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-gold/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="font-orbitron text-xl font-bold text-cyber-gold">CryptoOpsec</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering crypto users with practical operational security knowledge. 
              Your financial sovereignty depends on your security practices.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/cryptoopseccom" target="_blank" rel="noopener noreferrer">
                <SiX className="w-6 h-6 text-cyber-steel hover:text-cyber-gold cursor-pointer transition-colors" />
              </a>
              <a href="https://t.me/cryptoopseccom" target="_blank" rel="noopener noreferrer">
                <SiTelegram className="w-6 h-6 text-cyber-steel hover:text-cyber-gold cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
          


        </div>
        
        <div className="border-t border-cyber-steel mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 CryptoOpsec.com. Educational content only. Not financial advice. 
            <span className="text-cyber-gold"> Stay safe out there.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
