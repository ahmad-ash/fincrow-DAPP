import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Wallet } from 'lucide-react';

export const WalletButton = () => {
  const { connected } = useWallet();
  
  return (
    <div className="fixed top-4 right-4 flex items-center">
      <WalletMultiButton className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
        connected ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
      } text-white transition-colors`}>
        <Wallet className="w-5 h-5" />
        {connected ? 'Connected' : 'Connect Wallet'}
      </WalletMultiButton>
    </div>
  );
};