
## Description

Simple CRUD RESTful API built with [NestJS](https://github.com/nestjs/nest).

## Installation

```bash
> npm install
> insert your DB crendentials in .env file
```

## Running the app

```bash
# dev mode
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Example Usage

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
PUT http://localhost:3000/users/2
```

```
{
  "isActive": true
}
```

```
DELETE http://localhost:3000/users/2
```

```
{
  "statusCode": 200,
  "statusMsg": "OK",
  "data": "ID 1 Deleted"
}
```

## License

  Nest is [MIT licensed](LICENSE).
