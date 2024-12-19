export interface EscrowAccount {
  buyer: string;
  seller: string;
  amount: number;
  state: EscrowState;
  startTime: number;
  bump: number;
}

export interface CreateEscrowData {
  sellerAddress: string;
  amount: number;
  mintAddress: string;
}

export enum EscrowState {
  Initialized = 'Initialized',
  Delivered = 'Delivered',
  Approved = 'Approved',
  Disapproved = 'Disapproved',
  Dispute = 'Dispute',
  Completed = 'Completed'
}