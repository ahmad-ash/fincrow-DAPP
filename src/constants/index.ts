export const PROGRAM_ID = "J19NtfWfRG2AjWd6aPiwxotyS5BUoTNvgK3SbhfEvmd3";

export const IDL = {
  "version": "0.1.0",
  "name": "escrow",
  "instructions": [
    {
      "name": "initializeEscrow",
      "accounts": [
        { "name": "escrowAccount", "isMut": true, "isSigner": false },
        { "name": "buyer", "isMut": true, "isSigner": true },
        { "name": "seller", "isMut": false, "isSigner": false },
        { "name": "buyerTokenAccount", "isMut": true, "isSigner": false },
        { "name": "escrowVault", "isMut": true, "isSigner": false },
        { "name": "mint", "isMut": false, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false },
        { "name": "rent", "isMut": false, "isSigner": false }
      ],
      "args": [{ "name": "amount", "type": "u64" }]
    },
    {
      "name": "markAsDelivered",
      "accounts": [
        { "name": "escrowAccount", "isMut": true, "isSigner": false },
        { "name": "seller", "isMut": false, "isSigner": true },
        { "name": "buyerTokenAccount", "isMut": true, "isSigner": false },
        { "name": "escrowVault", "isMut": true, "isSigner": false },
        { "name": "mint", "isMut": false, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false }
      ],
      "args": []
    },
    {
      "name": "approveProduct",
      "accounts": [
        { "name": "escrowAccount", "isMut": true, "isSigner": false },
        { "name": "buyer", "isMut": false, "isSigner": true },
        { "name": "seller", "isMut": false, "isSigner": false },
        { "name": "escrowVault", "isMut": true, "isSigner": false },
        { "name": "sellerTokenAccount", "isMut": true, "isSigner": false },
        { "name": "mint", "isMut": false, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false }
      ],
      "args": []
    },
    {
      "name": "disapproveProduct",
      "accounts": [
        { "name": "escrowAccount", "isMut": true, "isSigner": false },
        { "name": "buyer", "isMut": false, "isSigner": true },
        { "name": "seller", "isMut": false, "isSigner": false },
        { "name": "escrowVault", "isMut": true, "isSigner": false },
        { "name": "buyerTokenAccount", "isMut": true, "isSigner": false },
        { "name": "mint", "isMut": false, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false }
      ],
      "args": []
    }
  ]
};