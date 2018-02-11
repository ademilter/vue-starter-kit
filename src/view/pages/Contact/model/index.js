import _findIndex from 'lodash/findIndex'
import moment from 'moment'

export default class Messages {
  constructor (messages = []) {
    this.list = messages
  }

  addMessages (messages) {
    this.list = []
    messages.forEach(message => this.addMessage(message))
  }

  addMessage (message) {
    let newMessage = new Message(message)
    this.list.unshift(newMessage)
  }

  deleteMessage (id) {
    let index = this.findIndex(id)
    if (index > -1) {
      this.list.splice(index, 1)
    }
  }

  findIndex (Id) {
    return _findIndex(this.list, ['id', Id])
  }
}

export class Message {
  constructor (message) {
    this.createdAt = message.createdAt
    this.email = message.email
    this.id = message.id
    this.message = message.message
  }

  get humanTime () {
    return moment.unix(this.createdAt).fromNow()
  }
}
