import { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { CreateEscrowData } from '../../types/escrow';

interface EscrowFormProps {
  onSubmit: (data: CreateEscrowData) => Promise<void>;
  isLoading: boolean;
}

export const EscrowForm = ({ onSubmit, isLoading }: EscrowFormProps) => {
  const [formData, setFormData] = useState<CreateEscrowData>({
    sellerAddress: '',
    amount: 0,
    mintAddress: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData({ sellerAddress: '', amount: 0, mintAddress: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Seller Address"
        value={formData.sellerAddress}
        onChange={(e) => setFormData(prev => ({ ...prev, sellerAddress: e.target.value }))}
        placeholder="Enter seller's wallet address"
        required
      />
      <Input
        label="Amount"
        type="number"
        value={formData.amount || ''}
        onChange={(e) => setFormData(prev => ({ ...prev, amount: Number(e.target.value) }))}
        placeholder="Enter amount"
        required
        min="0"
        step="0.000001"
      />
      <Input
        label="Token Mint Address"
        value={formData.mintAddress}
        onChange={(e) => setFormData(prev => ({ ...prev, mintAddress: e.target.value }))}
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
  );
};