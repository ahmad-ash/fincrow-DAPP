import { useState } from 'react';
import { useEscrow } from '../../hooks/useEscrow';
import { EscrowForm } from './EscrowForm';
import { CreateEscrowData } from '../../types/escrow';
import toast from 'react-hot-toast';

export const CreateEscrow = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { initializeEscrow } = useEscrow();

  const handleSubmit = async (data: CreateEscrowData) => {
    setIsLoading(true);
    try {
      const signature = await initializeEscrow(
        data.sellerAddress,
        data.amount,
        data.mintAddress
      );
      toast.success(`Escrow created! Signature: ${signature.slice(0, 8)}...`);
    } catch (error) {
      toast.error('Failed to create escrow: ' + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10">
      <h2 className="text-2xl font-bold mb-6 text-white">Create New Escrow</h2>
      <EscrowForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
};