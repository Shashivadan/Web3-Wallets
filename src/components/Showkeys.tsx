"use client";

import React, { useState } from "react";

import { Solana, Ethereum } from "react-web3-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Input } from "@/components/ui/input";

interface WalletKeys {
  privateKey: string;
  publicKey: string;
  wallet: string;
}

export default function Showkeys({ WalletKeys }: { WalletKeys: WalletKeys[] }) {
  const [showKey, setShowKey] = useState(false);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
      {" "}
      {WalletKeys.map((key) => (
        <>
          <Alert className=" bg-zinc-800 border-none text-white">
            {key.wallet === "sol" ? (
              <Solana className="h-4 w-4" />
            ) : (
              <Ethereum className="h-4 w-4" />
            )}
            <AlertTitle className="flex  gap-1">
              {" "}
              public key :{" "}
              <div className=" text-green-500"> {key.publicKey}</div>
            </AlertTitle>
            <AlertDescription className="text-sm flex gap-1">
              <div>Private Key:</div>
              <Input
                onClick={() => {
                  setShowKey(!showKey);
                }}
                type={showKey ? "text" : "password"}
                className="overflow-hidden text-ellipsis text-red-300 max-w-full border-none"
                // defaultValue={key.privateKey}
                value={key.privateKey}
              ></Input>
            </AlertDescription>
          </Alert>
        </>
      ))}
    </div>
  );
}
