import { ShieldCheck } from 'lucide-react';

export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-center mb-8">
        <ShieldCheck className="w-12 h-12 text-blue-400 mr-4" />
        <h1 className="text-4xl font-bold text-center">
          Solana Escrow Platform
        </h1>
      </div>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Secure your transactions with our decentralized escrow service. 
        Connect your wallet to start creating escrow contracts on Solana.
      </p>
    </>
  );
};