"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRelationalFieldsMapper = exports.bookRelationalFields = exports.bookSearchableFields = exports.bookFilterableFields = void 0;
exports.bookFilterableFields = [
    'searchTerm',
    'id',
    'title',
    'author',
    'price',
    'minPrice',
    'maxPrice',
    'genre',
    'publicationDate',
    'category',
];
exports.bookSearchableFields = [
    'title',
    'author',
    'price',
    'genre',
];
exports.bookRelationalFields = ['category'];
exports.bookRelationalFieldsMapper = {
    category: 'category',
};
