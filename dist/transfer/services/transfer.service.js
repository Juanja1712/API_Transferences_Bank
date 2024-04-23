"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferService = void 0;
const common_1 = require("@nestjs/common");
let TransferService = class TransferService {
    constructor() {
        this.transfers = [];
    }
    findAll() {
        return this.transfers;
    }
    findOne(id) {
        const transfer = this.transfers.find((t) => t.id === id);
        if (!transfer) {
            throw new common_1.NotFoundException(`Transfer with ID ${id} not found`);
        }
        return transfer;
    }
    create(createTransferDto) {
        const newTransfer = {
            id: this.generateId(),
            ...createTransferDto,
        };
        this.transfers.push(newTransfer);
        return newTransfer;
    }
    update(id, updateTransferDto) {
        const index = this.transfers.findIndex((t) => t.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Transfer with ID ${id} not found`);
        }
        this.transfers[index] = { ...this.transfers[index], ...updateTransferDto };
        return this.transfers[index];
    }
    remove(id) {
        const index = this.transfers.findIndex((t) => t.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Transfer with ID ${id} not found`);
        }
        const deletedTransfer = this.transfers.splice(index, 1);
        return deletedTransfer[0];
    }
    generateId() {
        return this.transfers.length > 0
            ? String(Math.max(...this.transfers.map((t) => parseInt(t.id, 10))) + 1)
            : '1';
    }
};
exports.TransferService = TransferService;
exports.TransferService = TransferService = __decorate([
    (0, common_1.Injectable)()
], TransferService);
//# sourceMappingURL=transfer.service.js.map