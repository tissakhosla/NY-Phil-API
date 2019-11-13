# ![NYPhil Logo](https://archives.nyphil.org/images/logo-mobile.gif) Project: Building a JSON API

## Description

I built a JSON API using Mongoose and Express. In addition, I
found a dataset online to pull data from, and used this retrieved data to
build your own model(s),  seed your database.

## Requirements Checklist

### Technical Requirements

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

The above are minimum requirements. If you want some extra inspiration, try one
of these ideas:

- [Swagger](https://swagger.io/tools/swagger-inspector/)
  - Swagger is a fantastic tool that helps you build new APIs or document
    existing ones. It plays nicely with node and express.
- [apidoc](https://github.com/apidoc/apidoc)
  - apidoc is a tool that lets you describe existing APIs using inline comments
    in your code and will generate documentation for them.
- [Artillery](https://artillery.io/)
  - Artillery is a load-testing toolkit, which is a lot of fun to use.
- Authentication w/ JSON web tokens
  - Have your server require an auth token to accept requests.
  - http://jasonwatmore.com/post/2018/08/06/nodejs-jwt-authentication-tutorial-with-example-api

Review the [Rubric](evaluation.md) for the specifics of how your project will be
graded.

## Submission

**_DO NOT FORK THIS REPOSITORY!_** Create a **new** repository. Then, submit
your project as an issue to this repo:

[github.com/ga-dc/project2-gallery](https://github.com/ga-dc/project2-gallery/issues/new)

With your submission please include any questions you'd like answered, or
specific things on which you'd like us to focus when giving feedback.

Your submission must include **all** of the following:

### Necessary Deliverables

Your project is due on the the date is in your
course calendar. Create an issue on
[the project2-gallery repository](https://github.com/ga-dc/project2-gallery)
containing:

- A link to your Github repository (Do not fork this repo)
- A link to your project deployed on Heroku

Your repository should contain:

- A working application (built by you) that meets the technical
  requirements above.
- Frequent commits dating back to the very beginning of the project.
- A `readme.md` file in the root of your repo that follows
  [good standards of documentation](https://git.generalassemb.ly/ga-wdi-lessons/documentation-markdown)
  (i.e. explanations of the technologies used, the approach taken, features,
  installation instructions, unsolved problems, etc.)
- A link to your hosted, working application in the URL section of your Github
  repo:

> ![The URL section of your Github repo](https://i.imgur.com/QQ7RsfR.gif)

## Planning

1. - [x] [Watch this video on the Minimum Viable Product](https://www.youtube.com/watch?v=1FoCbbbcYT8)
2. - [x] Begin with the end in mind. Spend a dedicated block of time planning your
   project on the first day.
3. - [x] Write pseudocode before you write actual code. Thinking through the logic of
   something helps streamline your process.

### Building Out from your Plan

After planning your app:

1. - [x] Start with building your model(s) and linking them to the database. Create a
   couple pieces of seed data so that you can see data retrieved from your
   database (by a mongoose model) show up on the page later.
1. - [x] Retrieve your data from the API. -- Used an existing Dataset
1. - [x]Seed the database using your models and newly retrieved data.
1. - [x]Build your routes.

## Pre-employment checklist

Make sure your project looks professional and presentable when you go to apply
for jobs by completing some (or all) of the following:

- [ ] Add the deployed URL to repo settings
- [ ] Add a readme with:
  - [ ] An embedded screenshot of the app
  - [ ] Explanations of the **technologies** used
  - [ ] **Installation instructions** for any dependencies
  - [ ] Descriptions of any **unsolved problems** or **major hurdles** you had
        to overcome
- [ ] Add your project to your portfolio site
  - [ ] Include an image, title, and brief description
  - [ ] Link to both the deployed project and the repository on GitHub
- [ ] Write and share a post linking to your project on LinkedIn. Be sure to
      include:
  - An image/screenshot of your project
  - A link to the deployed version of your project
  - A brief description of the project, mentioning that you are a new developer
  - Appropriate tags for your post: `#webdevelopment`, `#developers`,
    `#softwaredevelopment`, `#softwareengineers`
- [ ] Write and share a post linking to your project on Twitter. Be sure to
      include:
  - An image/screenshot of your project
  - A link to the deployed version of your project
- [ ] Write and publish a brief blog post about your project to Medium or
      Dev.to:
  - Include what you decided to build, how you approached building, the "phases"
    you went through, one particularly challenging technical hurdle and how you
    overcame it, and a conclusion
  - Include lots of images, code snippets, and screenshots
  - Include a link to your repo and deployed project
