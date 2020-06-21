# Login/Auth App with the MERN Stack — (Backend)

## Configuration

Add your own `MONGOURI` from your MongoDB database in `config/keys.dev.js`.

```javascript
module.exports = {
  MONGODB_URI: "YOUR_MONGO_URI_HERE",
  SECRET_OR_KEY: "secret",
};
```

## Running locally

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

#### These are the APIs we provide:

| Methods | Urls                  | Actions                            |
| ------- | --------------------- | ---------------------------------- |
| POST    | `/api/users/register` | signup new account                 |
| POST    | `/api/users/login`    | login an account                   |
|         |                       |                                    |
|         |                       |                                    |
| POST    | `/api/employees/`     | create a new Employee              |
| GET     | `/api/employees/`     | retrieve all Employees             |
| GET     | `/api/employees/:id`  | retrieve a single Employee with id |
| PATCH   | `/api/employees/:id`  | update a Employee with id          |
| DELETE  | `/api/employees/:id`  | delete a Employee with id          |
| DELETE  | `/api/employees/`     | delete all Employees               |

#
