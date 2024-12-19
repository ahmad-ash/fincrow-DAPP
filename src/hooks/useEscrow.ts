import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Program, AnchorProvider, web3, utils } from '@project-serum/anchor';
import { PROGRAM_ID, ESCROW_SEED, ERROR_MESSAGES } from '../config/constants';
import { IDL } from '../config/idl';
import { PublicKey } from '@solana/web3.js';
import { useCallback } from 'react';
import toast from 'react-hot-toast';

export const useEscrow = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const getProvider = () => {
    if (!publicKey) throw new Error(ERROR_MESSAGES.WALLET_NOT_CONNECTED);
    
    const provider = new AnchorProvider(
      connection,
      window.solana,
      { commitment: 'processed' }
    );
    return provider;
  };

  const getProgram = () => {
    const provider = getProvider();
    return new Program(IDL, PROGRAM_ID, provider);
  };

  const findEscrowAccount = (buyer: PublicKey, seller: PublicKey) => {
    return PublicKey.findProgramAddressSync(
      [
        Buffer.from(ESCROW_SEED),
        buyer.toBuffer(),
        seller.toBuffer(),
      ],
      PROGRAM_ID
    );
  };

  const initializeEscrow = useCallback(async (
    sellerAddress: string,
    amount: number,
    mintAddress: string,
  ) => {
    try {
      if (!publicKey) throw new Error(ERROR_MESSAGES.WALLET_NOT_CONNECTED);

      const seller = new PublicKey(sellerAddress);
      const mint = new PublicKey(mintAddress);
      const program = getProgram();

      const [escrowAccount] = findEscrowAccount(publicKey, seller);

      const transaction = await program.methods
        .initializeEscrow(new web3.BN(amount))
        .accounts({
          escrowAccount,
          buyer: publicKey,
          seller,
          mint,
        })
        .transaction();

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature);
      
      return signature;
    } catch (error) {
      console.error('Initialize escrow error:', error);
      throw error;
    }
  }, [publicKey, connection, sendTransaction]);

  return {
    initializeEscrow,
  };
};