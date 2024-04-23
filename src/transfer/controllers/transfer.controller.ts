import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { TransferService } from '../services/transfer.service';
import { CreateTransferDto, UpdateTransferDto } from '../DTOs/transfer.dto';
import { Transfer } from '../../interface/transfer.interface';

@Controller('transfers')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Get('all')
  async findAll(): Promise<Transfer[]> {
    return this.transferService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Transfer> {
    try {
      return this.transferService.findOne(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post('createTransfer')
  async create(
    @Body() createTransferDto: CreateTransferDto,
  ): Promise<Transfer> {
    return this.transferService.create(createTransferDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTransferDto: UpdateTransferDto,
  ): Promise<Transfer> {
    try {
      return this.transferService.update(id, updateTransferDto);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Transfer> {
    try {
      return this.transferService.remove(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
