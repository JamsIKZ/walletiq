'use client'

import { useState } from 'react';
import { cn } from "@/lib/utils";
import InteractiveHoverButton from './interactive-hover-button';

interface WalletInputProps extends React.HTMLAttributes<HTMLDivElement> {
  onWalletSubmit?: (address: string) => void;
}

export const WalletInput = ({ className, onWalletSubmit, ...props }: WalletInputProps) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address && onWalletSubmit) {
      onWalletSubmit(address);
    }
  };

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)} {...props}>
      <div className="text-sm text-gray-600 mb-2">Enter Solana Wallet Address</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Solana address (starts with a number or letter)"
          className={cn(
            "w-full px-6 py-4 bg-black/5 border border-black/10 rounded-full placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all",
            address ? "text-white bg-black/90" : "text-black"
          )}
        />
        <InteractiveHoverButton 
          type="submit"
          text="Analyze Wallet"
          className="w-full text-lg py-4 bg-white text-black border border-black/10 rounded-full"
        />
      </form>
    </div>
  );
}; 