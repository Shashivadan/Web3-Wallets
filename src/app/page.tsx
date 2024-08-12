"use client";

import { generatemnemonic } from "@/actions/mnemonic";
import { ethWallet } from "@/actions/wallets/ethWallet";
import { solonaWallet } from "@/actions/wallets/solanaWallet";
import Showkeys from "@/components/Showkeys";
import ShowSeeds from "@/components/ShowSeeds";
import Title from "@/components/Title";
import WalletButton from "@/components/WalletButton";
import { useEffect, useState } from "react";

interface PhraseType {
  arryaOfSting: string[];
  seed: Buffer;
}

interface WalletKey {
  privateKey: string;
  publicKey: string;
  wallet: string;
}

export default function Home() {
  const [phrase, setPhrase] = useState<PhraseType | null>(null);
  const [arrKeys, setArrKeys] = useState<WalletKey[]>([]);
  const [addressIndex, setAddressIndex] = useState<number>(0);

  const derivePath = {
    eth: `m/44'/60'/${addressIndex}'/0'`,
    sol: `m/44'/501'/${addressIndex}'/0'`,
  };

  useEffect(() => {
    async function getPhares() {
      const memo = await generatemnemonic();
      setPhrase(memo);
    }
    if (!phrase) {
      getPhares();
    }
    getPhares();
  }, []);

  const handleOnsolClick = async () => {
    setAddressIndex(addressIndex + 1);
    if (phrase?.seed) {
      const keys = await solonaWallet(derivePath.sol, phrase.seed);
      setArrKeys((prevKeys) => [...prevKeys, { ...keys }]);
    }
  };

  const handleOnEtherClick = async () => {
    setAddressIndex(addressIndex + 1);
    if (phrase?.seed) {
      const keys = await ethWallet(derivePath.eth, phrase.seed);
      setArrKeys((prevKeys) => [...prevKeys, { ...keys }]);
    }
  };

  useEffect(() => {
    console.log(arrKeys);
  }, [arrKeys]);

  return (
    <main className="bg-black text-white min-h-screen h-full flex flex-col">
      <div className="p-28">
        <Title />
      </div>
      <div className="flex items-center justify-center">
        {phrase && <ShowSeeds seeds={phrase.arryaOfSting} />}
      </div>
      <div className="flex items-center justify-center p-6 w-full">
        <WalletButton
          OnSolClick={handleOnsolClick}
          OnEtherClick={handleOnEtherClick}
        />
      </div>
      <div className="flex items-center justify-center w-full p-10 ">
        <Showkeys WalletKeys={arrKeys} />
      </div>
    </main>
  );
}
