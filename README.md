# Book_Catallog_Backend


Short description of your project.

## Live Link

[https://bookcatallogbackend-production.up.railway.app/]

## Application Routes

### User
- `POST`  https://bookcatallogbackend-production.up.railway.app/api/v1/auth/signup
- `GET`  https://bookcatallogbackend-production.up.railway.app/api/v1/users
- `GET`  https://bookcatallogbackend-production.up.railway.app/api/v1/users/1594b285-b904-4a9f-b7cd-ea937f9d6bd5
- `PATCH`  https://bookcatallogbackend-production.up.railway.app/api/v1/users/1594b285-b904-4a9f-b7cd-ea937f9d6bd5
- `DELETE`  https://bookcatallogbackend-production.up.railway.app/api/v1/users/1594b285-b904-4a9f-b7cd-ea937f9d6bd5
- `GET`  https://bookcatallogbackend-production.up.railway.app/api/v1/profile



### Category
- `POST`  https://bookcatallogbackend-production.up.railway.app/api/v1/categories/create-category
- `GET`  https://bookcatallogbackend-production.up.railway.app/api/v1/categories 
- `GET`  https://bookcatallogbackend-production.up.railway.app/api/v1/categories/4cfd864d-9fbe-4b67-a778-218260355105
- `PATCH`  https://bookcatallogbackend-production.up.railway.app/api/v1/categories/4cfd864d-9fbe-4b67-a778-218260355105
- `DELETE`  https://bookcatallogbackend-production.up.railway.app/api/v1/categories/4cfd864d-9fbe-4b67-a778-218260355105

### Books

- `POST` https://bookcatallogbackend-production.up.railway.app/api/v1/books/create-book
- `GET` https://bookcatallogbackend-production.up.railway.app/api/v1/books
- `GET` https://bookcatallogbackend-production.up.railway.app/api/v1/books/4cfd864d-9fbe-4b67-a778-218260355105/category
- `GET` https://bookcatallogbackend-production.up.railway.app/api/v1/books/d4384656-9a2b-4af8-a462-cdedcf26972a
- `PATCH` https://bookcatallogbackend-production.up.railway.app/api/v1/books/d4384656-9a2b-4af8-a462-cdedcf26972a
- `DELETE` https://bookcatallogbackend-production.up.railway.app/api/v1/books/d4384656-9a2b-4af8-a462-cdedcf26972a

### Orders

- `POST` https://bookcatallogbackend-production.up.railway.app/api/v1/orders/create-order
- `GET` https://bookcatallogbackend-production.up.railway.app/api/v1/orders 
- `GET` https://bookcatallogbackend-production.up.railway.app/api/v1/orders/7c1ffb64-8646-476b-ba2b-8945ff031209

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install this project.

```bash
npm install
