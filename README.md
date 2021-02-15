## Description 📋

Simple CRUD RESTful API built with [NestJS](https://github.com/nestjs/nest).

## Installation 🔧

```
> npm install
> insert your DB crendentials in .env file
```

## Running the app 🚀

```
# dev mode
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Example Usage 📌

```
GET http://localhost:3000/users
```

```
{
  "statusCode": 200,
  "statusMsg": "OK",
  "data": [
    {
      "firstName": "Jenny",
      "lastName": "Cookie",
      "isActive": true,
      "id": 1
    },
    {
      "firstName": "Sue",
      "lastName": "Schmidt",
      "isActive": false,
      "id": 2
    }
  ]
}
```

```
GET http://localhost:3000/users/1
```

```
{
  "statusCode": 200,
  "statusMsg": "OK",
  "data": [
    {
      "firstName": "Jenny",
      "lastName": "Cookie",
      "isActive": true,
      "id": 1
    }
  ]
}
```

```
POST http://localhost:3000/users
```

```
{
  "firstName": "Jenny",
  "lastName": "Cook",
  "isActive": false | (default:true)
}
```

```
{
    "statusCode": 201,
    "statusMsg": "CREATED",
    "data": [
        {
            "firstName": "Jenny",
            "lastName": "Cooke",
            "isActive": false,
            "id": 1
        }
    ]
}
```

```
PUT http://localhost:3000/users/2
```

```
{
  "isActive": true
}
```
```
{
    "statusCode": 200,
    "statusMsg": "OK",
    "data": {
        "firstName": "Jenny",
        "lastName": "Cooke",
        "isActive": true,
        "id": 2
    }
}
```

```
DELETE http://localhost:3000/users/2
```

```
{
  "statusCode": 200,
  "statusMsg": "OK",
}
```