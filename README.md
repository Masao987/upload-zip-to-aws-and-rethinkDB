### Features
- Angular 2 + typescript
- Webpack for both client and server side
- FeathersJS
- RethinkDB

### development

```sh
# prepare environment
npm i nodemon ts-node typescript@beta -g

# build client code
npm run build:dev

# start server
nodemon --watch 'server.ts' --exec 'ts-node' ./server.ts

# docker way
docker-compose up --build
```
### todo
- ( ) rethinkdb integration
- ( ) user authentication and authorization
- ( ) integrate ng2 service with feathers
- ( ) demo feathers service with websocket and rethinkdb
- ( ) webpack for server side code
- ( ) unit test

#### packages should be removed
- nedb
- @types/nedb
- feathers-nedb
