import * as chalk from 'chalk'
import * as path from 'path'
import * as compress from 'compression'
import * as cors from 'cors'
import * as favicon from 'serve-favicon'
import * as bodyParser from 'body-parser'
const feathers = require('feathers')
const serveStatic = require('feathers').static;
const configuration = require('feathers-configuration')
const hooks = require('feathers-hooks')
const rest = require('feathers-rest')
const socketio = require('feathers-socketio')
const handler = require('feathers-errors/handler')
// const memory = require('feathers-memory')

// import service from './service'
import middleware from './middleware'


// const authentication = require('feathers-authentication/client');

const app = feathers()

app.configure(configuration(path.join(__dirname, '.')))

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon(path.join(app.get('public'), 'favicon.ico')))
  .use('/', serveStatic(app.get('public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  // .configure(service)
  .configure(middleware)

export default app
