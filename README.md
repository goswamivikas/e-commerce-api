# e-commerce-api

<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->

## Endpoints

- [e-commerce-api](#e-commerce-api)
  - [Endpoints](#endpoints)
  - [auth](#auth)
    - [1. login](#1-login)
    - [2. logout](#2-logout)
    - [3. register](#3-register)
  - [user](#user)
    - [1. get all users](#1-get-all-users)
    - [2. show me](#2-show-me)
    - [3. get single user](#3-get-single-user)
    - [4. update user](#4-update-user)
    - [5. update user password](#5-update-user-password)
  - [product](#product)
    - [1. get single product](#1-get-single-product)
    - [2. get all products](#2-get-all-products)
    - [3. create Product](#3-create-product)
    - [4. update product](#4-update-product)
    - [5. delete product](#5-delete-product)
    - [6. uploadImage](#6-uploadimage)
    - [7. get single product reviews](#7-get-single-product-reviews)
  - [review](#review)
    - [1. get single review](#1-get-single-review)
    - [2. get single review Copy](#2-get-single-review-copy)
    - [3. create review](#3-create-review)
    - [4. update review](#4-update-review)
    - [5. delete review](#5-delete-review)
  - [order](#order)
    - [1. get single order](#1-get-single-order)
    - [2. get all orders](#2-get-all-orders)
    - [3. get current user orders](#3-get-current-user-orders)
    - [4. create order](#4-create-order)
    - [5. update order](#5-update-order)
  - [Ungrouped](#ungrouped)
    - [1. Home](#1-home)

---

## auth

### 1. login

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/auth/login
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

```js
{
  "name": "admin",
  "email": "user2@gmail.com",
  "password": "secret",
  "role":"user"
}
```

### 2. logout

**_Endpoint:_**

```bash
Method: GET
Type: RAW
URL: {{URL}}/auth/logout
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

```js
{
  "name": "user1",
  "email": "user8@gmail.com",
  "password": "secret",
  "role":"user"
}
```

### 3. register

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/auth/register
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

```js
{
  "name": "user2",
  "email": "user2@gmail.com",
  "password": "secret",
  "role":"user"
}
```

## user

### 1. get all users

**_Endpoint:_**

```bash
Method: GET
Type: RAW
URL: {{URL}}/users/
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

```js
{
  "name": "user1",
  "email": "user1@gmail.com",
  "password": "secret",
  "role":"user"
}
```

### 2. show me

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/users/showMe
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

### 3. get single user

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/users/62222c22ad66ac5634eeab5b
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

### 4. update user

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/users/updateUser
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

```js
{
  "name": "newuser1",
  "email":"user1@gmail.com"
}
```

### 5. update user password

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/users/updateUserPassword
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

```js
{
    "oldPassword": "123456",
    "newPassword":"secret"
}
```

## product

### 1. get single product

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/products/622b20dfc15b3e08483d981b
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

### 2. get all products

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/products/
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

### 3. create Product

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/products/
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

```js
{
    "name" : "testing product 4",
    "description": "some description",
    "category":"office",
    "company":"ikea"
}
```

### 4. update product

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/products/622b1d2253c8ee003b8eaa6a
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

```js
{
    "name": "testing product 1"
}
```

### 5. delete product

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: {{URL}}/products/622b1d2253c8ee003b8eaa6a
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

### 6. uploadImage

**_Endpoint:_**

```bash
Method: POST
Type: FORMDATA
URL: {{URL}}/products/uploadImage
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

| Key   | Value | Description |
| ----- | ----- | ----------- |
| image |       |             |

### 7. get single product reviews

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/products/622b20dfc15b3e08483d981b/reviews
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

## review

### 1. get single review

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/reviews/622b5d6b5ea4858766f0fa27
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

### 2. get single review Copy

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/reviews/622b5d6b5ea4858766f0fa27
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

### 3. create review

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/reviews
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

```js
{
    "product": "622b20dfc15b3e08483d981b",
    "rating": 3,
    "title": "product 4 bad",
    "comment": "ok ok product"
}
```

### 4. update review

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/reviews/622b5c10fd3b51abf2b1c33b
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

```js
{
      "_id": "622b5c10fd3b51abf2b1c33b",
      "rating": 1,
      "title": "bad product",
      "comment": "Really bad product",
      "user": "62222c0ead66ac5634eeab57",
      "product": "622b20dfc15b3e08483d981b",
      "createdAt": "2022-03-11T14:26:24.140Z",
      "updatedAt": "2022-03-11T14:26:24.140Z",
      "__v": 0
}
```

### 5. delete review

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: {{URL}}/reviews/622b1d2253c8ee003b8eaa6a
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

## order

### 1. get single order

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/orders/622ca78743593706fcea1452
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

### 2. get all orders

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/orders/
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

### 3. get current user orders

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}/orders/showAllMyOrders
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

### 4. create order

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: {{URL}}/orders
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

```js
{
    "tax": 399,
    "shippingFee": 499,
    "items": [
      {
        "name": "accent chair",
        "price": 2599,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
        "amount": 34,
        "product": "622b20dfc15b3e08483d981b"
      }
    ]
  }
```

### 5. update order

**_Endpoint:_**

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/orders/622ca78743593706fcea1452
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

**_Body:_**

```js
{
    "paymentIntentId" : "abcd"
}
```

## Ungrouped

### 1. Home

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{URL}}
```

**_Headers:_**

| Key        | Value                                         | Description |
| ---------- | --------------------------------------------- | ----------- |
| Accept     | _/_                                           |             |
| User-Agent | Thunder Client (https://www.thunderclient.io) |             |

---

[Back to top](#e-commerce-api)

> Generated at 2022-03-12 20:59:56 by [docgen](https://github.com/thedevsaddam/docgen)
