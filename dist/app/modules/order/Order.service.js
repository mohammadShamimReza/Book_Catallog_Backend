"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.create({
        data,
    });
    return result;
});
const getById = (id, email, password, role) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (role === 'admin') {
        result = yield prisma_1.default.order.findMany({});
    }
    if (role === 'customer') {
        const isUserExist = yield prisma_1.default.user.findFirst({
            where: {
                email,
                password,
                role,
            },
        });
        if (!isUserExist) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'user not found');
        }
        const UserId = isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.id;
        result = yield prisma_1.default.order.findFirst({
            where: {
                id: id,
                userId: UserId,
            },
        });
    }
    if (!result) {
        result = 'order not found';
    }
    return result;
});
const getOrder = (email, password, role) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (role === 'admin') {
        result = yield prisma_1.default.order.findMany({});
    }
    if (role === 'customer') {
        const isUserExist = yield prisma_1.default.user.findFirst({
            where: {
                email,
                password,
                role,
            },
        });
        if (!isUserExist) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'user not found');
        }
        const id = isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.id;
        result = yield prisma_1.default.order.findFirst({
            where: {
                userId: id,
            },
        });
    }
    if (!result) {
        result = 'order not placed yet';
    }
    return result;
});
exports.OrderService = {
    createOrder,
    getById,
    getOrder,
};
