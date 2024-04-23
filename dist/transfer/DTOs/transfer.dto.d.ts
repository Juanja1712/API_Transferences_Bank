export declare class CreateTransferDto {
    sender: string;
    receiver: string;
    amount: number;
    transactionDate: Date;
}
export declare class UpdateTransferDto {
    sender?: string;
    receiver?: string;
    amount?: number;
    transactionDate?: Date;
}
