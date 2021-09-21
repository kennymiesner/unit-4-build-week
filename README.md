APi calls instruction

#### 1 [GET] Get all users, endpoint: https://buildweekapp.herokuapp.com/api/users

this endpoint will return all users

//

#### 2 [GET] Get each user listed classes, endpoint: https://buildweekapp.herokuapp.com/api/users/:user_id/listed-classes

this endpoint will return all classes listed by the user with the user_id

//

#### 3 [POST] REGISTER endpoint: https://buildweekapp.herokuapp.com/api/auth/register

this endpoint needs a body to post with, like below
{
"email": "xxxxxx@gmail.com",
"role": "owner or customer",
"password":"xxxxx"
}
**Response will be**
{
"message": "Welcome, ppp@gmail.com"
}
or
{
"message": "this email has already been registered"
}

//

#### 4 [POST] LOGIN endpoint: https://buildweekapp.herokuapp.com/api/auth/login

this endpoint needs a body to post with, for example:
{
"email": "ppp@gmail.com",
"password":"1234"
}
**Response will be**
{
"message": "welcome, ppp@gmail.com",
"role": "owner",
"user_id": 5,
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2VtYWlsIjoicHBwQGdtYWlsLmNvbSIsInJvbGVfbmFtZSI6Im93bmVyIiwiaWF0IjoxNjMyMDI5OTY1LCJleHAiOjE2MzIxMTYzNjV9.Py_GbcRMInXsUpkGhlxWVwRxiH5iEbfabHjjX0YwyLQ"
}
**OR**
{
"message": "invalid email or password"
}

//

#### 5 [GET] Get all classes, endpoint: https://buildweekapp.herokuapp.com/api/classes

this endpoint will respond with all classes listed for sale

//

#### 6 [GET] Get item by id, endpoint: https://buildweekapp.herokuapp.com/api/classes/:id

this endpoint will return the item with that id, if id doesn't exist, it will return
{
"message": "Item doesn't exist"
}

//

#### 7 [POST] Adding new item, endpoint: https://buildweekapp.herokuapp.com/api/classes

this endpoint needs a body, for example:
{
"location": "Sunset Market, Cape Town",
"item_name": "Black beans",
"description": "New crop black beans, medium size.",
"price": "2.99",
"unit": "lb",
"user_id": 1
}
**Make sure you give user_id, so it can be fetched by user_id later. Response will be the newly created item**

//

#### 8 [PUT] Update an item by id, endpoint: https://buildweekapp.herokuapp.com/api/classes/:id

this endpoint needs a body like the example above, the response will be the updated item or
{
"message": "Item doesn't exist"
} **if the id doesn't exist"**

//

#### 9 [DELETE] delete an item by id, endpoint: https://buildweekapp.herokuapp.com/api/classes/:id

the response will be:
{
"message": "The item has been removed"
}
**or (if the id doesn't exist)**
{
"message": "Item doesn't exist"
}

# Build Week Scaffolding for Node and PostgreSQL

## Video Tutorial

The following tutorial explains how to set up this project using PostgreSQL and Heroku.

[![Setting up PostgreSQL for Build Week](https://img.youtube.com/vi/kTO_tf4L23I/maxresdefault.jpg)](https://www.youtube.com/watch?v=kTO_tf4L23I)

## Requirements

- [PostgreSQL, pgAdmin 4](https://www.postgresql.org/download/) and [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed in your local machine.
- A Heroku app with the [Heroku PostgreSQL Addon](https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-heroku-postgres) added to it.
- Development and testing databases created with [pgAdmin 4](https://www.pgadmin.org/docs/pgadmin4/4.29/database_dialog.html).

## Starting a New Project

- Create a new repository using this template, and clone it to your local.
- Create a `.env` file and follow the instructions inside `knexfile.js`.
- Fix the scripts inside `package.json` to use your Heroku app.

## Scripts

- **start**: Runs the app in production.
- **server**: Runs the app in development.
- **migrate**: Migrates the local development database to the latest.
- **rollback**: Rolls back migrations in the local development database.
- **seed**: Truncates all tables in the local development database, feel free to add more seed files.
- **test**: Runs tests.
- **deploy**: Deploys the main branch to Heroku.

**The following scripts NEED TO BE EDITED before using: replace `YOUR_HEROKU_APP_NAME`**

- **migrateh**: Migrates the Heroku database to the latest.
- **rollbackh**: Rolls back migrations in the Heroku database.
- **databaseh**: Interact with the Heroku database from the command line using psql.
- **seedh**: Runs all seeds in the Heroku database.

## Hot Tips

- Figure out the connection to the database and deployment before writing any code.

- If you need to make changes to a migration file that has already been released to Heroku, follow this sequence:

  1. Roll back migrations in the Heroku database
  2. Deploy the latest code to Heroku
  3. Migrate the Heroku database to the latest

- If your frontend devs are clear on the shape of the data they need, you can quickly build provisional endpoints that return mock data. They shouldn't have to wait for you to build the entire backend.

- Keep your endpoints super lean: the bulk of the code belongs inside models and other middlewares.

- Validating and sanitizing client data using a library is much less work than doing it manually.

- Revealing crash messages to clients is a security risk, but during development it's helpful if your frontend devs are able to tell you what crashed.

- PostgreSQL comes with [fantastic built-in functions](https://hashrocket.com/blog/posts/faster-json-generation-with-postgresql) for hammering rows into whatever JSON shape.

- If you want to edit a migration that has already been released but don't want to lose all the data, make a new migration instead. This is a more realistic flow for production apps: prod databases are never migrated down. We can migrate Heroku down freely only because there's no valuable data from customers in it. In this sense, Heroku is acting more like a staging environment than production.

- If your fronted devs are interested in running the API locally, help them set up PostgreSQL & pgAdmin in their machines, and teach them how to run migrations in their local. This empowers them to (1) help you troubleshoot bugs, (2) obtain the latest code by simply doing `git pull` and (3) work with their own data, without it being wiped every time you roll back the Heroku db. Collaboration is more fun and direct, and you don't need to deploy as often.
