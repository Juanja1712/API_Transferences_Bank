"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferController = void 0;
const common_1 = require("@nestjs/common");
const transfer_service_1 = require("../services/transfer.service");
const transfer_dto_1 = require("../DTOs/transfer.dto");
let TransferController = class TransferController {
    constructor(transferService) {
        this.transferService = transferService;
    }
    async findAll() {
        return this.transferService.findAll();
    }
    async findOne(id) {
        try {
            return this.transferService.findOne(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async create(createTransferDto) {
        return this.transferService.create(createTransferDto);
    }
    async update(id, updateTransferDto) {
        try {
            return this.transferService.update(id, updateTransferDto);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async remove(id) {
        try {
            return this.transferService.remove(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
exports.TransferController = TransferController;
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransferController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransferController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('createTransfer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transfer_dto_1.CreateTransferDto]),
    __metadata("design:returntype", Promise)
], TransferController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, transfer_dto_1.UpdateTransferDto]),
    __metadata("design:returntype", Promise)
], TransferController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransferController.prototype, "remove", null);
exports.TransferController = TransferController = __decorate([
    (0, common_1.Controller)('transfers'),
    __metadata("design:paramtypes", [transfer_service_1.TransferService])
], TransferController);
//# sourceMappingURL=transfer.controller.js.map