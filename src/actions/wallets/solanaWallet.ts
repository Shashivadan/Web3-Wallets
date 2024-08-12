import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

export async function solonaWallet(derivedPath: string, seed: Buffer | any) {
  const derivedSeed = derivePath(derivedPath, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

  return {
    publicKey: Keypair.fromSecretKey(secret).publicKey.toBase58(),
    privateKey: bs58.encode(secret),
    wallet: "sol",
  };
}
