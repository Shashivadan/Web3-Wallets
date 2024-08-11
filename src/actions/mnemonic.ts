import { generateMnemonic, mnemonicToSeedSync } from "bip39";

export async function generatemnemonic() {
  const mnemonic = generateMnemonic();
  const seed = mnemonicToSeedSync(mnemonic);
  return { arryaOfSting: mnemonic.split(" "), seed };
}
