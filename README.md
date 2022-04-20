# Nishauri Dashboard

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## Docker set up
    git clone https://github.com/palladiumkenya/nishauri.git
    cd nishauri
    docker build -t nishauri:latest .
    docker run -p 8000:80 -d --name=nishauri --restart always nishauri:latest
    You can now access the server at http://localhost:8000

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
