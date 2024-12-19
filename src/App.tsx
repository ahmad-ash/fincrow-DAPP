import { Toaster } from 'react-hot-toast';
import { WalletContextProvider } from './contexts/WalletContextProvider';
import { WalletButton } from './components/WalletButton';
import { CreateEscrow } from './components/CreateEscrow';
import { Header } from './components/Header';

export const App = () => {
  return (
    <WalletContextProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <WalletButton />
        <div className="container mx-auto px-4 py-16">
          <Header />
          <CreateEscrow />
        </div>
        <Toaster position="bottom-right" />
      </div>
    </WalletContextProvider>
  );
};

export default App;