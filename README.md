# ![NYPhil Logo](https://archives.nyphil.org/images/logo-mobile.gif) Project: Building a JSON API

### Description

I built a JSON API using Mongoose and Express. In addition, I
found a dataset online to pull data from, and used this retrieved data to
build your own model(s), seed your database.

### Endpoints

| Endpoint | Description |
| -------- | ----------- |
| GET http://localhost:4000/ | , redirecting to the following URL |
| GET http://localhost:4000/program | Returns a json list of all performances from the 1974-75 to 1984-85 seasons |
| GET http://localhost:4000/program/orchestra/*ensemble* | Returns performances with the given group. ie: *Musicians of the New York Philharmonic* *NY Philharmonic Ensembles*  *NYP Presentation* *Members of NY Philharmonic*|
| GET http://localhost:4000/program/_id/*objectId* | Returns performance based on the ObjectID |
| POST http://localhost:4000/program | Endpoint to create new performance. |
| PUT http://localhost:4000/program/_id/*objectId* | Endpoint to edit an existing perormance object. |
| DELETE http://localhost:4000/program/_id/*objectId* | Deletes the given performance based on ID. |

### Requirements Checklist

- [x] Be built using Express and Mongoose.
- [x] Have at least one model.
- [x] Have complete CRUD functionality implemented with RESTful routes. (You may
      logically distribute CRUD functionality across models, should you decide to implement more than one. This is only allowed
      when it does not make sense in the context of your application to have full
      CRUD on one model).
- [x] Have its own repository under your GitHub account (do not fork this repo).
- Be deployed to Heroku (we will have a lesson on this later this week).
- [x] Have good, clean Javascript code. Only include comments for documentation,
      and don't include any non-functional code. Use the auto-formatter regularly!
- [x] Demonstrate a good commit history.
- Have well-documented API routes. You can do this in your Readme, or using
  Swagger or apidoc (see below).

