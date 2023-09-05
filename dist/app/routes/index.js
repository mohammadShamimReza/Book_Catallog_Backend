"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_routes_1 = require("../modules/auth/Auth.routes");
const Book_routes_1 = require("../modules/book/Book.routes");
const Category_routes_1 = require("../modules/category/Category.routes");
const Order_routes_1 = require("../modules/order/Order.routes");
const Profile_routes_1 = require("../modules/profile/Profile.routes");
const User_routes_1 = require("../modules/user/User.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        routes: Auth_routes_1.authRoutes,
    },
    {
        path: '/users',
        routes: User_routes_1.userRoutes,
    },
    {
        path: '/categories',
        routes: Category_routes_1.categoryRoutes,
    },
    {
        path: '/books',
        routes: Book_routes_1.bookRoutes,
    },
    {
        path: '/orders',
        routes: Order_routes_1.orderRoutes,
    },
    {
        path: '/profile',
        routes: Profile_routes_1.profileRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
