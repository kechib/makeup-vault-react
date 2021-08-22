# Journal Mia - A Music Journal
## Description
The Makeup Vault is a recreation of [Makeup Vault CLI](https://github.com/kechib/makeup-vault-client) a single page application using jQuery, AJAX, DOM Manipulation and SASS. I integrated to React to create a more modular, accessible, and prettier application that would be performant and dynamic. This application lets authenticated users publish, review, and learn about Makeup products. This one of my favorite project simply because it showcases my love of beautiful UI's & makeup and skincare.



## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Journal Mia dependecies.

<!-- {% include codeHeader.html %} -->
```bash
npm install
```
start the server

```bash
npm start
```

## Links
[Front End Repo -->](https://github.com/kechib/journal-client)
[Journal-Mia App -->](https://kechib.github.io/journal-client)


## Technologies Used
- React
- Axios
- SASS
- React-Bootstrap
- Node
- JSX
- ESLint

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


<!-- ## Planning Story
- Create wireframes and ERD.
- Create user and journal models.
- Make migrations
- Create user and journal views.
- Create user  and journal serializers.
- Create and test authorization events using curl scripts.
- Create and test journal routes using curl-scripts -->
## User Stories
- As a user I want to be able to sign-up/sign-in
-	As a user I want to be able to change-password
-	As a user I want to be able to sign-out

## Journal Stories

-	As a user I want to make a journal entry
-	As a user I want to view a single journal entry
-	As a user I want to view all my journal entries
-	As a user I want to edit an entry I created
-	As a user I want to delete an entry I created





## Authentication
| Verb   | URI Pattern             | Controller#Action |
|:-------|:----------------------- |:------------------|
| POST   | `/sign-up/`             | `users#signup`    |
| POST   | `/sign-in/`             | `users#signin`    |
| PATCH  | `/change-password/`     | `users#changepw`  |
| DELETE | `/sign-out/`            | `users#signout`   |

## Journal Routes
| Verb   | URI Pattern               |Controller#Action|
|:-------|:----------------------    |:---------------|
| GET    | `/reviews/`               | `reviewsindex` |
| GET    | `/product-reviews/`       | `reviewsshow`  |
| GET    | `/product-reviews/:id`    | `reviewsshow`  |
| GET    | `/reviews/:id`            | `reviewsshow`  |
| POST   | `/reviews-create/`        | `reviewscreate`|
| PATCH  | `/reviews-title/`         | `reviewsupdate`|
| DELETE | `/reviews/:id`            | `reviewsdestroy`|

<!-- ## WireFrames
![ERD](./erd.png) -->

## License

MIT License

Copyright (c) [2021] [Kechi Boniface]
