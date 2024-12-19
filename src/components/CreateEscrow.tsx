import { useState } from 'react';
import { useEscrow } from '../hooks/useEscrow';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import toast from 'react-hot-toast';

export const CreateEscrow = () => {
  const [sellerAddress, setSellerAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [mintAddress, setMintAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { initializeEscrow } = useEscrow();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const signature = await initializeEscrow(
        sellerAddress,
        Number(amount),
        mintAddress
      );
      toast.success(`Escrow created! Signature: ${signature.slice(0, 8)}...`);
      // Reset form
      setSellerAddress('');
      setAmount('');
      setMintAddress('');
    } catch (error) {
      toast.error('Failed to create escrow: ' + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create New Escrow</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Seller Address"
          value={sellerAddress}
          onChange={(e) => setSellerAddress(e.target.value)}
          placeholder="Enter seller's wallet address"
          required
        />
        <Input
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
          min="0"
          step="0.000001"
        />
        <Input
          label="Token Mint Address"
          value={mintAddress}
          onChange={(e) => setMintAddress(e.target.value)}
          placeholder="Enter token mint address"
          required
        />
        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full"
        >
          Create Escrow
        </Button>
      </form>
    </div>
  );
};