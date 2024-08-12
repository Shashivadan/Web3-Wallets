"use client";

import React from "react";
import { Button } from "./ui/button";
import { Solana, Ethereum } from "react-web3-icons";

interface Proptypes {
  OnEtherClick: () => void;
  OnSolClick: () => void;
}

export default function WalletButton({ OnEtherClick, OnSolClick }: Proptypes) {
  return (
    <div>
      <div className="flex gap-2">
        <div>
          <Button onClick={OnSolClick} className="flex gap-1">
            <div>solana wallet</div>
            <div>
              <Solana />
            </div>
          </Button>
        </div>
        <div>
          <Button onClick={OnEtherClick} className="p-3 flex gap-2">
            <div>ethereum wallet</div>
            <div>
              <Ethereum />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
