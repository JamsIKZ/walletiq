import { DotPattern } from "@/components/ui/dot-pattern";
import MorphingText from "@/components/ui/morphing-text";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import TypingAnimation from "@/components/ui/typing-animation";

export default function Home() {
  return (
    <div className="relative bg-white">
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <DotPattern 
          width={12}
          height={12}
          cx={1}
          cy={1}
          cr={1}
          className="opacity-70"
        />
        <div className="relative w-full max-w-4xl px-4">
          <MorphingText 
            texts={[
              "WalletIQ",
              "Wallet Analytics",
              "Token Tracker",
              "Improve Your Trading",
              "Find The Next Mooner"
            ]} 
            className="text-neutral-800"
          />
        </div>
        <ScrollIndicator />
      </div>
      
      <div className="flex flex-col items-center justify-center py-8">
        <div className="max-w-2xl text-center">
          <TextRevealByWord
            text="Don't miss the next moonshot. Track trending memecoins, spot early gems, and analyze your trading performance on Solana. From BONK to the next big thing, WalletIQ helps you stay ahead of the game. Ready to ape in smarter?"
          />
        </div>
        <div className="mt-8">
          <TypingAnimation
            className="text-2xl font-light text-black"
            duration={150}
            delay={1000}
            startOnView={true}
          >
            coming soon
          </TypingAnimation>
        </div>
      </div>
    </div>
  );
}
