export const bookFilterableFields: string[] = [
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

export const bookSearchableFields: string[] = [
  'title',
  'author',
  'price',
  'genre',
];

export const bookRelationalFields: string[] = ['category'];
export const bookRelationalFieldsMapper: {
  [key: string]: string;
} = {
  category: 'category',
};
