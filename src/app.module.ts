import { Module } from '@nestjs/common';
import { TransferController } from './transfer/controllers/transfer.controller';
import { TransferService } from './transfer/services/transfer.service';
import { TransferModule } from './transfer/transfer.module';

@Module({
  imports: [TransferModule],
  controllers: [TransferController],
  providers: [TransferService],
})
export class AppModule {}
