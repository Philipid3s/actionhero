'use strict'
const ActionHero = require('actionhero')

module.exports = class MyTask extends ActionHero.Task {
  constructor () {
    super()
    this.name = 'stats'
    this.description = 'an actionhero task'
    this.frequency = 30000
    this.queue = 'default'
    this.middleware = []
  }

  async run (data) {
    var d = new Date();
    console.log(`Task (${d})`);
  }
}
