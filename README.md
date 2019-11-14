# ![NYPhil Logo](https://archives.nyphil.org/images/logo-mobile.gif) Project: Building a JSON API

### Description

Working on parsing the New York Philharmonic Data Archive, years 1974-1985.

### URL /Program Route Endpoints

| Path                    | Method   | Action  | Description                                 |
| ----------------------- | -------- | ------- | ------------------------------------------- |
| `/`                     | `GET`    | #index  | Return all programs                         |
| `/orchestra/:orchestra` | `GET`    | #show   | Returns many by ensemble name               |
| `/_id_/:id    `         | `GET`    | #show   | Returns single performance from objectId    |
| `/`                     | `POST`   | #create | Creates a new performance in the database   |
| `/:_id `                | `PUT`    | #update | Updates specified performance               |
| `/:name`                | `DELETE` | #delete | Deletes specified perofmrance               |


### Example Response, abridged
 
[http://localhost:4000/program/orchestra/NY Philharmonic Ensembles]()
```
        "_id": "5dcc56d579843d582aa29d02",
        "performanceID": "6cd59e00-b4dc-4f85-851d-0d23e0c0f6f3-0.1",
        "programID": "5670",
        "orchestra": "NY Philharmonic Ensembles",
        "season": "1983-84",
        "concerts": [
            {
                "_id": "5dcc56d579843d582aa29d03",
                "eventType": "Chamber",
                "location": "Manhattan, NY",
                "venue": "Asia Society",
                "date": "1984-04-15T05:00:00Z",
                "time": "5:00PM"
            }
        ],
        "works": [
            {
                "soloists": [
                    {
                        "_id": "5dcc56d579843d582aa29d20",
                        "name": "Gordon, Kenneth",
                        "instrument": "Violin",
                        "role": "Assisting Artist"
                    },
                    {
                        "_id": "5dcc56d579843d582aa29d1f",
                        "name": "Rence, Dorian",
                        "instrument": "Viola",
                        "role": "Assisting Artist"
                    },
                    {
                        "_id": "5dcc56d579843d582aa29d1e",
                        "name": "Bernsohn, Lorin",
                        "instrument": "Cello",
                        "role": "Assisting Artist"
                    }
                ],
                "_id": "5dcc56d579843d582aa29d1d",
                "programID": "2247*",
                "composer": "Piston,  Walter",
                "title": "THREE COUNTERPOINTS FOR STRING TRIO"
            },
            {
                "soloists": [
                    {
                        "_id": "5dcc56d579843d582aa29d1c",
                        "name": "Gordon, Kenneth",
                        "instrument": "Violin",
                        "role": "Assisting Artist"
                    },
                    {
                        "_id": "5dcc56d579843d582aa29d1b",
                        "name": "Rence, Dorian",
                        "instrument": "Viola",
                        "role": "Assisting Artist"
                    },
                    {
                        "_id": "5dcc56d579843d582aa29d1a",
                        "name": "Bernsohn, Lorin",
                        "instrument": "Cello",
                        "role": "Assisting Artist"
                    },
                    {
                        "_id": "5dcc56d579843d582aa29d19",
                        "name": "Schaeffer, John",
                        "instrument": "Double Bass",
                        "role": "Assisting Artist"
                    }...
                ],
                "_id": "5dcc56d579843d582aa29d13",
                "programID": "53326*",
                "composer": "Spohr,  Louis",
                "title": "NONET, F MAJOR, OP. 31"
            },
            {
                "soloists": [],
                "_id": "5dcc56d579843d582aa29d12",
                "programID": "0*",
                "interval": "Intermission"
            },
            {
                "soloists": [
                    {
                        "_id": "5dcc56d579843d582aa29d11",
                        "name": "Robinson, Joseph",
                        "instrument": "Oboe",
                        "role": "Assisting Artist"
                    }...
                    {
                        "_id": "5dcc56d579843d582aa29d06",
                        "name": "Bernsohn, Lorin",
                        "instrument": "Cello",
                        "role": "Assisting Artist"
                    },
                    {
                        "_id": "5dcc56d579843d582aa29d05",
                        "name": "Saxon, Michele",
                        "instrument": "Double Bass",
                        "role": "Assisting Artist"
                    }
                ],
                "_id": "5dcc56d579843d582aa29d04",
                "programID": "4021*",
                "composer": "Dvorak,  Antonín",
                "title": "SERENADE, D MINOR, OP.44",
                "conductor": "Chambers, James"
            }
        ],
        "__v": 0
    },
```

### Requirements Checklist

- [x] Be built using Express and Mongoose.
- [x] Have at least one model.
- [x] Have complete CRUD functionality implemented with RESTful routes. (You may
- [ ] logically distribute CRUD functionality across models, should you decide to implement more than one. This is only allowed
      when it does not make sense in the context of your application to have full
      CRUD on one model).
- [x] Have its own repository under your GitHub account (do not fork this repo).
- [ ]  Be deployed to Heroku (we will have a lesson on this later this week).
- [x] Have good, clean Javascript code. Only include comments for documentation,
      and don't include any non-functional code. Use the auto-formatter regularly!
- [x] Demonstrate a good commit history.
- Have well-documented API routes. You can do this in your Readme, or using
  Swagger or apidoc (see below).

## Built With

- [Heroku](https://www.heroku.com/home)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [Nodejs](https://nodejs.org/en/)

# Future Objectives
- [ ] Search inner arrays - conductor, works, soloists, etc.
- [ ] Change Date and Time from String to Array Type
- [ ] Make search easier, non eact match.
- [ ] More/All of the archive, and keep it current.

## Acknowledgments
- [**Bill Levay**](http://wjlevay.net) - [wjlevay](https://github.com/wjlevay) 
- [GitHub Repo with DataSet](https://github.com/nyphilarchive/PerformanceHistory)
- [New York Philharmonic Leon Levy Digital Archives](https://archives.nyphil.org/)

