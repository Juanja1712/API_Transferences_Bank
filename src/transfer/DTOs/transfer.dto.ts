import { IsString, IsNumber, IsDate, IsNotEmpty } from 'class-validator';

export class CreateTransferDto {
  @IsNotEmpty()
  @IsString()
  sender: string;

  @IsNotEmpty()
  @IsString()
  receiver: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsDate()
  transactionDate: Date;
}

export class UpdateTransferDto {
  @IsString()
  sender?: string;

  @IsString()
  receiver?: string;

  @IsNumber()
  amount?: number;

  @IsDate()
  transactionDate?: Date;
}
