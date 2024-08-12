import { Wallet, HDNodeWallet } from "ethers";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";

// Generate a random wallet

export async function ethWallet(path: string, seed: Buffer | any) {
  const hdNode = HDNodeWallet.fromSeed(seed);
  const child = hdNode.derivePath(path);
  const wallet = new Wallet(child.privateKey);
  return {
    privateKey: child.privateKey,
    publicKey: wallet.address,
    wallet: "eth",
  };
}
