import { Injectable, NotFoundException } from '@nestjs/common';
import { Transfer } from '../../interface/transfer.interface';
import { CreateTransferDto, UpdateTransferDto } from '../DTOs/transfer.dto';

@Injectable()
export class TransferService {
  private transfers: Transfer[] = [];

  findAll(): Transfer[] {
    return this.transfers;
  }

  findOne(id: string): Transfer {
    const transfer = this.transfers.find((t) => t.id === id);
    if (!transfer) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    return transfer;
  }

  create(createTransferDto: CreateTransferDto): Transfer {
    const newTransfer: Transfer = {
      id: this.generateId(),
      ...createTransferDto,
    };
    this.transfers.push(newTransfer);
    return newTransfer;
  }

  update(id: string, updateTransferDto: UpdateTransferDto): Transfer {
    const index = this.transfers.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    this.transfers[index] = { ...this.transfers[index], ...updateTransferDto };
    return this.transfers[index];
  }

  remove(id: string): Transfer {
    const index = this.transfers.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    const deletedTransfer = this.transfers.splice(index, 1);
    return deletedTransfer[0];
  }

  private generateId(): string {
    return this.transfers.length > 0
      ? String(Math.max(...this.transfers.map((t) => parseInt(t.id, 10))) + 1)
      : '1';
  }
}
