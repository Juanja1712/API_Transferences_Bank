// transfer.interface.ts
export interface Transfer {
  id: string;
  sender: string;
  receiver: string;
  amount: number;
  transactionDate: Date;
}

// transfer.dto.ts
