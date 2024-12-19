import { clusterApiUrl, PublicKey } from '@solana/web3.js';

export const PROGRAM_ID = new PublicKey('J19NtfWfRG2AjWd6aPiwxotyS5BUoTNvgK3SbhfEvmd3');
export const NETWORK = clusterApiUrl('devnet');
export const COMMITMENT = 'processed';

export const ESCROW_SEED = 'escrow';

export const ERROR_MESSAGES = {
  WALLET_NOT_CONNECTED: 'Please connect your wallet first',
  INVALID_ADDRESS: 'Invalid address provided',
  INVALID_AMOUNT: 'Invalid amount provided',
  TRANSACTION_FAILED: 'Transaction failed',
} as const;