import * as path from 'path'
import * as NeDB from 'nedb'
const service = require('feathers-nedb')
import hooks from './hooks'

export default function () {
  const app = this

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'messages.db'),
    autoload: true
  })

  let options = {
    Model: db,
    paginate: {
      default: 5,
      max: 25
    }
  }

  // Initialize our service with any options it requires
  app.use('/messages', service(options))

  // Get our initialize service to that we can bind hooks
  const messageService = app.service('/messages')

  // Set up our before hooks
  messageService.before(hooks.before)

  // Set up our after hooks
  messageService.after(hooks.after)
}
