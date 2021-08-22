# The Makeup Vault
## Description
The Makeup Vault is a recreation of [Makeup Vault CLI](https://github.com/kechib/makeup-vault-client) a single page application using jQuery, AJAX, DOM Manipulation and SASS. I integrated to React to create a more modular, accessible, and prettier application that would be performant and dynamic. This application lets authenticated users publish, review, and learn about Makeup products. This one of my favorite project simply because it showcases my love of beautiful UI's & makeup and skincare.
## Installation

Use the package manager [npm](https://www.npmjs.com/) 

Install Project Dependencies

```bash
npm install
```
start the server

```bash
npm start
```

## Links
[Makeup Vault Node API](https://github.com/kechib/makeup-vault-react)

[Makeup Vault App ](https://kechib.github.io/makeup-vault-react)



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


## License

MIT License

Copyright (c) [2021] [Kechi Boniface] 
[MIT](https://choosealicense.com/licenses/mit/)
