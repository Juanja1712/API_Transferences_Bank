import { TransferService } from '../services/transfer.service';
import { CreateTransferDto, UpdateTransferDto } from '../DTOs/transfer.dto';
import { Transfer } from '../../interface/transfer.interface';
export declare class TransferController {
    private readonly transferService;
    constructor(transferService: TransferService);
    findAll(): Promise<Transfer[]>;
    findOne(id: string): Promise<Transfer>;
    create(createTransferDto: CreateTransferDto): Promise<Transfer>;
    update(id: string, updateTransferDto: UpdateTransferDto): Promise<Transfer>;
    remove(id: string): Promise<Transfer>;
}
