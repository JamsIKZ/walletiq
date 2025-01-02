const API_KEY = 'd7f57f9f-2c02-4d95-b953-d661b3b359cc';
const BASE_URL = 'https://data.solanatracker.io';

interface TokenPnL {
  holding: number;
  held: number;
  sold: number;
  realized: number;
  unrealized: number;
  total: number;
  total_sold: number;
  total_invested: number;
  average_buy_amount: number;
  current_value: number;
  cost_basis: number;
}

interface WalletSummary {
  realized: number;
  unrealized: number;
  total: number;
  totalInvested: number;
  averageBuyAmount: number;
  totalWins: number;
  totalLosses: number;
  winPercentage: number;
  lossPercentage: number;
}

interface WalletPnL {
  tokens: Record<string, TokenPnL>;
  summary: WalletSummary;
}

export async function getWalletPnL(wallet: string): Promise<WalletPnL> {
  try {
    const response = await fetch(`${BASE_URL}/pnl/${wallet}?hideDetails=false`, {
      headers: {
        'x-api-key': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch wallet data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching wallet data:', error);
    throw error;
  }
} 