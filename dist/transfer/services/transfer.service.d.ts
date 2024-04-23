import { Transfer } from '../../interface/transfer.interface';
import { CreateTransferDto, UpdateTransferDto } from '../DTOs/transfer.dto';
export declare class TransferService {
    private transfers;
    findAll(): Transfer[];
    findOne(id: string): Transfer;
    create(createTransferDto: CreateTransferDto): Transfer;
    update(id: string, updateTransferDto: UpdateTransferDto): Transfer;
    remove(id: string): Transfer;
    private generateId;
}
